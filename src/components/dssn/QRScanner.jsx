import React, { useState, useRef, useEffect, useCallback } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [stream, setStream] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const initializationAttempted = useRef(false);

  // Enhanced camera initialization with better timing
  const initializeCamera = useCallback(async () => {
    // Prevent multiple simultaneous initializations
    if (initializationAttempted.current) {
      return;
    }
    
    initializationAttempted.current = true;
    let currentStream = null;
    
    try {
      setError(null);
      setIsInitializing(true);
      setCameraReady(false);
      console.log('🔍 Starting camera initialization...');

      // Check browser support
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera not supported in this browser. Please use Chrome, Firefox, or Safari.');
      }

      // Wait a bit longer for DOM to be ready and refs to be set
      await new Promise(resolve => setTimeout(resolve, 300));

      // Check if video element exists with more detailed logging
      if (!videoRef.current) {
        console.error('❌ Video ref is null - component not fully mounted');
        console.log('❌ Video ref details:', {
          videoRef,
          current: videoRef.current,
          containerRef: videoContainerRef.current
        });
        throw new Error('Camera view not ready. Please try again.');
      }

      const video = videoRef.current;
      console.log('✅ Video element found:', video);
      
      // Clear any previous stream
      video.srcObject = null;

      // Request camera access with better error handling
      console.log('📷 Requesting camera access...');
      
      const constraints = {
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      // Try environment camera first, then user camera
      try {
        currentStream = await navigator.mediaDevices.getUserMedia({
          ...constraints,
          video: { ...constraints.video, facingMode: 'environment' }
        });
        console.log('✅ Environment camera selected');
      } catch (envError) {
        console.warn('⚠️ Environment camera failed, trying user camera:', envError);
        currentStream = await navigator.mediaDevices.getUserMedia({
          ...constraints,
          video: { ...constraints.video, facingMode: 'user' }
        });
        console.log('✅ User camera selected');
      }

      if (!currentStream) {
        throw new Error('Could not access any camera');
      }

      setStream(currentStream);
      console.log('✅ Camera stream obtained');

      // Set video source with error handling
      try {
        video.srcObject = currentStream;
        video.playsInline = true;
        video.muted = true;
        video.setAttribute('playsinline', 'true');
        video.setAttribute('autoplay', 'true');
        console.log('✅ Video source set');
      } catch (srcError) {
        console.error('❌ Error setting video source:', srcError);
        throw new Error('Failed to setup video element');
      }

      // Wait for video to be ready with comprehensive event handling
      await new Promise((resolve, reject) => {
        const cleanup = () => {
          video.removeEventListener('loadedmetadata', onLoaded);
          video.removeEventListener('canplay', onCanPlay);
          video.removeEventListener('error', onError);
          clearTimeout(timeoutId);
        };

        const onLoaded = () => {
          console.log('✅ Video metadata loaded');
          cleanup();
          resolve();
        };

        const onCanPlay = () => {
          console.log('✅ Video can play');
          cleanup();
          resolve();
        };

        const onError = (e) => {
          console.error('❌ Video error event:', e);
          cleanup();
          reject(new Error('Video element error: ' + e.message));
        };

        // Check if already ready
        if (video.readyState >= 3) {
          console.log('✅ Video already ready, state:', video.readyState);
          cleanup();
          resolve();
          return;
        }

        video.addEventListener('loadedmetadata', onLoaded);
        video.addEventListener('canplay', onCanPlay);
        video.addEventListener('error', onError);

        const timeoutId = setTimeout(() => {
          // Check current state before rejecting
          if (video.readyState >= 2) {
            console.log('✅ Video ready after timeout, state:', video.readyState);
            cleanup();
            resolve();
          } else {
            console.error('❌ Video loading timeout, state:', video.readyState);
            cleanup();
            reject(new Error('Camera initialization timeout - video not ready'));
          }
        }, 8000); // Increased timeout
      });

      // Try to play video
      try {
        await video.play();
        console.log('▶️ Video playback started');
      } catch (playError) {
        console.warn('⚠️ Video play failed, but continuing:', playError);
        // Continue anyway - autoplay might still work
      }

      // Final verification with multiple attempts
      let verificationPassed = false;
      for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const isActive = 
          video.readyState >= 4 && 
          video.videoWidth > 0 && 
          video.videoHeight > 0 &&
          video.srcObject === currentStream;

        if (isActive) {
          console.log('✅ Camera verification passed on attempt', i + 1, {
            width: video.videoWidth,
            height: video.videoHeight,
            readyState: video.readyState
          });
          verificationPassed = true;
          break;
        } else {
          console.log('🔄 Camera verification attempt', i + 1, 'failed:', {
            readyState: video.readyState,
            width: video.videoWidth,
            height: video.videoHeight,
            hasStream: !!video.srcObject
          });
        }
      }

      if (verificationPassed) {
        setHasCamera(true);
        setCameraReady(true);
        setError(null);
        console.log('🎉 Camera setup completed successfully');
      } else {
        throw new Error('Camera feed not active after multiple attempts');
      }

    } catch (err) {
      console.error('❌ Camera initialization failed:', err);
      
      // Clean up stream
      if (currentStream) {
        currentStream.getTracks().forEach(track => {
          track.stop();
          console.log('🛑 Stopped track:', track.kind, track.label);
        });
      }

      let errorMessage = err.message || 'Camera setup failed';
      
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
      }
      
      setError(errorMessage);
      setHasCamera(false);
      setCameraReady(false);
    } finally {
      setIsInitializing(false);
      initializationAttempted.current = false;
    }
  }, []);

  // Capture and scan QR code
  const captureAndScan = async () => {
    if (!videoRef.current || !cameraReady) {
      setError('Camera not ready. Please wait for camera initialization or try again.');
      return;
    }

    try {
      setError(null);
      
      const video = videoRef.current;
      
      // Check camera activity
      if (video.videoWidth === 0 || video.videoHeight === 0) {
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

  // Enhanced useEffect with proper timing
  useEffect(() => {
    console.log('🚀 QRScanner mounted, starting initialization...');
    
    // Use a longer delay to ensure DOM is fully ready
    const initTimer = setTimeout(() => {
      initializeCamera();
    }, 500);

    return () => {
      console.log('🧹 QRScanner unmounting, cleaning up...');
      clearTimeout(initTimer);
      
      if (stream) {
        console.log('🛑 Stopping all stream tracks...');
        stream.getTracks().forEach(track => {
          track.stop();
          console.log('✅ Stopped track:', track.kind);
        });
      }
      
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [initializeCamera]);

  const retryCamera = async () => {
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
    
    // Wait for cleanup to complete
    await new Promise(resolve => setTimeout(resolve, 800));
    
    initializeCamera();
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

          {/* Video container - ALWAYS RENDER THIS */}
          <div 
            ref={videoContainerRef}
            className={`relative bg-black rounded-lg overflow-hidden mb-4 min-h-[16rem] md:min-h-[24rem] flex items-center justify-center ${
              hasCamera && cameraReady ? 'border-2 border-green-400' : 'border-2 border-gray-600'
            }`}
          >
            {/* Video element - ALWAYS RENDER THIS */}
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
              autoPlay
            />
            
            {/* Scanner overlay - only show when camera is ready */}
            {hasCamera && cameraReady && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border-2 border-white rounded-lg w-48 h-48 md:w-64 md:h-64 relative">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white"></div>
                </div>
              </div>
            )}

            {/* Status indicator */}
            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {isInitializing ? 'Initializing...' : 
               hasCamera && cameraReady ? 'Live Camera Feed' : 
               'Camera Offline'}
            </div>

            {/* Fallback content when camera is not ready */}
            {!isInitializing && !hasCamera && (
              <div className="text-center text-white p-4">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm">Camera not available</p>
              </div>
            )}
          </div>

          {!isInitializing && hasCamera && cameraReady && (
            <>
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
            <div className="text-center py-4">
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
