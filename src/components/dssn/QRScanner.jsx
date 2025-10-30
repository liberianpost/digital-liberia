import React, { useState, useRef, useEffect } from 'react';

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);

  // Simple camera access without QR scanner
  const initializeSimpleCamera = async () => {
    try {
      setIsInitializing(true);
      setError(null);

      // Check if browser supports camera
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera not supported in this browser');
      }

      // Wait a bit for DOM to be ready
      await new Promise(resolve => setTimeout(resolve, 300));

      if (!videoRef.current) {
        throw new Error('Camera view not ready. Please close and try again.');
      }

      console.log('Requesting camera access...');
      
      // Try to get camera stream
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      console.log('Camera access granted, setting up video...');
      
      // Set the stream to video element
      videoRef.current.srcObject = stream;
      videoRef.current.playsInline = true;
      videoRef.current.muted = true;
      
      // Wait for video to be ready
      await new Promise((resolve, reject) => {
        if (videoRef.current) {
          videoRef.current.onloadedmetadata = () => {
            console.log('Video metadata loaded');
            resolve();
          };
          videoRef.current.onerror = reject;
          
          // Fallback timeout
          setTimeout(resolve, 1000);
        } else {
          reject(new Error('Video element disappeared'));
        }
      });

      // Play the video
      await videoRef.current.play();
      
      setCameraStream(stream);
      setHasCamera(true);
      setIsScanning(true);
      setError(null);
      
      console.log('Camera started successfully');

    } catch (error) {
      console.error('Camera initialization failed:', error);
      let errorMessage = 'Camera access failed: ';
      
      if (error.name === 'NotAllowedError') {
        errorMessage += 'Permission denied. Please allow camera access in your browser settings.';
      } else if (error.name === 'NotFoundError') {
        errorMessage += 'No camera found on this device.';
      } else if (error.name === 'NotSupportedError') {
        errorMessage += 'Camera not supported in this browser.';
      } else if (error.name === 'NotReadableError') {
        errorMessage += 'Camera is already in use by another application.';
      } else {
        errorMessage += error.message;
      }
      
      setError(errorMessage);
      setHasCamera(false);
    } finally {
      setIsInitializing(false);
    }
  };

  // Initialize QR Scanner with camera
  const initializeQRScanner = async () => {
    try {
      setIsInitializing(true);
      setError(null);

      // First get basic camera access
      await initializeSimpleCamera();
      
      if (!hasCamera) return;

      console.log('Loading QR scanner...');
      
      // Dynamically import QR scanner
      const QrScannerModule = await import('qr-scanner');
      const QrScanner = QrScannerModule.default;
      
      // Create QR scanner instance
      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          console.log('QR code scanned:', result);
          if (result?.data) {
            onScan(result.data);
            stopScanner();
          }
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
          maxScansPerSecond: 2,
        }
      );

      // Start QR scanning
      await scanner.start();
      console.log('QR scanner started');
      
      // Store scanner for cleanup
      setScanner(scanner);

    } catch (error) {
      console.error('QR scanner failed:', error);
      setError('QR scanning unavailable, but camera is active. You can still use manual entry.');
      // Don't set hasCamera to false since basic camera works
    } finally {
      setIsInitializing(false);
    }
  };

  const [scanner, setScanner] = useState(null);

  // Stop scanner and cleanup
  const stopScanner = () => {
    if (scanner) {
      scanner.stop().catch(console.error);
      scanner.destroy().catch(console.error);
      setScanner(null);
    }
    
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    
    setIsScanning(false);
  };

  // Start scanner
  const startScanner = async () => {
    if (scanner) {
      await scanner.start();
      setIsScanning(true);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  // Initialize when component mounts
  useEffect(() => {
    initializeQRScanner();
  }, []);

  const retryScanner = () => {
    stopScanner();
    setError(null);
    setHasCamera(true);
    initializeQRScanner();
  };

  const retrySimpleCamera = () => {
    stopScanner();
    setError(null);
    setHasCamera(true);
    initializeSimpleCamera();
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
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-yellow-900/40 border border-yellow-700/30 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="text-yellow-200">{error}</span>
                  {error.includes('QR scanning unavailable') && (
                    <div className="mt-2">
                      <button
                        onClick={retryScanner}
                        className="text-blue-300 hover:text-blue-100 text-sm underline mr-4"
                      >
                        Retry QR Scanner
                      </button>
                      <button
                        onClick={onClose}
                        className="text-green-300 hover:text-green-100 text-sm underline"
                      >
                        Use Manual Entry
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
                Please allow camera permissions if prompted...
              </p>
            </div>
          )}

          {!isInitializing && hasCamera && (
            <>
              {/* Camera View */}
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
                  {scanner ? 'QR Scanner Active' : 'Camera Only'}
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                {scanner && (
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
                )}
                <button
                  onClick={retryScanner}
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reinitialize Scanner
                </button>
              </div>

              {/* Instructions */}
              <div className="text-center text-sm text-gray-300">
                <p className="font-medium">
                  {scanner 
                    ? 'Point camera at QR code to scan automatically' 
                    : 'Camera active - QR scanning unavailable. Please use manual entry.'
                  }
                </p>
                {!scanner && (
                  <button
                    onClick={retryScanner}
                    className="mt-2 text-blue-300 hover:text-blue-100 underline text-xs"
                  >
                    Try to enable QR scanning again
                  </button>
                )}
              </div>
            </>
          )}

          {!isInitializing && !hasCamera && (
            <div className="text-center py-8">
              <div className="text-red-400 text-6xl mb-4">📷</div>
              <h4 className="text-xl font-semibold text-white mb-2">Camera Access Required</h4>
              <p className="text-gray-300 mb-6">
                To use the QR scanner, we need access to your camera.
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6 text-left">
                <p className="text-gray-300 font-medium mb-2">Troubleshooting steps:</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Check if your device has a camera</li>
                  <li>• Allow camera permissions when prompted</li>
                  <li>• Ensure no other app is using the camera</li>
                  <li>• Try using Chrome or Firefox browser</li>
                  <li>• Check if camera is blocked in browser settings</li>
                </ul>
              </div>

              <div className="space-y-3">
                <button
                  onClick={retrySimpleCamera}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium"
                >
                  Try Camera Again
                </button>
                <button
                  onClick={onClose}
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
