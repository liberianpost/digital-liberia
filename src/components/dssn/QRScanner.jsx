import React, { useState, useRef, useEffect } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [stream, setStream] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);

  // Simple camera initialization
  const initializeCamera = async () => {
    try {
      setError(null);
      setIsInitializing(true);
      setCameraReady(false);

      console.log('Starting camera initialization...');

      // Check browser support
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera not supported in this browser. Please use Chrome, Firefox, or Safari.');
      }

      // Get camera stream
      console.log('Requesting camera access...');
      const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      setStream(cameraStream);
      console.log('Camera access granted');

      // Wait for video element to be available
      await new Promise(resolve => setTimeout(resolve, 100));

      if (!videoRef.current) {
        throw new Error('Camera view not ready');
      }

      console.log('Setting up video element...');
      
      // Set video source
      videoRef.current.srcObject = cameraStream;
      videoRef.current.playsInline = true;
      videoRef.current.muted = true;
      videoRef.current.setAttribute('playsinline', 'true');

      // Wait for video to be ready
      await new Promise((resolve, reject) => {
        const video = videoRef.current;
        
        const onLoaded = () => {
          console.log('Video loaded successfully');
          video.removeEventListener('loadeddata', onLoaded);
          video.removeEventListener('error', onError);
          resolve();
        };

        const onError = (e) => {
          console.error('Video error:', e);
          video.removeEventListener('loadeddata', onLoaded);
          video.removeEventListener('error', onError);
          reject(new Error('Video failed to load'));
        };

        if (video.readyState >= 4) { // HAVE_ENOUGH_DATA
          console.log('Video already ready');
          resolve();
        } else {
          console.log('Waiting for video to load...');
          video.addEventListener('loadeddata', onLoaded);
          video.addEventListener('error', onError);
          setTimeout(() => {
            if (video.readyState >= 2) { // HAVE_CURRENT_DATA
              console.log('Video ready via timeout');
              resolve();
            } else {
              reject(new Error('Video loading timeout'));
            }
          }, 3000);
        }
      });

      console.log('Attempting to play video...');
      
      // Try to play the video
      try {
        await videoRef.current.play();
        console.log('Video playback started successfully');
      } catch (playError) {
        console.warn('Video play failed:', playError);
        // Continue anyway - sometimes autoplay restrictions don't affect the display
      }

      // Double check if video is actually showing
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (videoRef.current) {
        const video = videoRef.current;
        const isVideoActive = video.readyState > 0 && video.videoWidth > 0 && video.videoHeight > 0;
        
        console.log('Video status:', {
          readyState: video.readyState,
          videoWidth: video.videoWidth,
          videoHeight: video.videoHeight,
          isVideoActive: isVideoActive
        });

        if (!isVideoActive) {
          throw new Error('Camera feed not active. Please ensure camera permissions are granted.');
        }
      }

      setHasCamera(true);
      setCameraReady(true);
      setError(null);
      console.log('Camera initialization complete');

    } catch (err) {
      console.error('Camera initialization failed:', err);
      
      // Clean up stream if it exists
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      let errorMessage = 'Camera setup failed: ';
      
      if (err.name === 'NotAllowedError') {
        errorMessage = 'Camera permission denied. Please allow camera access in your browser settings and refresh the page.';
      } else if (err.name === 'NotFoundError') {
        errorMessage = 'No camera found on this device.';
      } else if (err.name === 'NotSupportedError') {
        errorMessage = 'Camera not supported in this browser.';
      } else if (err.name === 'NotReadableError') {
        errorMessage = 'Camera is busy. Please close other apps using the camera.';
      } else if (err.message.includes('Camera feed not active')) {
        errorMessage = 'Camera is connected but not displaying. Please check permissions and try again.';
      } else {
        errorMessage += err.message;
      }
      
      setError(errorMessage);
      setHasCamera(false);
      setCameraReady(false);
    } finally {
      setIsInitializing(false);
    }
  };

  // Capture image and try to decode QR code using native browser API
  const captureAndScan = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    try {
      setError(null);
      
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Check if video is actually active
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        throw new Error('Camera not active. Please ensure camera is working.');
      }

      // Set canvas size to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw current video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Try to use native QR code detection if available
      if ('BarcodeDetector' in window) {
        try {
          const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });
          const barcodes = await barcodeDetector.detect(canvas);
          
          if (barcodes.length > 0) {
            const qrData = barcodes[0].rawValue;
            onScan(qrData);
            return;
          } else {
            setError('No QR code detected. Ensure the QR code is clearly visible in the frame.');
          }
        } catch (nativeError) {
          console.log('Native QR detection failed:', nativeError);
          setError('QR code detection failed. Please use manual entry.');
        }
      } else {
        setError('Automatic QR scanning not supported in this browser. Please use manual entry.');
      }
      
    } catch (error) {
      console.error('Capture error:', error);
      setError(error.message || 'Failed to capture image. Please try again.');
    }
  };

  // Manual QR code input as fallback
  const handleManualInput = () => {
    const qrCode = prompt('Please enter the DSSN QR code data manually:');
    if (qrCode && qrCode.trim()) {
      onScan(qrCode.trim());
    }
  };

  // Check if browser supports native QR detection
  const supportsNativeQR = () => {
    return 'BarcodeDetector' in window;
  };

  // Initialize on mount
  useEffect(() => {
    initializeCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const retryCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setError(null);
    setHasCamera(false);
    setCameraReady(false);
    setIsInitializing(true);
    
    setTimeout(() => {
      initializeCamera();
    }, 500);
  };

  const closeScanner = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-br from-indigo-900/90 to-blue-900/90 border border-indigo-700/30 rounded-xl max-w-2xl w-full shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              QR Code Scanner
            </h3>
            <button
              onClick={closeScanner}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {error && (
            <div className={`mb-4 p-4 rounded-lg ${
              error.includes('No QR code') || error.includes('not supported')
                ? 'bg-yellow-900/40 border border-yellow-700/30' 
                : 'bg-red-900/40 border border-red-700/30'
            }`}>
              <div className="flex items-start">
                <svg className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                  error.includes('No QR code') || error.includes('not supported') ? 'text-yellow-400' : 'text-red-400'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <span className={error.includes('No QR code') || error.includes('not supported') ? 'text-yellow-200' : 'text-red-200'}>
                    {error}
                  </span>
                  {error.includes('not supported') && (
                    <div className="mt-2">
                      <button
                        onClick={handleManualInput}
                        className="text-blue-300 hover:text-blue-100 text-sm underline"
                      >
                        Use Manual Entry Instead
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {isInitializing && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold text-white mb-2">Setting Up Camera</h4>
              <p className="text-gray-300 text-sm">
                Please allow camera permissions when prompted...
              </p>
              <button 
                onClick={retryCamera}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors"
              >
                Retry Camera
              </button>
            </div>
          )}

          {!isInitializing && hasCamera && cameraReady && (
            <>
              <div className="relative bg-black rounded-lg overflow-hidden mb-4 border-2 border-green-400">
                <video 
                  ref={videoRef}
                  className="w-full h-64 md:h-96 object-cover bg-gray-900"
                  playsInline
                  muted
                  autoPlay
                  style={{ display: 'block' }}
                />
                
                {/* Scanner overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="border-2 border-white rounded-lg w-48 h-48 md:w-64 md:h-64 relative">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white"></div>
                  </div>
                </div>

                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Live Camera Feed
                </div>

                {/* Hidden canvas for capture */}
                <canvas ref={canvasRef} className="hidden" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                {supportsNativeQR() ? (
                  <button
                    onClick={captureAndScan}
                    className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    Scan QR Code
                  </button>
                ) : (
                  <div className="text-center w-full py-3">
                    <p className="text-yellow-300 text-sm">
                      Automatic QR scanning not available in this browser
                    </p>
                  </div>
                )}

                <button
                  onClick={handleManualInput}
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  Manual Entry
                </button>
              </div>

              <div className="text-center">
                <button
                  onClick={retryCamera}
                  className="text-blue-300 hover:text-blue-100 text-sm underline"
                >
                  Reinitialize Camera
                </button>
              </div>
            </>
          )}

          {!isInitializing && !hasCamera && (
            <div className="text-center py-8">
              <div className="text-red-400 text-6xl mb-4">📷</div>
              <h4 className="text-xl font-semibold text-white mb-2">Camera Unavailable</h4>
              <p className="text-gray-300 mb-6">
                Unable to access camera. You can still verify DSSN manually.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={retryCamera}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
                >
                  Try Camera Again
                </button>
                <button
                  onClick={handleManualInput}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors font-medium"
                >
                  Enter DSSN Manually
                </button>
                <button
                  onClick={closeScanner}
                  className="w-full px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
