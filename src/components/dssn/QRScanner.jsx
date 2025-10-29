import React, { useState, useRef, useEffect } from 'react';
import QrScanner from 'qr-scanner';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [currentCamera, setCurrentCamera] = useState('user'); // 'user' for front, 'environment' for back
  const [availableCameras, setAvailableCameras] = useState([]);
  const [qrScanner, setQrScanner] = useState(null);

  useEffect(() => {
    const initializeScanner = async () => {
      try {
        // Check if cameras are available
        const cameras = await QrScanner.listCameras();
        setAvailableCameras(cameras);
        
        if (cameras.length === 0) {
          setHasCamera(false);
          return;
        }

        // Check if back camera is available
        const backCamera = cameras.find(cam => 
          cam.label.toLowerCase().includes('back') || 
          cam.id.toLowerCase().includes('back') ||
          cam.label.toLowerCase().includes('rear')
        );

        // Start with back camera if available, otherwise use first camera
        const initialCamera = backCamera || cameras[0];
        setCurrentCamera(initialCamera.id);

        // Initialize QR Scanner
        const scanner = new QrScanner(
          videoRef.current,
          (result) => {
            console.log('QR Code scanned:', result);
            if (result && result.data) {
              onScan(result.data);
            }
          },
          {
            preferredCamera: initialCamera.id,
            highlightScanRegion: true,
            highlightCodeOutline: true,
            returnDetailedScanResult: true,
          }
        );

        setQrScanner(scanner);
        await scanner.start();
        setIsScanning(true);

      } catch (error) {
        console.error('Error initializing QR scanner:', error);
        setHasCamera(false);
      }
    };

    initializeScanner();

    return () => {
      if (qrScanner) {
        qrScanner.destroy();
      }
    };
  }, [onScan]);

  const switchCamera = async () => {
    if (!qrScanner || availableCameras.length < 2) return;

    try {
      const currentIndex = availableCameras.findIndex(cam => cam.id === currentCamera);
      const nextIndex = (currentIndex + 1) % availableCameras.length;
      const nextCamera = availableCameras[nextIndex];
      
      setCurrentCamera(nextCamera.id);
      await qrScanner.setCamera(nextCamera.id);
    } catch (error) {
      console.error('Error switching camera:', error);
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
      }
    } catch (error) {
      console.error('Error toggling scanner:', error);
    }
  };

  const getCameraName = (cameraId) => {
    const camera = availableCameras.find(cam => cam.id === cameraId);
    if (!camera) return 'Unknown Camera';
    
    const label = camera.label.toLowerCase();
    if (label.includes('back') || label.includes('rear')) return 'Back Camera';
    if (label.includes('front')) return 'Front Camera';
    return camera.label;
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

          {!hasCamera ? (
            <div className="text-center py-8">
              <div className="text-red-400 text-6xl mb-4">📷</div>
              <h4 className="text-xl font-semibold text-white mb-2">Camera Not Available</h4>
              <p className="text-gray-300">
                No camera found or camera access denied. Please check your device permissions.
              </p>
            </div>
          ) : (
            <>
              {/* Scanner View */}
              <div className="relative bg-black rounded-lg overflow-hidden mb-4">
                <video 
                  ref={videoRef} 
                  className="w-full h-64 md:h-96 object-cover"
                  playsInline
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
                    <div className="absolute top-0 left-0 right-0 h-1 bg-green-400 animate-pulse"></div>
                  </div>
                </div>

                {/* Camera info */}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {getCameraName(currentCamera)}
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
                  The scanner works with both front and back cameras
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
