import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';

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
      <Box
        className={`${className} bg-gray-800/50 flex items-center justify-center rounded-lg`}
        sx={{ bgcolor: 'rgba(31, 41, 55, 0.5)' }}
      >
        <Typography className="text-red-400 text-sm">
          {error ? `Failed to load image: ${src}` : 'No image available'}
        </Typography>
      </Box>
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
        console.error(`Image failed to load: ${src}`);
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

  console.log('Dssn: Rendering', { location: location.pathname, isSearching, customerData });

  useEffect(() => {
    console.log('Dssn: Setting up background interval');
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => {
      console.log('Dssn: Clearing background interval');
      clearInterval(bgInterval);
    };
  }, []);

  useEffect(() => {
    console.log('Dssn: Setting up logo interval');
    const logoInterval = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % logos.length);
    }, 600);
    return () => {
      console.log('Dssn: Clearing logo interval');
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
      console.error('Dssn: Invalid DSSN format', { cleanedDssn });
      return;
    }

    setIsSearching(true);
    setError(null);

    try {
      console.log('Dssn: Initiating API call for DSSN:', cleanedDssn);
      const response = await fetch(
        `https://api.digitalliberia.com/api/get-dssn?dssn=${encodeURIComponent(cleanedDssn)}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw {
          title: result.error || `HTTP Error ${response.status}`,
          message: result.message || 'Request failed',
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

      console.log('Dssn: API call successful', { transformedData });
      setCustomerData(transformedData);
      setShowInfoModal(true);
    } catch (err) {
      console.error('Dssn: Search error', err);
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
    console.log('Dssn: Opening document modal', { url });
    setCurrentDocumentUrl(url);
    setShowDocumentModal(true);
  };

  const closeDocumentModal = () => {
    console.log('Dssn: Closing document modal');
    setShowDocumentModal(false);
    setCurrentDocumentUrl('');
  };

  const downloadDocument = () => {
    if (!currentDocumentUrl) return;
    console.log('Dssn: Downloading document', { currentDocumentUrl });
    const link = document.createElement('a');
    link.href = currentDocumentUrl;
    const filename = currentDocumentUrl.split('/').pop() || 'document';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  try {
    return (
      <Box className="relative min-h-screen w-full bg-gray-900 text-white font-inter overflow-x-hidden">
        <div
          className="fixed inset-0 -z-50 bg-gradient-to-br from-blue-900/90 to-indigo-900/90"
        />
        <div
          className="fixed inset-0 -z-40 bg-white/10 backdrop-blur-[3px] pointer-events-none"
        />
        <div
          className="fixed inset-0 -z-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-10 pointer-events-none"
        />

        <Box
          className="fixed inset-0 -z-20 bg-cover bg-center transition-opacity duration-1000 mix-blend-soft-light"
          sx={{ backgroundImage: `url(${backgroundImages[bgIndex]})`, opacity: 0.15 }}
        />

        <Box className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Box className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
            {logos.map((logo, index) => (
              <Box
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                  index === activeLogo ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    console.error(`Dssn: Failed to load logo: ${logo}`);
                    e.target.src = '/logos/fallback.png';
                  }}
                />
                <Box className="absolute inset-0 bg-black/5" />
              </Box>
            ))}
          </Box>
        </Box>

        <header className="fixed top-0 left-0 w-full z-50">
          <Box
            className="bg-indigo-900/70 backdrop-blur-md border-b border-indigo-700/30"
            sx={{ bgcolor: 'rgba(49, 46, 129, 0.7)' }}
          >
            <Box className="flex items-center justify-center px-4 py-4 max-w-7xl mx-auto">
              <nav className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center">
                {navLinks.map((link) => (
                  <Box
                    key={link.to}
                    className={`flex-shrink-0 ${link.color} px-3 py-1 rounded-lg`}
                  >
                    <Link
                      to={link.to}
                      className={`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${
                        location.pathname === link.to
                          ? 'text-yellow-300'
                          : 'text-white hover:text-blue-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </nav>
            </Box>

            <Box className="w-full bg-gradient-to-b from-indigo-900/50 to-transparent overflow-x-auto">
              <Box className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
                {logos.map((logo, index) => (
                  <Box
                    key={index}
                    className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                      index === activeLogo
                        ? 'scale-110 bg-white shadow-lg'
                        : 'scale-100 bg-white/90'
                    }`}
                    sx={{
                      animation: index === activeLogo ? 'heartbeat 600ms ease-in-out' : 'none',
                    }}
                  >
                    <img
                      src={logo}
                      alt={`Logo ${index}`}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      onError={(e) => {
                        console.error(`Dssn: Failed to load logo: ${logo}`);
                        e.target.src = '/logos/fallback.png';
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </header>

        <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
          <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
            <Box
              className="relative bg-indigo-900/50 backdrop-blur-lg rounded-xl border border-indigo-700/30 shadow-2xl overflow-hidden"
              sx={{ bgcolor: 'rgba(49, 46, 129, 0.5)' }}
            >
              <Box
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none"
              />
              <Box
                className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-30 pointer-events-none"
              />

              <Box className="relative p-6 md:p-8">
                <Typography
                  variant="h2"
                  className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-indigo-700/30 pb-2"
                >
                  DSSN Verification
                </Typography>
                <Box className="text-white/90 relative space-y-6">
                  <Typography>
                    Verify a Digital Social Security Number (DSSN) to check its validity and view
                    basic public information. Enter the 15-digit alphanumeric DSSN in the field below.
                  </Typography>

                  <form onSubmit={handleSearch} className="space-y-4">
                    <Box>
                      <Typography component="label" htmlFor="dssn" className="block text-sm font-medium mb-2">
                        Enter DSSN to Verify:
                      </Typography>
                      <TextField
                        id="dssn"
                        value={dssn}
                        onChange={(e) => setDssn(e.target.value)}
                        className="w-full bg-indigo-900/40 border border-indigo-700/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
                        placeholder="e.g. LIB123456789ABCD"
                        required
                        inputProps={{
                          pattern: '[A-Za-z0-9]{15}',
                          title: '15-character alphanumeric DSSN',
                        }}
                        sx={{
                          '& .MuiInputBase-input': { color: 'white' },
                          '& .MuiInputLabel-root': { color: 'white' },
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'rgba(67, 56, 202, 0.3)' },
                            '&:hover fieldset': { borderColor: 'rgba(67, 56, 202, 0.5)' },
                            '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                          },
                        }}
                        InputProps={{
                          style: { backgroundColor: 'rgba(49, 46, 129, 0.4)' },
                        }}
                      />
                    </Box>

                    <Button
                      type="submit"
                      disabled={isSearching}
                      className={`flex items-center justify-center px-6 py-3 rounded-lg border transition-all ${
                        isSearching
                          ? 'bg-blue-700/50 border-blue-600/30 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-500/80 to-indigo-600/80 border-blue-400/30 hover:from-blue-600/80 hover:to-indigo-700/80 hover:shadow-lg'
                      }`}
                      sx={{ textTransform: 'none' }}
                    >
                      {isSearching ? (
                        <>
                          <CircularProgress size={20} className="-ml-1 mr-3 text-white" />
                          Searching...
                        </>
                      ) : (
                        'Search'
                      )}
                    </Button>
                  </form>

                  {error && (
                    <Box
                      className="bg-red-900/40 border border-red-700/30 rounded-lg p-4 backdrop-blur-sm"
                      sx={{ bgcolor: 'rgba(127, 29, 29, 0.4)' }}
                    >
                      <Box className="flex justify-between items-start">
                        <Box>
                          <Typography variant="h4" className="font-bold text-red-300">
                            {error.title}
                          </Typography>
                          <Typography className="text-red-200">{error.message}</Typography>
                          {error.details && (
                            <Typography className="text-sm text-red-200/80 mt-1">
                              {error.details}
                            </Typography>
                          )}
                          {error.technical && (
                            <Typography className="text-xs text-red-200/60 mt-2">
                              {error.technical}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </section>
        </main>

        {showInfoModal && customerData && (
          <Box
            id="dssnInfo"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            sx={{ bgcolor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <Box
              className="bg-gradient-to-br from-indigo-900/90 to-blue-900/90 border border-indigo-700/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              sx={{ bgcolor: 'rgba(49, 46, 129, 0.9)' }}
            >
              <Box className="p-6">
                <Box className="flex justify-between items-center mb-4">
                  <Box>
                    <Typography
                      variant="h3"
                      className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      Search Results for DSSN: {sanitizeHTML(dssn)}
                    </Typography>
                    {customerData['Search Metadata'] && (
                      <Typography className="text-xs text-blue-300/70 mt-1">
                        {customerData['Search Metadata']}
                      </Typography>
                    )}
                  </Box>
                  <Button
                    onClick={() => setShowInfoModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </Box>

                <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Box
                    className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-700/30 backdrop-blur-sm"
                    sx={{ bgcolor: 'rgba(49, 46, 129, 0.4)' }}
                  >
                    <Typography variant="h4" className="text-blue-300 mb-3">
                      Profile Information
                    </Typography>
                    <Box className="space-y-3">
                      {Object.entries(customerData).map(([key, value]) => {
                        if (typeof value === 'string' && !key.includes('Image') && !key.includes('Metadata')) {
                          return (
                            <Box
                              key={key}
                              className="bg-indigo-800/20 p-2 rounded border border-indigo-700/20"
                              sx={{ bgcolor: 'rgba(55, 48, 163, 0.2)' }}
                            >
                              <Typography
                                component="strong"
                                className="text-blue-300 text-sm"
                              >
                                {key}:
                              </Typography>
                              <Typography component="span" className="ml-2 text-white/90 text-sm">
                                {sanitizeHTML(value)}
                              </Typography>
                            </Box>
                          );
                        }
                        return null;
                      })}
                    </Box>
                  </Box>

                  <Box
                    className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-700/30 backdrop-blur-sm"
                    sx={{ bgcolor: 'rgba(49, 46, 129, 0.4)' }}
                  >
                    <Typography variant="h4" className="text-blue-300 mb-3">
                      Profile Photo
                    </Typography>
                    <Box className="relative w-full h-64 flex items-center justify-center">
                      <GoogleStorageImage
                        src={customerData['Image']}
                        alt="Profile Photo"
                        className="max-w-full max-h-full rounded-lg border-2 border-blue-500/30 cursor-pointer"
                        onClick={() => openDocumentModal(customerData['Image'])}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box className="space-y-6">
                  <Box className="document-category">
                    <Typography
                      variant="h4"
                      className="text-blue-300 mb-3 border-b border-indigo-700/30 pb-2"
                    >
                      Documents
                    </Typography>
                    <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {customerData['Passport Image'] && (
                        <Box
                          className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm"
                          sx={{ bgcolor: 'rgba(49, 46, 129, 0.4)' }}
                        >
                          <Typography variant="h5" className="text-blue-300 mb-2">
                            Passport
                          </Typography>
                          <Box
                            className="document-thumbnail w-full h-48 flex items-center justify-center"
                            onClick={() => openDocumentModal(customerData['Passport Image'])}
                          >
                            <GoogleStorageImage
                              src={customerData['Passport Image']}
                              alt="Passport"
                              className="max-w-full max-h-full rounded border border-indigo-700/30 cursor-pointer"
                            />
                            <Typography className="text-center text-xs text-white/80 mt-1">
                              Click to view
                            </Typography>
                          </Box>
                        </Box>
                      )}

                      {customerData['Birth Certificate Image'] && (
                        <Box
                          className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm"
                          sx={{ bgcolor: 'rgba(49, 46, 129, 0.4)' }}
                        >
                          <Typography variant="h5" className="text-blue-300 mb-2">
                            Birth Certificate
                          </Typography>
                          <Box
                            className="document-thumbnail w-full h-48 flex items-center justify-center"
                            onClick={() => openDocumentModal(customerData['Birth Certificate Image'])}
                          >
                            <GoogleStorageImage
                              src={customerData['Birth Certificate Image']}
                              alt="Birth Certificate"
                              className="max-w-full max-h-full rounded border border-indigo-700/30 cursor-pointer"
                            />
                            <Typography className="text-center text-xs text-white/80 mt-1">
                              Click to view
                            </Typography>
                          </Box>
                        </Box>
                      )}

                      {customerData['Drivers License Image'] && (
                        <Box
                          className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm"
                          sx={{ bgcolor: 'rgba(49, 46, 129, 0.4)' }}
                        >
                          <Typography variant="h5" className="text-blue-300 mb-2">
                            Driver's License
                          </Typography>
                          <Box
                            className="document-thumbnail w-full h-48 flex items-center justify-center"
                            onClick={() => openDocumentModal(customerData['Drivers License Image'])}
                          >
                            <GoogleStorageImage
                              src={customerData['Drivers License Image']}
                              alt="Driver's License"
                              className="max-w-full max-h-full rounded border border-indigo-700/30 cursor-pointer"
                            />
                            <Typography className="text-center text-xs text-white/80 mt-1">
                              Click to view
                            </Typography>
                          </Box>
                        </Box>
                      )}

                      {customerData['National Id Image'] && (
                        <Box
                          className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm"
                          sx={{ bgcolor: 'rgba(49, 46, 129, 0.4)' }}
                        >
                          <Typography variant="h5" className="text-blue-300 mb-2">
                            National ID
                          </Typography>
                          <Box
                            className="document-thumbnail w-full h-48 flex items-center justify-center"
                            onClick={() => openDocumentModal(customerData['National Id Image'])}
                          >
                            <GoogleStorageImage
                              src={customerData['National Id Image']}
                              alt="National ID"
                              className="max-w-full max-h-full rounded border border-indigo-700/30 cursor-pointer"
                            />
                            <Typography className="text-center text-xs text-white/80 mt-1">
                              Click to view
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {showDocumentModal && (
          <Box
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            sx={{ bgcolor: 'rgba(0, 0, 0, 0.9)' }}
          >
            <Box
              className="relative bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto"
              sx={{ bgcolor: '#111827' }}
            >
              <Button
                onClick={closeDocumentModal}
                className="absolute top-4 right-4 z-50 text-white hover:text-red-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>

              <Box className="p-4 h-full flex flex-col items-center justify-center">
                {currentDocumentUrl?.endsWith('.pdf') ? (
                  <iframe
                    src={currentDocumentUrl}
                    className="w-full h-[80vh]"
                    title="Document Viewer"
                  />
                ) : (
                  <>
                    <GoogleStorageImage
                      src={currentDocumentUrl}
                      alt="Document Full View"
                      className="max-w-full max-h-[80vh] object-contain"
                    />
                    <Button
                      onClick={downloadDocument}
                      className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                      sx={{ textTransform: 'none' }}
                    >
                      Download Document
                    </Button>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        )}

        <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
          <Box className="border-t border-indigo-700/30 pt-6">
            © {new Date().getFullYear()} Digital Liberia. All rights reserved.
          </Box>
        </footer>

        <style jsx global>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            25% {
              transform: scale(1.1);
            }
            50% {
              transform: scale(1);
            }
            75% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </Box>
    );
  } catch (error) {
    console.error('Dssn: Render error', error);
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="background.default"
      >
        <Typography color="error">Error rendering DSSN page: {error.message}</Typography>
      </Box>
    );
  }
}
