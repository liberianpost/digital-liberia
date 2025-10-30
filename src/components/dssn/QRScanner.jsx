import React, { useState, useRef, useEffect } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [currentCamera, setCurrentCamera] = useState('user');
  const [availableCameras, setAvailableCameras] = useState([]);
  const [qrScanner, setQrScanner] = useState(null);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let scanner = null;
    let isMounted = true;

    const initializeScanner = async () => {
      try {
        if (!isMounted) return;
        
        setIsInitializing(true);
        setError(null);

        // Add a small delay to ensure DOM is fully rendered
        await new Promise(resolve => setTimeout(resolve, 500));

        // Check if video element exists and is in DOM
        if (!videoRef.current) {
          console.error('Video ref is null');
          throw new Error('Video element not available. Please try again.');
        }

        // Additional check to see if video element is connected to DOM
        if (!videoRef.current.isConnected) {
          console.error('Video element not connected to DOM');
          throw new Error('Video element not ready. Please try again.');
        }

        console.log('Initializing QR scanner...');
        
        // Dynamically import qr-scanner
        const QrScannerModule = await import('qr-scanner');
        const QrScanner = QrScannerModule.default;
        
        // Check camera availability
        let cameras = [];
        try {
          cameras = await QrScanner.listCameras();
          console.log('Available cameras:', cameras.length);
          if (isMounted) setAvailableCameras(cameras);
        } catch (camError) {
          console.warn('Could not list cameras:', camError);
          cameras = [];
        }

        if (cameras.length === 0) {
          console.log('No cameras found, trying to initialize with default camera...');
        }

        // Initialize scanner with basic configuration
        console.log('Creating scanner instance...');
        scanner = new QrScanner(
          videoRef.current,
          (result) => {
            console.log('QR Code scanned:', result);
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
            // Use simpler configuration
            preferredCamera: cameras.length > 0 ? cameras[0].id : 'environment',
          }
        );

        if (isMounted) {
          setQrScanner(scanner);
        }

        // Start the scanner
        console.log('Starting scanner...');
        await scanner.start();
        
        if (!isMounted) return;
        
        console.log('Scanner started successfully');
        setIsScanning(true);
        setHasCamera(true);
        
        // Now try to get cameras again after starting
        try {
          const updatedCameras = await QrScanner.listCameras();
          if (updatedCameras.length > 0 && isMounted) {
            setAvailableCameras(updatedCameras);
          }
        } catch (e) {
          console.warn('Could not refresh camera list:', e);
        }

      } catch (error) {
        console.error('Error initializing QR scanner:', error);
        if (isMounted) {
          setHasCamera(false);
          setError(error.message || 'Failed to initialize camera');
          setRetryCount(prev => prev + 1);
        }
      } finally {
        if (isMounted) {
          setIsInitializing(false);
        }
      }
    };

    // Start initialization with a small delay
    const timer = setTimeout(() => {
      initializeScanner();
    }, 100);

    // Cleanup function
    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (scanner) {
        console.log('Cleaning up scanner...');
        scanner.stop().catch(console.error);
        scanner.destroy().catch(console.error);
      }
    };
  }, [onScan, retryCount]);

  const switchCamera = async () => {
    if (!qrScanner || availableCameras.length < 2) return;

    try {
      const currentIndex = availableCameras.findIndex(cam => cam.id === currentCamera);
      const nextIndex = (currentIndex + 1) % availableCameras.length;
      const nextCamera = availableCameras[nextIndex];
      
      await qrScanner.setCamera(nextCamera.id);
      setCurrentCamera(nextCamera.id);
    } catch (error) {
      console.error('Error switching camera:', error);
      setError('Failed to switch camera');
    }
  };

  const toggleScanning = async () => {
    if (!qrScanner) return;

    try {
      if (isScanning) {
        await qrScanner.stop();
        setIsScanning(false);
      } else {
        await qrScanner.start();
        setIsScanning(true);
        setError(null);
      }
    } catch (error) {
      console.error('Error toggling scanner:', error);
      setError('Failed to control camera');
    }
  };

  const retryCamera = async () => {
    setError(null);
    setHasCamera(true);
    setIsInitializing(true);
    
    // Force re-render of video element by toggling visibility briefly
    if (videoRef.current) {
      videoRef.current.style.visibility = 'hidden';
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.style.visibility = 'visible';
        }
      }, 100);
    }

    // Trigger re-initialization by updating retryCount
    setRetryCount(prev => prev + 1);
  };

  const getCameraName = (cameraId) => {
    const camera = availableCameras.find(cam => cam.id === cameraId);
    if (!camera) return 'Camera';
    
    const label = camera.label.toLowerCase();
    if (label.includes('back') || label.includes('rear')) return 'Back Camera';
    if (label.includes('front')) return 'Front Camera';
    return 'Camera';
  };

  // Simple fallback to basic camera access if QR scanner continues to fail
  const useBasicCameraAccess = async () => {
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
      }
    } catch (error) {
      console.error('Basic camera access failed:', error);
      setError('Cannot access camera. Please check permissions.');
      setHasCamera(false);
    } finally {
      setIsInitializing(false);
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
              className="text-gray-400 hover:text-white transition-colors"
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
              {retryCount > 2 && (
                <div className="mt-2">
                  <button
                    onClick={useBasicCameraAccess}
                    className="text-blue-300 hover:text-blue-100 text-sm underline"
                  >
                    Try basic camera access instead
                  </button>
                </div>
              )}
            </div>
          )}

          {isInitializing && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-300">Initializing camera... {retryCount > 0 && `(Attempt ${retryCount + 1})`}</p>
            </div>
          )}

          {!hasCamera && !isInitializing ? (
            <div className="text-center py-8">
              <div className="text-red-400 text-6xl mb-4">📷</div>
              <h4 className="text-xl font-semibold text-white mb-2">Camera Not Available</h4>
              <p className="text-gray-300 mb-4">
                {error || 'No camera found or camera access denied. Please check your device permissions.'}
              </p>
              <div className="space-y-3">
                <button
                  onClick={retryCamera}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                >
                  Retry Camera
                </button>
                {retryCount > 1 && (
                  <button
                    onClick={useBasicCameraAccess}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors block mx-auto"
                  >
                    Try Basic Camera
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors block mx-auto"
                >
                  Close Scanner
                </button>
              </div>
            </div>
          ) : hasCamera && !isInitializing ? (
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
                  <div className="border-2 border-green-400 rounded-lg w-64 h-64 relative">
                    {/* Corner markers */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-400"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-400"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-400"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-400"></div>
                    
                    {/* Scanning animation */}
                    {isScanning && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-green-400 animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Camera info */}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {getCameraName(currentCamera)} {isScanning ? '• Scanning' : '• Paused'}
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {availableCameras.length > 1 && (
                  <button
                    onClick={switchCamera}
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Switch Camera
                  </button>
                )}
                
                <button
                  onClick={toggleScanning}
                  className={`flex items-center justify-center px-4 py-2 rounded-lg text-white transition-colors ${
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
              <div className="mt-4 text-center text-sm text-gray-300">
                <p>Point your camera at a DSSN QR code to scan automatically</p>
                <p className="text-xs text-gray-400 mt-1">
                  Make sure to allow camera permissions in your browser
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
