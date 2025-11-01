import React, { useState, useRef, useEffect } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [stream, setStream] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);

  // Enhanced camera initialization with better error handling
  const initializeCamera = async () => {
    let currentStream = null;
    
    try {
      setError(null);
      setIsInitializing(true);
      setCameraReady(false);
      console.log('🔍 Starting camera initialization...');

      // Check browser support more thoroughly
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera not supported in this browser. Please use Chrome, Firefox, or Safari.');
      }

      // Check if video element exists early
      if (!videoRef.current) {
        console.error('❌ Video ref is null - component may not be mounted');
        throw new Error('Camera view not ready. Please try again.');
      }

      const video = videoRef.current;
      
      // Clear any previous stream
      video.srcObject = null;

      // Request camera access with fallback options
      console.log('📷 Requesting camera access...');
      try {
        currentStream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        });
      } catch (streamError) {
        console.warn('⚠️ Environment camera failed, trying user camera:', streamError);
        // Fallback to user camera
        currentStream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        });
      }

      setStream(currentStream);
      console.log('✅ Camera access granted');

      // Set video source immediately
      video.srcObject = currentStream;
      video.playsInline = true;
      video.muted = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('autoplay', 'true');

      // Wait for video to be ready with better state checking
      await new Promise((resolve, reject) => {
        let timeoutId;
        
        const onLoaded = () => {
          console.log('✅ Video loaded successfully');
          cleanup();
          resolve();
        };

        const onCanPlay = () => {
          console.log('✅ Video can play');
          cleanup();
          resolve();
        };

        const onError = (e) => {
          console.error('❌ Video error:', e);
          cleanup();
          reject(new Error('Video failed to load'));
        };

        const checkVideoState = () => {
          if (video.readyState >= 4) {
            console.log('✅ Video ready state:', video.readyState);
            cleanup();
            resolve();
            return;
          }
          
          if (video.videoWidth > 0 && video.videoHeight > 0) {
            console.log('✅ Video has dimensions:', video.videoWidth, 'x', video.videoHeight);
            cleanup();
            resolve();
            return;
          }
        };

        const cleanup = () => {
          video.removeEventListener('loadeddata', onLoaded);
          video.removeEventListener('canplay', onCanPlay);
          video.removeEventListener('error', onError);
          clearTimeout(timeoutId);
          clearInterval(intervalId);
        };

        // Set up event listeners
        video.addEventListener('loadeddata', onLoaded);
        video.addEventListener('canplay', onCanPlay);
        video.addEventListener('error', onError);

        // Check video state periodically
        const intervalId = setInterval(checkVideoState, 100);

        // Timeout after 5 seconds
        timeoutId = setTimeout(() => {
          if (video.readyState >= 2) {
            console.log('✅ Video ready after timeout');
            cleanup();
            resolve();
          } else {
            console.error('❌ Video loading timeout');
            cleanup();
            reject(new Error('Camera initialization timeout'));
          }
        }, 5000);
      });

      // Try to play video with better error handling
      try {
        await video.play();
        console.log('▶️ Video playback started');
      } catch (playError) {
        console.warn('⚠️ Video play failed, but continuing:', playError);
        // Continue anyway - autoplay might still work
      }

      // Final verification with multiple checks
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const isVideoActive = 
        video.readyState >= 4 && 
        video.videoWidth > 0 && 
        video.videoHeight > 0 &&
        video.srcObject === currentStream;

      if (isVideoActive) {
        console.log('✅ Camera feed is fully active:', {
          width: video.videoWidth,
          height: video.videoHeight,
          readyState: video.readyState
        });
        
        setHasCamera(true);
        setCameraReady(true);
        setError(null);
      } else {
        console.warn('⚠️ Video verification failed:', {
          readyState: video.readyState,
          width: video.videoWidth,
          height: video.videoHeight,
          hasStream: !!video.srcObject
        });
        throw new Error('Camera feed not active after initialization');
      }

    } catch (err) {
      console.error('❌ Camera initialization failed:', err);
      
      // Clean up stream
      if (currentStream) {
        currentStream.getTracks().forEach(track => {
          track.stop();
          console.log('🛑 Stopped track:', track.kind);
        });
      }

      let errorMessage = 'Camera setup failed: ';
      
      if (err.name === 'NotAllowedError') {
        errorMessage = 'Camera permission denied. Please allow camera access and refresh the page.';
      } else if (err.name === 'NotFoundError') {
        errorMessage = 'No camera found on this device.';
      } else if (err.name === 'NotSupportedError') {
        errorMessage = 'Camera not supported in this browser.';
      } else if (err.name === 'NotReadableError') {
        errorMessage = 'Camera is busy. Please close other apps using the camera.';
      } else if (err.message.includes('not ready')) {
        errorMessage = 'Camera view not ready. Please try again.';
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

  // Enhanced capture and scan with camera readiness check
  const captureAndScan = async () => {
    if (!videoRef.current || !cameraReady) {
      setError('Camera not ready. Please wait for camera initialization or try again.');
      return;
    }

    try {
      setError(null);
      
      const video = videoRef.current;
      
      // Enhanced camera activity check
      if (video.videoWidth === 0 || video.videoHeight === 0 || video.readyState < 4) {
        throw new Error('Camera not active. Please reinitialize camera.');
      }

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Set canvas size to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw current video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Try native QR detection
      if ('BarcodeDetector' in window) {
        try {
          const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });
          const barcodes = await barcodeDetector.detect(canvas);
          
          if (barcodes.length > 0) {
            const qrData = barcodes[0].rawValue;
            console.log('✅ QR code scanned:', qrData);
            onScan(qrData);
            return;
          } else {
            setError('No QR code detected. Ensure the QR code is clearly visible in the frame.');
          }
        } catch (nativeError) {
          console.log('QR detection failed:', nativeError);
          setError('QR scanning failed. Please use manual entry.');
        }
      } else {
        setError('Automatic QR scanning not supported in this browser. Please use manual entry.');
      }
      
    } catch (error) {
      console.error('Capture error:', error);
      setError(error.message || 'Failed to capture image. Please try again.');
    }
  };

  // Manual input
  const handleManualInput = () => {
    const qrCode = prompt('Please enter the DSSN QR code data manually:');
    if (qrCode && qrCode.trim()) {
      onScan(qrCode.trim());
    }
  };

  // Check browser support
  const supportsNativeQR = () => {
    return 'BarcodeDetector' in window;
  };

  // Enhanced useEffect with proper cleanup
  useEffect(() => {
    // Small delay to ensure component is fully mounted
    const initTimer = setTimeout(() => {
      initializeCamera();
    }, 100);

    return () => {
      clearTimeout(initTimer);
      // Enhanced cleanup
      if (stream) {
        console.log('🧹 Cleaning up camera stream...');
        stream.getTracks().forEach(track => {
          track.stop();
          console.log('🛑 Stopped track on unmount:', track.kind);
        });
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, []);

  const retryCamera = () => {
    console.log('🔄 Retrying camera initialization...');
    
    // Enhanced cleanup
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
        console.log('🛑 Stopped track on retry:', track.kind);
      });
      setStream(null);
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    
    setError(null);
    setHasCamera(false);
    setCameraReady(false);
    setIsInitializing(true);
    
    // Slightly longer delay to ensure cleanup is complete
    setTimeout(() => {
      initializeCamera();
    }, 800);
  };

  const closeScanner = () => {
    console.log('🚪 Closing scanner...');
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
        console.log('🛑 Stopped track on close:', track.kind);
      });
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
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
              <div className="mt-4 text-xs text-gray-400">
                <p>If no permission prompt appears, check your browser settings.</p>
              </div>
            </div>
          )}

          {!isInitializing && hasCamera && (
            <>
              {/* Video container */}
              <div 
                ref={videoContainerRef}
                className="relative bg-black rounded-lg overflow-hidden mb-4 border-2 border-green-400 min-h-[16rem] md:min-h-[24rem] flex items-center justify-center"
              >
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  autoPlay
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
                  {cameraReady ? 'Live Camera Feed' : 'Initializing...'}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                {supportsNativeQR() ? (
                  <button
                    onClick={captureAndScan}
                    disabled={!cameraReady}
                    className={`flex items-center justify-center px-6 py-3 rounded-lg text-white transition-colors font-medium ${
                      cameraReady 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gray-600 cursor-not-allowed'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    {cameraReady ? 'Scan QR Code' : 'Camera Loading...'}
                  </button>
                ) : (
                  <div className="text-center w-full py-3">
                    <p className="text-yellow-300 text-sm mb-2">
                      Automatic QR scanning not available
                    </p>
                    <p className="text-gray-400 text-xs">
                      (Requires Chrome, Edge, or Opera)
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
                {error || 'Unable to access camera. You can still verify DSSN manually.'}
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6 text-left">
                <p className="text-gray-300 font-medium mb-2">Troubleshooting tips:</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Allow camera permissions when prompted</li>
                  <li>• Ensure your device has a working camera</li>
                  <li>• Close other apps that might be using the camera</li>
                  <li>• Try refreshing the page</li>
                  <li>• Use Chrome or Firefox for best compatibility</li>
                </ul>
              </div>

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
