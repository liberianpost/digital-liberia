import React, { useState } from "react";
import api from '@/api';

const ImmigrationPayment = ({ onPaymentSuccess, onPaymentCancel, uptcData }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [libpayIdentifier, setLibpayIdentifier] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [errors, setErrors] = useState({});
  const [userInfo, setUserInfo] = useState(null);
  
  // Payment amount for UPTC generation
  const paymentAmount = currency === "USD" ? 25.00 : 4500.00; // 25 USD or ~4500 LRD

  const validateForm = () => {
    const newErrors = {};
    
    if (!libpayIdentifier.trim()) {
      newErrors.libpayIdentifier = "LibPay email or phone number is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(libpayIdentifier) && 
               !/^\+?[0-9]{7,15}$/.test(libpayIdentifier.replace(/\s/g, ''))) {
      newErrors.libpayIdentifier = "Please enter a valid email or phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if user exists before processing payment
  const lookupUser = async () => {
    try {
      const response = await api.post('https://libpayapp.liberianpost.com:3000/api/lookup-user', {
        contact: libpayIdentifier
      }, {
        withCredentials: false
      });

      if (response.data.success) {
        setUserInfo(response.data.user);
        return true;
      } else {
        setErrors({ submit: response.data.message || 'User not found in LibPay system' });
        return false;
      }
    } catch (error) {
      console.error('User lookup error:', error);
      setErrors({ submit: 'Unable to verify LibPay account. Please try again.' });
      return false;
    }
  };

  const handlePayment = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    setPaymentStatus('validating');
    
    try {
      // First verify user exists
      const userExists = await lookupUser();
      if (!userExists) {
        setIsProcessing(false);
        setPaymentStatus('error');
        return;
      }

      setPaymentStatus('processing');
      
      // Create payment request WITHOUT credentials
      const paymentResponse = await api.post('https://libpayapp.liberianpost.com:3000/payment-request', {
        payerEmail: libpayIdentifier, // This can be email OR phone
        amount: paymentAmount,
        currency: currency,
        description: `UPTC Generation for ${uptcData?.county || 'Property'}`,
        merchantInfo: {
          name: "Liberia Land Authority",
          service: "UPTC Generation",
          uptcData: uptcData
        }
      }, {
        withCredentials: false,
        timeout: 30000 // 30 second timeout
      });
      
      if (paymentResponse.data.success) {
        const paymentRequestId = paymentResponse.data.paymentRequestId;
        const pushNotificationSent = paymentResponse.data.pushNotification?.sent;
        
        if (!pushNotificationSent) {
          setPaymentStatus('waiting');
          setErrors({ 
            submit: 'Notification could not be sent. Please ensure you have the Digital Liberia Mobile App installed and notifications enabled.' 
          });
          setIsProcessing(false);
          return;
        }

        setPaymentStatus('waiting');
        
        // Extended polling for payment status (5 minutes total)
        let pollingAttempts = 0;
        const maxPollingAttempts = 150; // 5 minutes (150 * 2000ms = 300000ms = 5 minutes)
        
        const checkPaymentStatus = async () => {
          try {
            pollingAttempts++;
            
            if (pollingAttempts > maxPollingAttempts) {
              setPaymentStatus('timeout');
              setIsProcessing(false);
              setErrors({ submit: 'Payment confirmation timeout. Please check your mobile app and try again.' });
              return;
            }

            const statusResponse = await api.get(`https://libpayapp.liberianpost.com:3000/payment-status/${paymentRequestId}`, {
              withCredentials: false,
              timeout: 10000
            });
            
            if (statusResponse.data.status === 'completed') {
              setPaymentStatus('success');
              setIsProcessing(false);
              
              // Call the success callback with payment details
              if (onPaymentSuccess) {
                onPaymentSuccess({
                  paymentRequestId,
                  amount: paymentAmount,
                  currency: currency,
                  timestamp: new Date().toISOString(),
                  userInfo: userInfo
                });
              }
            } else if (statusResponse.data.status === 'rejected') {
              setPaymentStatus('rejected');
              setIsProcessing(false);
              
              if (onPaymentCancel) {
                onPaymentCancel('Payment was rejected by user');
              }
            } else if (statusResponse.data.status === 'pending') {
              // Continue polling if still pending, but with slower interval after first minute
              const pollInterval = pollingAttempts > 30 ? 5000 : 2000; // Slow down after 1 minute
              setTimeout(checkPaymentStatus, pollInterval);
              
              // Update status message to show we're still waiting
              if (pollingAttempts % 15 === 0) { // Update message every 30 seconds
                setPaymentStatus(`waiting-${Math.floor(pollingAttempts / 15)}`);
              }
            } else {
              // Continue polling for other statuses
              setTimeout(checkPaymentStatus, 2000);
            }
          } catch (error) {
            console.error('Error checking payment status:', error);
            // Don't stop on network errors, continue polling
            if (pollingAttempts <= maxPollingAttempts) {
              setTimeout(checkPaymentStatus, 3000);
            } else {
              setPaymentStatus('error');
              setIsProcessing(false);
            }
          }
        };
        
        // Start polling with initial delay
        setTimeout(checkPaymentStatus, 3000);
        
      } else {
        throw new Error(paymentResponse.data.message || 'Failed to create payment request');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
      setIsProcessing(false);
      
      // Show specific error messages
      if (error.response?.data?.message) {
        setErrors({ submit: error.response.data.message });
      } else if (error.message.includes('Network Error') || error.message.includes('CORS')) {
        setErrors({ submit: 'Network connection failed. Please check your internet connection and try again.' });
      } else if (error.code === 'ECONNABORTED') {
        setErrors({ submit: 'Request timeout. Please check your connection and try again.' });
      } else {
        setErrors({ submit: error.message || 'Payment failed. Please try again.' });
      }
    }
  };

  const handleCancel = () => {
    if (onPaymentCancel) {
      onPaymentCancel('Payment cancelled by user');
    }
  };

  // Get waiting message based on polling attempts
  const getWaitingMessage = (status) => {
    if (status === 'waiting') return "Waiting for confirmation...";
    if (status.startsWith('waiting-')) {
      const minutes = parseInt(status.split('-')[1]) || 1;
      return `Waiting for confirmation... (${minutes} minute${minutes > 1 ? 's' : ''})`;
    }
    return "Waiting for confirmation...";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Updated Header Section */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center p-2">
              <img 
                src="/logos/libpaysit.png" 
                alt="LibPay" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg=";
                }}
              />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-blue-800 mb-1">LibPay</h1>
          
          <p className="text-sm text-gray-600 mb-2">
            Digital Liberia Ecosystem
          </p>
          
          <h2 className="text-xl font-semibold text-blue-700">
            LibPay Payment System
          </h2>
        </div>
        
        {/* Payment Details */}
        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-700">Service:</span>
            <span className="font-semibold">UPTC Generation</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-700">County:</span>
            <span className="font-semibold">{uptcData?.county || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Amount:</span>
            <span className="text-2xl font-bold text-green-600">
              {currency === "USD" ? "$" : "LD$"} {paymentAmount.toFixed(2)} {currency}
            </span>
          </div>
        </div>

        {/* LibPay Credentials Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            LibPay Email or Phone Number
          </label>
          <input
            type="text"
            value={libpayIdentifier}
            onChange={(e) => {
              setLibpayIdentifier(e.target.value);
              setErrors({});
              setUserInfo(null);
            }}
            placeholder="Enter your LibPay email or phone number"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.libpayIdentifier ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isProcessing}
          />
          {errors.libpayIdentifier && (
            <p className="text-red-500 text-sm mt-1">{errors.libpayIdentifier}</p>
          )}
        </div>

        {/* User Info Display */}
        {userInfo && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <p className="text-green-800 font-medium">LibPay account verified</p>
                <p className="text-green-700 text-sm">{userInfo.email || userInfo.phone}</p>
                {userInfo.balance !== undefined && (
                  <p className="text-green-600 text-xs">
                    Balance: {currency === "USD" ? "$" : "LD$"}{userInfo.balance} {currency}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Currency Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Payment Currency</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setCurrency("USD")}
              className={`p-4 rounded-xl border-2 transition-all ${
                currency === "USD"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300"
              }`}
              disabled={isProcessing}
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">$</span>
                </div>
                <span className="text-sm font-medium">USD</span>
              </div>
            </button>
            
            <button
              onClick={() => setCurrency("LRD")}
              className={`p-4 rounded-xl border-2 transition-all ${
                currency === "LRD"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300"
              }`}
              disabled={isProcessing}
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">LD$</span>
                </div>
                <span className="text-sm font-medium">LRD</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Payment Method - LibPay Only */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
          <div className="flex justify-center">
            <div className="p-4 rounded-xl border-2 border-blue-500 bg-blue-50 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center p-2">
                  <img 
                    src="/logos/libpaysit.png" 
                    alt="LibPay" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg=";
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-blue-800">LibPay</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-white text-sm">!</span>
            </div>
            <div>
              <p className="text-yellow-800 text-sm">
                You will receive a payment confirmation request on your Digital Liberia Mobile App. 
                Please approve the payment within 5 minutes to complete your UPTC generation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Payment Status */}
        {paymentStatus === 'validating' && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
              <span className="text-blue-800">Verifying LibPay account...</span>
            </div>
          </div>
        )}
        
        {paymentStatus === 'processing' && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
              <span className="text-blue-800">Creating payment request...</span>
            </div>
          </div>
        )}
        
        {(paymentStatus === 'waiting' || paymentStatus?.startsWith('waiting-')) && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
              <span className="text-blue-800">{getWaitingMessage(paymentStatus)}</span>
            </div>
            <p className="text-blue-600 text-sm mt-2">
              Please check your Digital Liberia Mobile App to confirm the payment
            </p>
          </div>
        )}
        
        {paymentStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-green-800">Payment successful! Generating UPTC...</span>
            </div>
          </div>
        )}
        
        {paymentStatus === 'rejected' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">✗</span>
              </div>
              <span className="text-red-800">Payment was rejected. Please try again.</span>
            </div>
          </div>
        )}
        
        {paymentStatus === 'timeout' && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">⏰</span>
              </div>
              <span className="text-orange-800">Confirmation timeout. Please try again.</span>
            </div>
          </div>
        )}
        
        {paymentStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">⚠</span>
              </div>
              <span className="text-red-800">Payment failed. Please try again.</span>
            </div>
          </div>
        )}

        {/* Submit Error */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">!</span>
              </div>
              <span className="text-red-800">{errors.submit}</span>
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleCancel}
            disabled={isProcessing && !['waiting', 'waiting-'].includes(paymentStatus)}
            className="flex-1 px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 disabled:opacity-50 transition-colors"
          >
            Cancel
          </button>
          
          <button
            onClick={handlePayment}
            disabled={isProcessing || !libpayIdentifier}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isProcessing ? "Processing..." : `Pay with LibPay`}
          </button>
        </div>
        
        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            By proceeding, you agree to our Terms of Service and Privacy Policy
          </p>
          <p className="text-xs text-gray-400 mt-1">
            You have 5 minutes to confirm the payment in your mobile app
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationPayment;
