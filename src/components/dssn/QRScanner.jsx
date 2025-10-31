import React, { useState, useRef, useEffect } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [cameraReady, setCameraReady] = useState(false);

  // Use a direct DOM reference instead of React ref
  const getVideoElement = () => {
    // Try multiple ways to get the video element
    if (videoRef.current) return videoRef.current;
    
    const videoElement = document.getElementById('qr-scanner-video');
    if (videoElement) return videoElement;
    
    return document.querySelector('video');
  };

  // Simple camera initialization without complex timing
  const initializeCamera = async () => {
    let stream = null;
    
    try {
      console.log('Starting camera initialization...');
      setError(null);
      setIsInitializing(true);

      // Check browser support
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera not supported in this browser. Please use Chrome, Firefox, or Safari.');
      }

      // Get camera access first
      console.log('Requesting camera access...');
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      console.log('Camera access granted, setting up video...');

      // Wait a bit for React to render
      await new Promise(resolve => setTimeout(resolve, 100));

      // Get video element using our function
      const videoElement = getVideoElement();
      
      if (!videoElement) {
        console.error('No video element found');
        throw new Error('Camera view not available. Please refresh the page and try again.');
      }

      console.log('Video element found:', videoElement);

      // Set up video element
      videoElement.srcObject = stream;
      videoElement.playsInline = true;
      videoElement.muted = true;
      videoElement.setAttribute('playsinline', 'true');

      // Wait for video to load
      await new Promise((resolve, reject) => {
        const onLoaded = () => {
          videoElement.removeEventListener('loadeddata', onLoaded);
          videoElement.removeEventListener('error', onError);
          resolve();
        };

        const onError = (e) => {
          videoElement.removeEventListener('loadeddata', onLoaded);
          videoElement.removeEventListener('error', onError);
          reject(new Error('Video failed to load: ' + e.message));
        };

        if (videoElement.readyState >= 3) {
          resolve();
        } else {
          videoElement.addEventListener('loadeddata', onLoaded);
          videoElement.addEventListener('error', onError);
          setTimeout(() => {
            if (videoElement.readyState >= 1) {
              resolve();
            } else {
              reject(new Error('Video loading timeout'));
            }
          }, 3000);
        }
      });

      // Try to play the video
      try {
        await videoElement.play();
        console.log('Video playback started');
      } catch (playError) {
        console.warn('Video play failed, continuing anyway:', playError);
      }

      // Success!
      setHasCamera(true);
      setCameraReady(true);
      setError(null);

      // Now try QR scanner
      initializeQRScanner(stream, videoElement);

    } catch (err) {
      console.error('Camera initialization failed:', err);
      
      // Clean up stream if it exists
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      let errorMessage = 'Camera setup failed: ';
      
      if (err.name === 'NotAllowedError') {
        errorMessage = 'Camera permission denied. Please allow camera access and try again.';
      } else if (err.name === 'NotFoundError') {
        errorMessage = 'No camera found on this device.';
      } else if (err.name === 'NotSupportedError') {
        errorMessage = 'Camera not supported in this browser.';
      } else if (err.name === 'NotReadableError') {
        errorMessage = 'Camera is busy. Close other apps using camera.';
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

  const initializeQRScanner = async (stream, videoElement) => {
    try {
      console.log('Initializing QR scanner...');
      
      const QrScannerModule = await import('qr-scanner');
      const QrScanner = QrScannerModule.default;

      const scanner = new QrScanner(
        videoElement,
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
      
      // Store scanner for cleanup
      window.currentScanner = scanner;

    } catch (qrError) {
      console.warn('QR scanner failed, but camera works:', qrError);
      // Don't show error - camera still works
    }
  };

  // Initialize on mount
  useEffect(() => {
    initializeCamera();

    return () => {
      // Cleanup
      const videoElement = getVideoElement();
      if (videoElement?.srcObject) {
        videoElement.srcObject.getTracks().forEach(track => track.stop());
      }
      if (window.currentScanner) {
        window.currentScanner.destroy().catch(() => {});
        window.currentScanner = null;
      }
    };
  }, []);

  const retryCamera = () => {
    setError(null);
    setIsInitializing(true);
    initializeCamera();
  };

  const closeScanner = () => {
    const videoElement = getVideoElement();
    if (videoElement?.srcObject) {
      videoElement.srcObject.getTracks().forEach(track => track.stop());
    }
    if (window.currentScanner) {
      window.currentScanner.destroy().catch(() => {});
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
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors"
                    >
                      Try Again
                    </button>
                    <button
                      onClick={closeScanner}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white transition-colors"
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
                Please allow camera permissions when prompted...
              </p>
            </div>
          )}

          {!isInitializing && hasCamera && cameraReady && (
            <>
              {/* Video element with both ref and id for reliable access */}
              <div className="relative bg-black rounded-lg overflow-hidden mb-4">
                <video 
                  id="qr-scanner-video"
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
              <div className="text-gray-400 text-6xl mb-4">📷</div>
              <h4 className="text-xl font-semibold text-white mb-2">Camera Setup</h4>
              <p className="text-gray-300 mb-6">
                Ready to initialize camera...
              </p>
              <button
                onClick={retryCamera}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
              >
                Start Camera
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
