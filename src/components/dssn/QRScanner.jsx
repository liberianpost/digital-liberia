import React, { useState, useRef, useEffect } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [scanner, setScanner] = useState(null);

  useEffect(() => {
    let currentScanner = null;
    let isMounted = true;

    const initializeScanner = async () => {
      try {
        if (!isMounted) return;
        
        setIsInitializing(true);
        setError(null);

        console.log('Starting QR scanner initialization...');

        // Check if we're in a browser environment
        if (typeof window === 'undefined') {
          throw new Error('Not in browser environment');
        }

        // Check for camera support
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Camera not supported in this browser');
        }

        // Wait for video element to be available
        if (!videoRef.current) {
          throw new Error('Video element not ready');
        }

        // Test basic camera access first
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
              facingMode: 'environment',
              width: { ideal: 1280 },
              height: { ideal: 720 }
            } 
          });
          
          // Stop the test stream
          stream.getTracks().forEach(track => track.stop());
        } catch (camError) {
          throw new Error(`Camera access denied: ${camError.message}`);
        }

        // Now load QR scanner
        console.log('Loading QR scanner library...');
        const QrScannerModule = await import('qr-scanner');
        const QrScanner = QrScannerModule.default;
        
        // Initialize the scanner
        console.log('Creating QR scanner instance...');
        currentScanner = new QrScanner(
          videoRef.current,
          (result) => {
            console.log('QR code detected:', result);
            if (result?.data) {
              onScan(result.data);
              if (currentScanner) {
                currentScanner.stop();
                setIsScanning(false);
              }
            }
          },
          {
            highlightScanRegion: true,
            highlightCodeOutline: true,
            maxScansPerSecond: 1,
            returnDetailedScanResult: true,
          }
        );

        if (!isMounted) {
          currentScanner.destroy();
          return;
        }

        setScanner(currentScanner);

        // Start scanning
        console.log('Starting QR scanner...');
        await currentScanner.start();
        
        if (!isMounted) return;
        
        console.log('QR scanner started successfully');
        setIsScanning(true);
        setHasCamera(true);
        setError(null);

      } catch (error) {
        console.error('QR Scanner initialization failed:', error);
        if (isMounted) {
          setError(error.message || 'Failed to initialize camera scanner');
          setHasCamera(false);
        }
      } finally {
        if (isMounted) {
          setIsInitializing(false);
        }
      }
    };

    // Start initialization with a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initializeScanner();
    }, 100);

    // Cleanup function
    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (currentScanner) {
        console.log('Cleaning up QR scanner...');
        currentScanner.stop().catch(() => {});
        currentScanner.destroy().catch(() => {});
      }
    };
  }, [onScan]);

  const retryCamera = async () => {
    setError(null);
    setHasCamera(true);
    setIsInitializing(true);
    
    // Force re-initialization by reloading the component
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const useSimpleCamera = async () => {
    try {
      setError(null);
      setIsInitializing(true);
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasCamera(true);
        setIsScanning(true);
        setIsInitializing(false);
        
        // For simple camera mode, we can't scan QR codes but at least show camera
        setError('Camera active but QR scanning unavailable. Please use manual entry.');
      }
    } catch (error) {
      console.error('Simple camera access failed:', error);
      setError('Cannot access camera. Please check permissions.');
      setHasCamera(false);
      setIsInitializing(false);
    }
  };

  const stopScanner = () => {
    if (scanner) {
      scanner.stop().catch(console.error);
      setIsScanning(false);
    }
  };

  const startScanner = async () => {
    if (scanner) {
      try {
        await scanner.start();
        setIsScanning(true);
        setError(null);
      } catch (error) {
        setError('Failed to start scanner: ' + error.message);
      }
    }
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
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-900/40 border border-red-700/30 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-red-200">{error}</span>
              </div>
            </div>
          )}

          {isInitializing ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <h4 className="text-lg font-semibold text-white mb-2">Initializing Scanner</h4>
              <p className="text-gray-300 text-sm">
                Setting up camera and QR scanner...
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Please allow camera permissions if prompted
              </p>
            </div>
          ) : hasCamera ? (
            <>
              {/* Scanner View */}
              <div className="relative bg-black rounded-lg overflow-hidden mb-4">
                <video 
                  ref={videoRef}
                  className="w-full h-64 md:h-96 object-cover"
                  playsInline
                  muted
                  autoPlay
                />
                
                {/* Scanner Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border-2 border-green-400 rounded-lg w-48 h-48 md:w-64 md:h-64 relative">
                    {/* Corner markers */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400"></div>
                    
                    {/* Scanning animation */}
                    {isScanning && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {isScanning ? '🟢 Scanning' : '🟡 Ready'}
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                <button
                  onClick={isScanning ? stopScanner : startScanner}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg text-white transition-colors font-medium ${
                    isScanning 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isScanning ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                  {isScanning ? 'Stop Scanning' : 'Start Scanning'}
                </button>
              </div>

              {/* Instructions */}
              <div className="text-center text-sm text-gray-300">
                <p className="font-medium">How to scan:</p>
                <ol className="list-decimal list-inside text-left mt-2 space-y-1 text-xs">
                  <li>Point camera at the QR code</li>
                  <li>Ensure good lighting</li>
                  <li>Hold steady until scanned</li>
                </ol>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-red-400 text-6xl mb-4">📷</div>
              <h4 className="text-xl font-semibold text-white mb-2">Camera Unavailable</h4>
              <p className="text-gray-300 mb-6">
                Unable to access camera. This could be due to:
              </p>
              <ul className="text-gray-400 text-sm text-left mb-6 space-y-2">
                <li>• Camera permissions denied</li>
                <li>• No camera available</li>
                <li>• Browser compatibility issue</li>
                <li>• QR scanner library failed to load</li>
              </ul>
              <div className="space-y-3">
                <button
                  onClick={retryCamera}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
                >
                  Retry Full Scanner
                </button>
                <button
                  onClick={useSimpleCamera}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors font-medium"
                >
                  Try Basic Camera Only
                </button>
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors font-medium"
                >
                  Close Scanner
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
