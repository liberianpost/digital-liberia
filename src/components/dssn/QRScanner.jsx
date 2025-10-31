import React, { useState, useRef, useEffect } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [cameraReady, setCameraReady] = useState(false);

  // Use a state to force re-render when video element should be ready
  const [videoKey, setVideoKey] = useState(0);

  // Initialize camera with proper timing
  useEffect(() => {
    let stream = null;
    let isMounted = true;

    const initializeCamera = async () => {
      try {
        if (!isMounted) return;
        
        setIsInitializing(true);
        setError(null);
        setCameraReady(false);

        console.log('Step 1: Checking browser support...');

        // Check browser support
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Camera not supported in this browser. Please use Chrome, Firefox, or Edge.');
        }

        console.log('Step 2: Waiting for DOM...');
        
        // Wait for DOM to be completely ready
        await new Promise(resolve => {
          if (document.readyState === 'complete') {
            resolve();
          } else {
            window.addEventListener('load', resolve);
            setTimeout(resolve, 1000); // Fallback
          }
        });

        // Additional delay to ensure React has rendered everything
        await new Promise(resolve => setTimeout(resolve, 300));

        console.log('Step 3: Checking video element...');
        
        // Force re-render of video element
        setVideoKey(prev => prev + 1);
        
        // Wait a bit more for the new video element to be in DOM
        await new Promise(resolve => setTimeout(resolve, 200));

        if (!videoRef.current) {
          console.error('Video ref is still null after re-render');
          throw new Error('Camera view not available. Please close and reopen the scanner.');
        }

        console.log('Step 4: Requesting camera permission...');

        // Request camera access
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        });

        console.log('Step 5: Setting up video element...');

        // Set video source
        videoRef.current.srcObject = stream;
        videoRef.current.playsInline = true;
        videoRef.current.muted = true;
        videoRef.current.setAttribute('playsinline', 'true');

        console.log('Step 6: Waiting for video to be ready...');

        // Wait for video to be ready with better error handling
        await new Promise((resolve, reject) => {
          const video = videoRef.current;
          if (!video) {
            reject(new Error('Video element lost'));
            return;
          }

          const onReady = () => {
            video.removeEventListener('loadeddata', onReady);
            video.removeEventListener('error', onError);
            resolve();
          };

          const onError = () => {
            video.removeEventListener('loadeddata', onReady);
            video.removeEventListener('error', onError);
            reject(new Error('Video failed to load'));
          };

          if (video.readyState >= 3) { // HAVE_FUTURE_DATA
            resolve();
          } else {
            video.addEventListener('loadeddata', onReady);
            video.addEventListener('error', onError);
            // Fallback timeout
            setTimeout(() => {
              if (video.readyState >= 1) { // HAVE_METADATA
                resolve();
              } else {
                reject(new Error('Video timeout'));
              }
            }, 3000);
          }
        });

        console.log('Step 7: Starting video playback...');

        // Play video
        try {
          await videoRef.current.play();
        } catch (playError) {
          console.warn('Video play failed, but continuing:', playError);
          // Continue even if play fails
        }

        if (!isMounted) return;

        console.log('Step 8: Camera setup complete');
        
        setCameraReady(true);
        setHasCamera(true);
        setError(null);

        // Now try to initialize QR scanner
        initializeQRScanner(stream);

      } catch (error) {
        console.error('Camera initialization failed:', error);
        if (!isMounted) return;

        let errorMessage = 'Camera setup failed: ';
        
        if (error.name === 'NotAllowedError') {
          errorMessage = 'Camera permission denied. Please allow camera access in your browser settings.';
        } else if (error.name === 'NotFoundError') {
          errorMessage = 'No camera found on this device. Please check if your device has a camera.';
        } else if (error.name === 'NotSupportedError') {
          errorMessage = 'Camera not supported in this browser. Please use Chrome, Firefox, or Safari.';
        } else if (error.name === 'NotReadableError') {
          errorMessage = 'Camera is busy. Please close other apps that might be using the camera.';
        } else if (error.message.includes('Video element')) {
          errorMessage = 'Camera view failed to load. Please try again.';
        } else {
          errorMessage += error.message;
        }
        
        setError(errorMessage);
        setHasCamera(false);
        setCameraReady(false);
        
        // Clean up stream if we got one
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
      } finally {
        if (isMounted) {
          setIsInitializing(false);
        }
      }
    };

    // Start initialization
    const timer = setTimeout(() => {
      initializeCamera();
    }, 500); // Longer initial delay

    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (window.currentScanner) {
        window.currentScanner.destroy().catch(console.error);
        window.currentScanner = null;
      }
    };
  }, []);

  const initializeQRScanner = async (stream) => {
    try {
      console.log('Initializing QR scanner...');
      
      const QrScannerModule = await import('qr-scanner');
      const QrScanner = QrScannerModule.default;

      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          console.log('QR code scanned:', result);
          if (result?.data) {
            onScan(result.data);
            scanner.stop();
          }
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
          maxScansPerSecond: 2,
        }
      );

      await scanner.start();
      console.log('QR scanner started successfully');
      
      window.currentScanner = scanner;

    } catch (qrError) {
      console.warn('QR scanner failed:', qrError);
      // Don't show error for QR scanner failure, just use camera
    }
  };

  const retryCamera = async () => {
    setError(null);
    setIsInitializing(true);
    setCameraReady(false);
    
    // Force complete re-initialization
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const closeScanner = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    if (window.currentScanner) {
      window.currentScanner.destroy().catch(console.error);
      window.currentScanner = null;
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
            <div className="mb-4 p-4 bg-red-900/40 border border-red-700/30 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <span className="text-red-200">{error}</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={retryCamera}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
                    >
                      Try Again
                    </button>
                    <button
                      onClick={closeScanner}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors font-medium"
                    >
                      Use Manual Entry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isInitializing && !error && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold text-white mb-2">Setting Up Camera</h4>
              <p className="text-gray-300 text-sm">
                Initializing camera... Please wait.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                You may be asked for camera permissions
              </p>
            </div>
          )}

          {!isInitializing && hasCamera && cameraReady && (
            <>
              <div className="relative bg-black rounded-lg overflow-hidden mb-4">
                <video 
                  key={videoKey}
                  ref={videoRef}
                  className="w-full h-64 md:h-96 object-cover bg-black"
                  playsInline
                  muted
                  autoPlay
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border-2 border-green-400 rounded-lg w-48 h-48 md:w-64 md:h-64 relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400"></div>
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {window.currentScanner ? 'QR Scanner Active' : 'Camera Ready'}
                </div>
              </div>

              <div className="text-center text-sm text-gray-300">
                <p className="font-medium mb-2">
                  {window.currentScanner 
                    ? 'Point camera at QR code to scan automatically' 
                    : 'Camera ready - QR scanning unavailable'
                  }
                </p>
                {!window.currentScanner && (
                  <button
                    onClick={closeScanner}
                    className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors"
                  >
                    Use Manual Entry
                  </button>
                )}
              </div>
            </>
          )}

          {!isInitializing && !hasCamera && !error && (
            <div className="text-center py-8">
              <div className="text-gray-400 text-6xl mb-4">❓</div>
              <h4 className="text-xl font-semibold text-white mb-2">Camera Status Unknown</h4>
              <p className="text-gray-300 mb-6">
                Unable to determine camera status. Please try again.
              </p>
              <div className="space-y-3">
                <button
                  onClick={retryCamera}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
                >
                  Try Again
                </button>
                <button
                  onClick={closeScanner}
                  className="w-full px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors font-medium"
                >
                  Use Manual Entry
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
