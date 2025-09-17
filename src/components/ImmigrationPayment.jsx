import React, { useState } from "react";
import api from '@/api';

const ImmigrationPayment = ({ onPaymentSuccess, onPaymentCancel, uptcData }) => {
  const [paymentMethod, setPaymentMethod] = useState("libpay");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  
  // Payment amount - you can adjust this based on your requirements
  const paymentAmount = 25.00; // $25 for UPTC generation
  
  const handlePayment = async () => {
    setIsProcessing(true);
    setPaymentStatus(null);
    
    try {
      // Get user email from localStorage or props
      const userEmail = localStorage.getItem("user_email") || uptcData?.userEmail || "user@example.com";
      
      // Create payment request
      const paymentResponse = await api.post('https://libpayapp.liberianpost.com:3000/payment-request', {
        payerEmail: userEmail,
        amount: paymentAmount,
        currency: "USD",
        description: `UPTC Generation for ${uptcData?.county || 'Property'}`,
        merchantInfo: {
          name: "Liberia Land Authority",
          service: "UPTC Generation",
          uptcData: uptcData
        }
      });
      
      if (paymentResponse.data.success) {
        const paymentRequestId = paymentResponse.data.paymentRequestId;
        
        // Poll for payment status
        const checkPaymentStatus = async () => {
          try {
            const statusResponse = await api.get(`https://libpayapp.liberianpost.com:3000/payment-status/${paymentRequestId}`);
            
            if (statusResponse.data.status === 'completed') {
              setPaymentStatus('success');
              setIsProcessing(false);
              
              // Call the success callback with payment details
              if (onPaymentSuccess) {
                onPaymentSuccess({
                  paymentRequestId,
                  amount: paymentAmount,
                  currency: "USD",
                  timestamp: new Date().toISOString()
                });
              }
            } else if (statusResponse.data.status === 'rejected') {
              setPaymentStatus('rejected');
              setIsProcessing(false);
              
              if (onPaymentCancel) {
                onPaymentCancel('Payment was rejected by user');
              }
            } else {
              // Continue polling if still pending
              setTimeout(checkPaymentStatus, 2000);
            }
          } catch (error) {
            console.error('Error checking payment status:', error);
            setPaymentStatus('error');
            setIsProcessing(false);
          }
        };
        
        // Start polling
        setTimeout(checkPaymentStatus, 2000);
        
      } else {
        throw new Error(paymentResponse.data.message || 'Failed to create payment request');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    if (onPaymentCancel) {
      onPaymentCancel('Payment cancelled by user');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">UPTC Generation Payment</h2>
          <p className="text-gray-600">Complete payment to generate your Unique Property Token Code</p>
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
            <span className="text-2xl font-bold text-green-600">${paymentAmount.toFixed(2)} USD</span>
          </div>
        </div>
        
        {/* Payment Method Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPaymentMethod("libpay")}
              className={`p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "libpay"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300"
              }`}
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">$</span>
                </div>
                <span className="text-sm font-medium">LibPay</span>
              </div>
            </button>
            
            <button
              onClick={() => setPaymentMethod("mobile")}
              className={`p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "mobile"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300"
              }`}
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📱</span>
                </div>
                <span className="text-sm font-medium">Mobile Money</span>
              </div>
            </button>
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
                {paymentMethod === "libpay" 
                  ? "You will receive a confirmation request on your LibPay mobile app. Please approve the payment to continue."
                  : "Mobile money payment options will be available soon. Please use LibPay for now."
                }
              </p>
            </div>
          </div>
        </div>
        
        {/* Payment Status */}
        {paymentStatus === 'processing' && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
              <span className="text-blue-800">Processing payment...</span>
            </div>
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
        
        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleCancel}
            disabled={isProcessing}
            className="flex-1 px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 disabled:opacity-50 transition-colors"
          >
            Cancel
          </button>
          
          <button
            onClick={handlePayment}
            disabled={isProcessing || paymentMethod === "mobile"}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isProcessing ? "Processing..." : "Pay with LibPay"}
          </button>
        </div>
        
        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            By proceeding, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationPayment;
