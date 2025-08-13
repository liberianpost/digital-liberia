import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Home", to: "/", color: "bg-blue-500/80" },
    { label: "System", to: "/system", color: "bg-green-500/80" },
    { label: "Digital Liberia", to: "/digital-liberia", color: "bg-purple-500/80" },
    { label: "LibPay", to: "/libpay", color: "bg-yellow-500/80" },
    { label: "Liberian Post", to: "/liberian-post", color: "bg-pink-500/80" }
];

const logos = [
    "/logos/liberianpost.png",
    "/logos/digital.png",
    "/logos/libmusic.png",
    "/logos/libconnectsit.png",
    "/logos/libpaysit.png",
    "/logos/seal of liberia.png",
    "/logos/liberia.png"
];

const backgroundImages = [
    "/backgrounds/bg1.jpg",
    "/backgrounds/bg2.jpg",
    "/backgrounds/bg3.jpg",
    "/backgrounds/bg4.jpg",
    "/backgrounds/bg5.jpg"
];

const sanitizeHTML = (str) => {
    if (!str) return '';
    return str.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};

const GoogleStorageImage = ({ src, alt, className, onClick }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!src) {
        console.warn(`Image Debug: No source provided for ${alt}`);
        return (
            <div className={`${className} bg-gray-200 flex items-center justify-center rounded-lg min-h-[100px]`}>
                <span className="text-gray-500">No image available</span>
            </div>
        );
    }

    console.log(`Image Debug: Attempting to render ${alt} with URL: ${src}`);

    return (
        <div className="relative">
            {isLoading && (
                <div className={`${className} flex items-center justify-center bg-gray-800 rounded-lg min-h-[100px]`}>
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            )}
            {error && (
                <div className={`${className} bg-red-900/40 flex items-center justify-center rounded-lg min-h-[100px]`}>
                    <span className="text-red-300">Error: {error}</span>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`${className} block min-h-[100px] max-w-full max-h-full ${isLoading || error ? 'hidden' : ''}`}
                onClick={onClick}
                crossOrigin="anonymous"
                onLoad={() => {
                    console.log(`Image Debug: Successfully loaded ${alt} at ${src}`);
                    setIsLoading(false);
                    setError(null);
                }}
                onError={(e) => {
                    console.error(`Image Debug: Failed to render ${alt} at ${src}`, e);
                    setIsLoading(false);
                    setError('Failed to load image');
                }}
            />
        </div>
    );
};

export default function Dssn() {
    const location = useLocation();
    const [activeLogo, setActiveLogo] = useState(0);
    const [bgIndex, setBgIndex] = useState(0);
    const [dssn, setDssn] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [customerData, setCustomerData] = useState(null);
    const [error, setError] = useState(null);
    const [currentDocumentUrl, setCurrentDocumentUrl] = useState("");
    const [showDocumentModal, setShowDocumentModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setBgIndex(prev => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(bgInterval);
    }, []);

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setActiveLogo(prev => (prev + 1) % logos.length);
        }, 600);
        return () => clearInterval(logoInterval);
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        const cleanedDssn = dssn.trim().toUpperCase();
        console.clear();
        console.group(`DSSN Search Debug: ${cleanedDssn}`);
        console.log('Starting search with DSSN:', cleanedDssn);

        if (!/^[A-Za-z0-9]{15}$/.test(cleanedDssn)) {
            const errorMsg = {
                title: "Invalid DSSN Format",
                message: "Must be exactly 15 alphanumeric characters",
                details: `Received: ${cleanedDssn} (${cleanedDssn.length} chars)`
            };
            console.warn('Validation failed:', errorMsg);
            setError(errorMsg);
            console.groupEnd();
            return;
        }

        setIsSearching(true);
        setError(null);

        try {
            const apiUrl = `https://api.digitalliberia.com/api/get-dssn?dssn=${encodeURIComponent(cleanedDssn)}`;
            console.log('API Request URL:', apiUrl);

            const response = await fetch(apiUrl, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response status:', response.status);
            const result = await response.json();
            console.log('API Response Data:', result);

            if (!response.ok || !result.success) {
                const errorDetails = {
                    title: result.error || `HTTP Error ${response.status}`,
                    message: result.message || 'Request failed',
                    details: `Reference: ${result.metadata?.requestId || 'N/A'}`,
                    timestamp: result.metadata?.timestamp || new Date().toISOString()
                };
                console.error('API Error:', errorDetails);
                throw errorDetails;
            }

            console.group('Image URL Verification');
            if (result.data.images) {
                for (const [key, imgObj] of Object.entries(result.data.images)) {
                    if (!imgObj || !imgObj.url) {
                        console.warn(`Missing ${key} image or URL`);
                        continue;
                    }
                    console.log(`Image ${key} URL:`, imgObj.url, `Type: ${imgObj.type}`);
                }
            }
            console.groupEnd();

            const transformedData = {
                "Full Name": result.data.fullName || 'Not available',
                "Place of Birth": result.data.placeOfBirth || 'Not available',
                "Date of Birth": result.data.dateOfBirth || 'Not available',
                "Sex": result.data.sex || 'Not available',
                "Nationality": result.data.nationality || 'Not available',
                "Address": result.data.address || 'Not available',
                "Postal Address": result.data.postalAddress || 'Not available',
                "Phone Number": result.data.phoneNumber || 'Not available',
                "Email": result.data.email || 'Not available',
                "Employment Status": result.data.employmentStatus || 'Not available',
                "Marital Status": result.data.maritalStatus || 'Not available',
                "Number of Children": result.data.numberOfChildren || 'Not available',
                "Passport Number": result.data.passportNumber || 'Not available',
                "Birth Certificate": result.data.birthCertificate || 'Not available',
                "Driver's License": result.data.driverLicense || 'Not available',
                "Image": result.data.images?.profile?.url || null,
                "Passport Image": result.data.images?.passport?.url || null,
                "Birth Certificate Image": result.data.images?.birthCertificate?.url || null,
                "Drivers License Image": result.data.images?.driverLicense?.url || null,
                "National Id Image": result.data.images?.nationalId?.url || null,
                "Search Metadata": result.metadata ?
                    `Request ID: ${result.metadata.requestId} | ${new Date(result.metadata.timestamp).toLocaleString()}`
                    : 'No metadata available'
            };

            console.log('Transformed Data:', transformedData);
            setCustomerData(transformedData);
            setShowInfoModal(true);

        } catch (err) {
            console.error('Search Failed:', err);
            setError({
                title: err.title || 'Search Error',
                message: err.message || 'Failed to process request',
                details: err.details || `DSSN: ${cleanedDssn}`,
                technical: `Status: ${err.status || 'Unknown'} | ${err.timestamp || new Date().toISOString()}`
            });
        } finally {
            setIsSearching(false);
            console.groupEnd();
        }
    };

    const openDocumentModal = (url) => {
        console.log('Opening document modal with URL:', url);
        setCurrentDocumentUrl(url);
        setShowDocumentModal(true);
    };

    const closeDocumentModal = () => {
        console.log('Closing document modal');
        setShowDocumentModal(false);
        setCurrentDocumentUrl("");
    };

    const downloadDocument = () => {
        console.log('Downloading document:', currentDocumentUrl);
        if (!currentDocumentUrl) {
            console.warn('No document URL to download');
            return;
        }
        
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
            <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blue-900/90 to-indigo-900/90" />
            <div className="fixed inset-0 -z-40 bg-white/10 backdrop-blur-[3px] pointer-events-none" />
            <div className="fixed inset-0 -z-30 bg-[url('/noise.png')] opacity-10 pointer-events-none" />

            <div
                className="fixed inset-0 -z-20 bg-cover bg-center transition-opacity duration-1000 mix-blend-soft-light"
                style={{ backgroundImage: `url(${backgroundImages[bgIndex]})`, opacity: 0.15 }}
            />

            <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                                index === activeLogo ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <img src={logo} alt={`Logo ${index}`} className="max-w-full max-h-full object-contain" />
                            <div className="absolute inset-0 bg-black/5" />
                        </div>
                    ))}
                </div>
            </div>

            <header className="fixed top-0 left-0 w-full z-50">
                <div className="bg-indigo-900/70 backdrop-blur-md border-b border-indigo-700/30">
                    <div className="flex items-center justify-center px-4 py-4 max-w-7xl mx-auto">
                        <nav className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center">
                            {navLinks.map(link => (
                                <div key={link.to} className={`flex-shrink-0 ${link.color} px-3 py-1 rounded-lg`}>
                                    <Link
                                        to={link.to}
                                        className={`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${
                                            location.pathname === link.to
                                                ? "text-yellow-300"
                                                : "text-white hover:text-blue-200"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className="w-full bg-gradient-to-b from-indigo-900/50 to-transparent overflow-x-auto">
                        <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                                        index === activeLogo
                                            ? "scale-110 bg-white shadow-lg"
                                            : "scale-100 bg-white/90"
                                    }`}
                                    style={{
                                        animation: index === activeLogo ? 'heartbeat 600ms ease-in-out' : 'none'
                                    }}
                                >
                                    <img
                                        src={logo}
                                        alt={`Logo ${index}`}
                                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
                <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
                    <div className="relative bg-indigo-900/50 backdrop-blur-lg rounded-xl border border-indigo-700/30 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-30 pointer-events-none" />

                        <div className="relative p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-indigo-700/30 pb-2">
                                DSSN Verification
                            </h2>
                            <div className="text-white/90 relative space-y-6">
                                <p>
                                    Verify a Digital Social Security Number (DSSN) to check its validity and view basic public information.
                                    Enter the 15-digit alphanumeric DSSN in the field below.
                                </p>

                                <form onSubmit={handleSearch} className="space-y-4">
                                    <div>
                                        <label htmlFor="dssn" className="block text-sm font-medium mb-2">
                                            Enter DSSN to Verify:
                                        </label>
                                        <input
                                            type="text"
                                            id="dssn"
                                            value={dssn}
                                            onChange={(e) => setDssn(e.target.value)}
                                            className="w-full bg-indigo-900/40 border border-indigo-700/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm text-white placeholder-indigo-400/70"
                                            placeholder="e.g. LIB123456789ABCD"
                                            required
                                            pattern="[A-Za-z0-9]{15}"
                                            title="15-character alphanumeric DSSN"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSearching}
                                        className={`flex items-center justify-center px-6 py-3 rounded-lg border transition-all ${
                                            isSearching
                                                ? "bg-blue-700/50 border-blue-600/30 cursor-not-allowed"
                                                : "bg-gradient-to-r from-blue-500/80 to-indigo-600/80 border-blue-400/30 hover:from-blue-600/80 hover:to-indigo-700/80 hover:shadow-lg"
                                        }`}
                                    >
                                        {isSearching ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Searching...
                                            </>
                                        ) : (
                                            "Search"
                                        )}
                                    </button>
                                </form>

                                {error && (
                                    <div className="bg-red-900/40 border border-red-700/30 rounded-lg p-4 backdrop-blur-sm">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-red-300">{error.title}</h4>
                                                <p className="text-red-200">{error.message}</p>
                                                {error.details && (
                                                    <p className="text-sm text-red-200/80 mt-1">{error.details}</p>
                                                )}
                                                {error.technical && (
                                                    <p className="text-xs text-red-200/60 mt-2">{error.technical}</p>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => console.error('Full Error:', error)}
                                                className="text-xs text-red-300/70 hover:text-red-300 px-2 py-1 rounded"
                                            >
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {showInfoModal && customerData && (
                <div id="dssnInfo" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-gradient-to-br from-indigo-900/90 to-blue-900/90 border border-indigo-700/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        Search Results for DSSN: {sanitizeHTML(dssn)}
                                    </h3>
                                    {customerData["Search Metadata"] && (
                                        <p className="text-xs text-blue-300/70 mt-1">
                                            {customerData["Search Metadata"]}
                                        </p>
                                    )}
                                </div>
                                <button onClick={() => setShowInfoModal(false)} className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                    <h4 className="text-blue-300 mb-3">Profile Information</h4>
                                    <div className="space-y-3">
                                        {Object.entries(customerData).map(([key, value]) => {
                                            if (typeof value === 'string' && !key.includes('Image') && !key.includes('Metadata')) {
                                                return (
                                                    <div key={key} className="bg-indigo-800/20 p-2 rounded border border-indigo-700/20">
                                                        <strong className="text-blue-300 text-sm">{key}:</strong>
                                                        <span className="ml-2 text-white/90 text-sm">{sanitizeHTML(value)}</span>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>

                                <div className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                    <h4 className="text-blue-300 mb-3">Profile Photo</h4>
                                    {customerData["Image"]?.toLowerCase().endsWith('.pdf') ? (
                                        <div className="w-full h-64 rounded border border-indigo-700/30 bg-gray-800 flex items-center justify-center cursor-pointer" onClick={() => openDocumentModal(customerData["Image"])}>
                                            <span className="text-white/80">PDF Profile (Click to view)</span>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-4">
                                                <h5 className="text-blue-200">Using GoogleStorageImage:</h5>
                                                <GoogleStorageImage
                                                    src={customerData["Image"]}
                                                    alt="Profile Photo"
                                                    className="w-full h-64 max-w-[800px] max-h-[600px] rounded-lg border-2 border-blue-500/30 object-contain cursor-pointer"
                                                    onClick={() => openDocumentModal(customerData["Image"])}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="text-blue-200">Direct img tag (test):</h5>
                                                <img
                                                    src={customerData["Image"]}
                                                    alt="Profile Photo (Direct)"
                                                    className="w-full h-64 max-w-[800px] max-h-[600px] rounded-lg border-2 border-green-500/30 object-contain"
                                                    crossOrigin="anonymous"
                                                    onError={(e) => console.error(`Direct img tag failed for Profile Photo at ${customerData["Image"]}`, e)}
                                                    onLoad={() => console.log(`Direct img tag loaded for Profile Photo at ${customerData["Image"]}`)}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="text-blue-200">Hardcoded test image:</h5>
                                                <img
                                                    src="https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg"
                                                    alt="Hardcoded Test"
                                                    className="w-full h-64 max-w-[800px] max-h-[600px] rounded-lg border-2 border-red-500/30 object-contain"
                                                    crossOrigin="anonymous"
                                                    onError={(e) => console.error(`Hardcoded img tag failed at https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg`, e)}
                                                    onLoad={() => console.log(`Hardcoded img tag loaded at https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg`)}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="document-category">
                                    <h4 className="text-blue-300 mb-3 border-b border-indigo-700/30 pb-2">Documents</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {customerData["Passport Image"] && (
                                            <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                                <h5 className="text-blue-300 mb-2">Passport</h5>
                                                <div className="document-thumbnail" onClick={() => openDocumentModal(customerData["Passport Image"])}>
                                                    {customerData["Passport Image"]?.toLowerCase().endsWith('.pdf') ? (
                                                        <div className="w-full h-48 rounded border border-indigo-700/30 bg-gray-800 flex items-center justify-center cursor-pointer">
                                                            <span className="text-white/80">PDF Document (Click to view)</span>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="mb-2">
                                                                <h6 className="text-blue-200 text-sm">Using GoogleStorageImage:</h6>
                                                                <GoogleStorageImage
                                                                    src={customerData["Passport Image"]}
                                                                    alt="Passport"
                                                                    className="w-full h-48 max-w-[600px] max-h-[400px] rounded border border-indigo-700/30 object-contain"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h6 className="text-blue-200 text-sm">Direct img tag (test):</h6>
                                                                <img
                                                                    src={customerData["Passport Image"]}
                                                                    alt="Passport (Direct)"
                                                                    className="w-full h-48 max-w-[600px] max-h-[400px] rounded border border-green-500/30 object-contain"
                                                                    crossOrigin="anonymous"
                                                                    onError={(e) => console.error(`Direct img tag failed for Passport at ${customerData["Passport Image"]}`, e)}
                                                                    onLoad={() => console.log(`Direct img tag loaded for Passport at ${customerData["Passport Image"]}`)}
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="text-center text-xs text-white/80 mt-1">Click to view</div>
                                                </div>
                                            </div>
                                        )}

                                        {customerData["Birth Certificate Image"] && (
                                            <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                                <h5 className="text-blue-300 mb-2">Birth Certificate</h5>
                                                <div className="document-thumbnail" onClick={() => openDocumentModal(customerData["Birth Certificate Image"])}>
                                                    {customerData["Birth Certificate Image"]?.toLowerCase().endsWith('.pdf') ? (
                                                        <div className="w-full h-48 rounded border border-indigo-700/30 bg-gray-800 flex items-center justify-center cursor-pointer">
                                                            <span className="text-white/80">PDF Document (Click to view)</span>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="mb-2">
                                                                <h6 className="text-blue-200 text-sm">Using GoogleStorageImage:</h6>
                                                                <GoogleStorageImage
                                                                    src={customerData["Birth Certificate Image"]}
                                                                    alt="Birth Certificate"
                                                                    className="w-full h-48 max-w-[600px] max-h-[400px] rounded border border-indigo-700/30 object-contain"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h6 className="text-blue-200 text-sm">Direct img tag (test):</h6>
                                                                <img
                                                                    src={customerData["Birth Certificate Image"]}
                                                                    alt="Birth Certificate (Direct)"
                                                                    className="w-full h-48 max-w-[600px] max-h-[400px] rounded border border-green-500/30 object-contain"
                                                                    crossOrigin="anonymous"
                                                                    onError={(e) => console.error(`Direct img tag failed for Birth Certificate at ${customerData["Birth Certificate Image"]}`, e)}
                                                                    onLoad={() => console.log(`Direct img tag loaded for Birth Certificate at ${customerData["Birth Certificate Image"]}`)}
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="text-center text-xs text-white/80 mt-1">Click to view</div>
                                                </div>
                                            </div>
                                        )}

                                        {customerData["Drivers License Image"] && (
                                            <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                                <h5 className="text-blue-300 mb-2">Driver's License</h5>
                                                <div className="document-thumbnail" onClick={() => openDocumentModal(customerData["Drivers License Image"])}>
                                                    {customerData["Drivers License Image"]?.toLowerCase().endsWith('.pdf') ? (
                                                        <div className="w-full h-48 rounded border border-indigo-700/30 bg-gray-800 flex items-center justify-center cursor-pointer">
                                                            <span className="text-white/80">PDF Document (Click to view)</span>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="mb-2">
                                                                <h6 className="text-blue-200 text-sm">Using GoogleStorageImage:</h6>
                                                                <GoogleStorageImage
                                                                    src={customerData["Drivers License Image"]}
                                                                    alt="Driver's License"
                                                                    className="w-full h-48 max-w-[600px] max-h-[400px] rounded border border-indigo-700/30 object-contain"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h6 className="text-blue-200 text-sm">Direct img tag (test):</h6>
                                                                <img
                                                                    src={customerData["Drivers License Image"]}
                                                                    alt="Driver's License (Direct)"
                                                                    className="w-full h-48 max-w-[600px] max-h-[400px] rounded border border-green-500/30 object-contain"
                                                                    crossOrigin="anonymous"
                                                                    onError={(e) => console.error(`Direct img tag failed for Driver's License at ${customerData["Drivers License Image"]}`, e)}
                                                                    onLoad={() => console.log(`Direct img tag loaded for Driver's License at ${customerData["Drivers License Image"]}`)}
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="text-center text-xs text-white/80 mt-1">Click to view</div>
                                                </div>
                                            </div>
                                        )}

                                        {customerData["National Id Image"] && (
                                            <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                                <h5 className="text-blue-300 mb-2">National ID</h5>
                                                <div className="document-thumbnail" onClick={() => openDocumentModal(customerData["National Id Image"])}>
                                                    {customerData["National Id Image"]?.toLowerCase().endsWith('.pdf') ? (
                                                        <div className="w-full h-48 rounded border border-indigo-700/30 bg-gray-800 flex items-center justify-center cursor-pointer">
                                                            <span className="text-white/80">PDF Document (Click to view)</span>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="mb-2">
                                                                <h6 className="text-blue-200 text-sm">Using GoogleStorageImage:</h6>
                                                                <GoogleStorageImage
                                                                    src={customerData["National Id Image"]}
                                                                    alt="National ID"
                                                                    className="w-full h-48 max-w-[600px] max-h-[400px] rounded border border-indigo-700/30 object-contain"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h6 className="text-blue-200 text-sm">Direct img tag (test):</h6>
                                                                <img
                                                                    src={customerData["National Id Image"]}
                                                                    alt="National ID (Direct)"
                                                                    className="w-full h-48 max-w-[600px] max-h-[400px] rounded border border-green-500/30 object-contain"
                                                                    crossOrigin="anonymous"
                                                                    onError={(e) => console.error(`Direct img tag failed for National ID at ${customerData["National Id Image"]}`, e)}
                                                                    onLoad={() => console.log(`Direct img tag loaded for National ID at ${customerData["National Id Image"]}`)}
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="text-center text-xs text-white/80 mt-1">Click to view</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                    <h4 className="text-blue-300 mb-3">Debug Information</h4>
                                    <div className="space-y-2 text-sm text-white/80">
                                        <p>Profile Image URL: {customerData["Image"] || 'Not available'}</p>
                                        <p>Passport Image URL: {customerData["Passport Image"] || 'Not available'}</p>
                                        <p>Birth Certificate Image URL: {customerData["Birth Certificate Image"] || 'Not available'}</p>
                                        <p>Driver's License Image URL: {customerData["Drivers License Image"] || 'Not available'}</p>
                                        <p>National ID Image URL: {customerData["National Id Image"] || 'Not available'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showDocumentModal && currentDocumentUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="relative bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
                        <button
                            onClick={closeDocumentModal}
                            className="absolute top-4 right-4 z-50 text-white hover:text-red-400 transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-4 h-full flex flex-col items-center justify-center">
                            {currentDocumentUrl.toLowerCase().endsWith('.pdf') ? (
                                <iframe
                                    src={`${currentDocumentUrl}#toolbar=0`}
                                    className="w-full h-[80vh] max-w-[1200px]"
                                    title="Document Viewer"
                                    onError={(e) => console.error('Iframe load error:', e)}
                                />
                            ) : (
                                <>
                                    <div className="mb-4">
                                        <h5 className="text-blue-200">Using GoogleStorageImage:</h5>
                                        <GoogleStorageImage
                                            src={currentDocumentUrl}
                                            alt="Document Full View"
                                            className="w-full max-h-[80vh] max-w-[1200px] object-contain"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="text-blue-200">Direct img tag (test):</h5>
                                        <img
                                            src={currentDocumentUrl}
                                            alt="Document Full View (Direct)"
                                            className="w-full max-h-[80vh] max-w-[1200px] object-contain"
                                            crossOrigin="anonymous"
                                            onError={(e) => console.error(`Direct img tag failed for Document Full View at ${currentDocumentUrl}`, e)}
                                            onLoad={() => console.log(`Direct img tag loaded for Document Full View at ${currentDocumentUrl}`)}
                                        />
                                    </div>
                                    <div>
                                        <h5 className="text-blue-200">Hardcoded test image:</h5>
                                        <img
                                            src="https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg"
                                            alt="Hardcoded Test"
                                            className="w-full max-h-[80vh] max-w-[1200px] object-contain border-2 border-red-500/30"
                                            crossOrigin="anonymous"
                                            onError={(e) => console.error(`Hardcoded img tag failed at https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg`, e)}
                                            onLoad={() => console.log(`Hardcoded img tag loaded at https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg`)}
                                        />
                                    </div>
                                    <button
                                        onClick={downloadDocument}
                                        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                                    >
                                        Download Document
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
                <div className="border-t border-indigo-700/30 pt-6">
                    © {new Date().getFullYear()} Digital Liberia. All rights reserved.
                </div>
            </footer>

            <style jsx global>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes heartbeat {
                    0% { transform: scale(1); }
                    25% { transform: scale(1.1); }
                    50% { transform: scale(1); }
                    75% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                img {
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    max-width: 100% !important;
                    max-height: 100% !important;
                }
            `}</style>
        </div>
    );
}
