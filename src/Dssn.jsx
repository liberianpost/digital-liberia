import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '@utils/api';

const navLinks = [
  { label: 'Home', to: '/', color: 'bg-blue-500/80' },
  { label: 'System', to: '/system', color: 'bg-green-500/80' },
  { label: 'Digital Liberia', to: '/digital-liberia', color: 'bg-purple-500/80' },
  { label: 'LibPay', to: '/libpay', color: 'bg-yellow-500/80' },
  { label: 'Liberian Post', to: '/liberian-post', color: 'bg-pink-500/80' },
];

const logos = [
  '/logos/liberianpost.png',
  '/logos/digital.png',
  '/logos/libmusic.png',
  '/logos/libconnectsit.png',
  '/logos/libpaysit.png',
  '/logos/seal of liberia.png',
  '/logos/liberia.png',
];

const backgroundImages = [
  '/backgrounds/bg1.jpg',
  '/backgrounds/bg2.jpg',
  '/backgrounds/bg3.jpg',
  '/backgrounds/bg4.jpg',
  '/backgrounds/bg5.jpg',
];

const sanitizeHTML = (str) => {
  if (!str) return '';
  return str
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

const GoogleStorageImage = ({ src, alt, className, onClick }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`${className} bg-gray-800/50 flex items-center justify-center rounded-lg text-red-400 text-sm`}>
        {error ? `Failed to load image: ${src}` : 'No image available'}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain max-w-full max-h-full`}
      onClick={onClick}
      loading="lazy"
      onError={(e) => {
        console.error(`Dssn.jsx - Failed to load image: ${src}`);
        setError(true);
      }}
    />
  );
};

export default function Dssn() {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [dssn, setDssn] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState(null);
  const [currentDocumentUrl, setCurrentDocumentUrl] = useState('');
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  console.log('Dssn.jsx - Rendering', { location: location.pathname, isSearching, customerData });

  useEffect(() => {
    console.log('Dssn.jsx - Setting up background interval');
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => {
      console.log('Dssn.jsx - Clearing background interval');
      clearInterval(bgInterval);
    };
  }, []);

  useEffect(() => {
    console.log('Dssn.jsx - Setting up logo interval');
    const logoInterval = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % logos.length);
    }, 600);
    return () => {
      console.log('Dssn.jsx - Clearing logo interval');
      clearInterval(logoInterval);
    };
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const cleanedDssn = dssn.trim().toUpperCase();

    if (!/^[A-Za-z0-9]{15}$/.test(cleanedDssn)) {
      setError({
        title: 'Invalid DSSN Format',
        message: 'Must be exactly 15 alphanumeric characters',
        details: `Received: ${cleanedDssn} (${cleanedDssn.length} chars)`,
      });
      console.error('Dssn.jsx - Invalid DSSN format', { cleanedDssn });
      return;
    }

    setIsSearching(true);
    setError(null);

    try {
      console.log('Dssn.jsx - Initiating API call for DSSN:', cleanedDssn);
      const response = await api.get(`/get-dssn?dssn=${encodeURIComponent(cleanedDssn)}`);

      const result = response.data;

      if (!result.success) {
        throw {
          title: result.error || 'Request Failed',
          message: result.message || 'Unable to retrieve DSSN data',
          details: `Reference: ${result.metadata?.requestId || 'N/A'}`,
          timestamp: result.metadata?.timestamp || new Date().toISOString(),
        };
      }

      const transformedData = {
        'Full Name': result.data.fullName || 'Not available',
        'Place of Birth': result.data.placeOfBirth || 'Not available',
        'Date of Birth': result.data.dateOfBirth || 'Not available',
        Sex: result.data.sex || 'Not available',
        Nationality: result.data.nationality || 'Not available',
        Address: result.data.address || 'Not available',
        'Postal Address': result.data.postalAddress || 'Not available',
        'Phone Number': result.data.phoneNumber || 'Not available',
        Email: result.data.email || 'Not available',
        'Employment Status': result.data.employmentStatus || 'Not available',
        'Marital Status': result.data.maritalStatus || 'Not available',
        'Number of Children': result.data.numberOfChildren || 'Not available',
        'Passport Number': result.data.passportNumber || 'Not available',
        'Birth Certificate': result.data.birthCertificate || 'Not available',
        "Driver's License": result.data.driverLicense || 'Not available',
        Image: result.data.images?.profile?.url || null,
        'Passport Image': result.data.images?.passport?.url || null,
        'Birth Certificate Image': result.data.images?.birthCertificate?.url || null,
        'Drivers License Image': result.data.images?.driverLicense?.url || null,
        'National Id Image': result.data.images?.nationalId?.url || null,
        'Search Metadata': result.metadata
          ? `Request ID: ${result.metadata.requestId} | ${new Date(
              result.metadata.timestamp
            ).toLocaleString()}`
          : 'No metadata available',
      };

      console.log('Dssn.jsx - API call successful', { transformedData });
      setCustomerData(transformedData);
      setShowInfoModal(true);
    } catch (err) {
      console.error('Dssn.jsx - Search error', err);
      setError({
        title: err.title || 'Search Error',
        message: err.message || 'Failed to process request',
        details: err.details || `DSSN: ${cleanedDssn}`,
        technical: `Status: ${err.status || 'Unknown'} | ${err.timestamp || new Date().toISOString()}`,
      });
    } finally {
      setIsSearching(false);
    }
  };

  const openDocumentModal = (url) => {
    console.log('Dssn.jsx - Opening document modal', { url });
    setCurrentDocumentUrl(url);
    setShowDocumentModal(true);
  };

  const closeDocumentModal = () => {
    console.log('Dssn.jsx - Closing document modal');
    setShowDocumentModal(false);
    setCurrentDocumentUrl('');
  };

  const downloadDocument = () => {
    if (!currentDocumentUrl) return;
    console.log('Dssn.jsx - Downloading document', { currentDocumentUrl });
    const link = document.createElement('a');
    link.href = currentDocumentUrl;
    const filename = currentDocumentUrl.split('/').pop() || 'document';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-inter overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/90 -z-50" />
      <div className="fixed inset-0 bg-white/10 backdrop-blur-[3px] pointer-events-none -z-40" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd
