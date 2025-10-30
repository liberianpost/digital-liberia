import React, { useState, useRef, useEffect } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [mode, setMode] = useState('loading'); // loading, camera, error

  // Simple direct camera access
  const initializeCamera = async () => {
    try {
      setIsInitializing(true);
      setError(null);
      setMode('loading');

      console.log('Starting camera initialization...');

      // Reset video element
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }

      // Check browser support
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera not supported in this browser. Please try Chrome or Firefox.');
      }

      // Wait for DOM
      await new Promise(resolve => setTimeout(resolve, 100));

      if (!videoRef.current) {
        throw new Error('Camera view not ready. Please try again.');
      }

      // Request camera access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      // Set video source
      videoRef.current.srcObject = stream;
      
      // Wait for video to be ready
      await new Promise((resolve) => {
        if (videoRef.current.readyState >= 3) { // HAVE_FUTURE_DATA
          resolve();
        } else {
          videoRef.current.onloadeddata = resolve;
          setTimeout(resolve, 1000); // Fallback
        }
      });

      // Play video
      await videoRef.current.play();

      setHasCamera(true);
      setMode('camera');
      setIsScanning(true);
      setError(null);

      console.log('Camera initialized successfully');

      // Now try to initialize QR scanner
      initializeQRScanner(stream);

    } catch (error) {
      console.error('Camera initialization failed:', error);
      let errorMessage = 'Failed to access camera: ';
      
      if (error.name === 'NotAllowedError') {
        errorMessage = 'Camera permission denied. Please allow camera access in your browser settings and try again.';
      } else if (error.name === 'NotFoundError') {
        errorMessage = 'No camera found on this device.';
      } else if (error.name === 'NotSupportedError') {
        errorMessage = 'Camera not supported in this browser. Please use Chrome or Firefox.';
      } else if (error.name === 'NotReadableError') {
        errorMessage = 'Camera is already in use by another application. Please close other camera apps and try again.';
      } else {
        errorMessage += error.message;
      }
      
      setError(errorMessage);
      setHasCamera(false);
      setMode('error');
    } finally {
      setIsInitializing(false);
    }
  };

  // Initialize QR Scanner after camera is working
  const initializeQRScanner = async (stream) => {
    try {
      console.log('Initializing QR scanner...');
      
      const QrScannerModule = await import('qr-scanner');
      const QrScanner = QrScannerModule.default;
      
      // Stop the current stream since QR scanner will manage its own
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          console.log('QR code scanned:', result);
          if (result?.data) {
            onScan(result.data);
            scanner.stop();
            setIsScanning(false);
          }
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
          maxScansPerSecond: 2,
          returnDetailedScanResult: true,
        }
      );

      await scanner.start();
      console.log('QR scanner started successfully');
      
      // Store scanner instance for cleanup
      window.currentScanner = scanner;

    } catch (qrError) {
      console.warn('QR scanner failed, but camera works:', qrError);
      setError('QR scanning unavailable. Camera is active but cannot scan QR codes automatically. Please use manual entry or try again.');
      // Keep camera active even if QR scanning fails
    }
  };

  // Initialize on component mount
  useEffect(() => {
    initializeCamera();

    // Cleanup function
    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
      if (window.currentScanner) {
        window.currentScanner.stop().catch(console.error);
        window.currentScanner.destroy().catch(console.error);
        window.currentScanner = null;
      }
    };
  }, []);

  const retryWithQR = async () => {
    setError(null);
    await initializeCamera();
  };

  const retrySimpleCamera = async () => {
    setError(null);
    setMode('loading');
    setIsInitializing(true);
    
    try {
      // Simple camera only without QR scanner
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });

      videoRef.current.srcObject = stream;
      await videoRef.current.play();
      
      setHasCamera(true);
      setMode('camera');
      setError('Camera active. QR scanning disabled. Please use manual entry.');
    } catch (error) {
      setError('Failed to access camera: ' + error.message);
      setMode('error');
    } finally {
      setIsInitializing(false);
    }
  };

  const closeScanner = () => {
    // Cleanup
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    if (window.currentScanner) {
      window.currentScanner.stop().catch(console.error);
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
            <div className={`mb-4 p-4 rounded-lg ${
              error.includes('QR scanning unavailable') 
                ? 'bg-yellow-900/40 border border-yellow-700/30' 
                : 'bg-red-900/40 border border-red-700/30'
            }`}>
              <div className="flex items-start">
                <svg className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                  error.includes('QR scanning unavailable') ? 'text-yellow-400' : 'text-red-400'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <span className={error.includes('QR scanning unavailable') ? 'text-yellow-200' : 'text-red-200'}>
                    {error}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {error.includes('QR scanning unavailable') && (
                      <>
                        <button
                          onClick={retryWithQR}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors"
                        >
                          Retry QR Scanner
                        </button>
                        <button
                          onClick={retrySimpleCamera}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm transition-colors"
                        >
                          Camera Only
                        </button>
                      </>
                    )}
                    <button
                      onClick={closeScanner}
                      className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm transition-colors"
                    >
                      Use Manual Entry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {mode === 'loading' && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold text-white mb-2">Initializing Camera</h4>
              <p className="text-gray-300 text-sm">
                Please allow camera permissions if prompted...
              </p>
            </div>
          )}

          {mode === 'camera' && (
            <>
              <div className="relative bg-black rounded-lg overflow-hidden mb-4">
                <video 
                  ref={videoRef}
                  className="w-full h-64 md:h-96 object-cover"
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
                    {isScanning && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {window.currentScanner ? 'QR Scanner Active' : 'Camera Active'}
                </div>
              </div>

              <div className="text-center text-sm text-gray-300">
                <p className="font-medium mb-2">
                  {window.currentScanner 
                    ? 'Point camera at QR code to scan automatically' 
                    : 'Camera active - Point at QR code and use manual entry'
                  }
                </p>
                {!window.currentScanner && (
                  <div className="flex justify-center gap-2 mt-3">
                    <button
                      onClick={retryWithQR}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors"
                    >
                      Enable QR Scanning
                    </button>
                    <button
                      onClick={closeScanner}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm transition-colors"
                    >
                      Use Manual Entry
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {mode === 'error' && (
            <div className="text-center py-8">
              <div className="text-red-400 text-6xl mb-4">📷</div>
              <h4 className="text-xl font-semibold text-white mb-2">Camera Access Required</h4>
              <p className="text-gray-300 mb-6">
                Unable to access your camera. Here's how to fix this:
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Click "Allow" when camera permission pops up</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Ensure your device has a working camera</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Close other apps that might be using the camera</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Try using Chrome or Firefox browser</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 max-w-md mx-auto">
                <button
                  onClick={initializeCamera}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
                >
                  Try Camera Again
                </button>
                <button
                  onClick={closeScanner}
                  className="w-full px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors font-medium"
                >
                  Use Manual Entry Instead
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
