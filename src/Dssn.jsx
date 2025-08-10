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
    "/logos/liberianpost.png", "/logos/digital.png", "/logos/libmusic.png",
    "/logos/libconnectsit.png", "/logos/libpaysit.png", "/logos/seal of liberia.png", "/logos/liberia.png"
];

const backgroundImages = [
    "/backgrounds/bg1.jpg", "/backgrounds/bg2.jpg", "/backgrounds/bg3.jpg", "/backgrounds/bg4.jpg", "/backgrounds/bg5.jpg"
];

const sanitizeHTML = (str) => {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
};

const getFileType = (url) => {
    if (!url || typeof url !== 'string') return 'unknown';
    const extension = url.split('.').pop().toLowerCase().split('?')[0];
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'].includes(extension)) {
        return 'image';
    }
    if (extension === 'pdf') {
        return 'pdf';
    }
    return 'other';
};

const ImageLoader = ({ src, alt, className, onClick }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!src) {
            setLoading(false);
            setError(true);
            return;
        }

        setLoading(true);
        setError(false);
        const img = new Image();
        img.src = src;
        img.onload = () => setLoading(false);
        img.onerror = () => {
            setError(true);
            setLoading(false);
        };

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src]);

    if (error) {
        return (
            <div className={`${className} bg-gray-800/50 flex items-center justify-center rounded-lg text-center`}>
                <span className="text-red-400 text-sm">Image not available</span>
            </div>
        );
    }

    if (loading) {
        return (
            <div className={`${className} bg-gray-800/50 flex items-center justify-center rounded-lg`}>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <img src={src} alt={alt} className={className} onClick={onClick} crossOrigin="anonymous" onError={() => setError(true)} />
    );
};

const DocumentThumbnail = ({ url, name, onOpen }) => {
    if (!url) {
        return (
            <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm h-full flex flex-col justify-between">
                <h5 className="text-blue-300 mb-2 font-semibold">{name}</h5>
                <div className="flex-grow flex items-center justify-center bg-gray-800/50 rounded text-gray-400 text-sm">
                    Not Provided
                </div>
            </div>
        );
    }

    const fileType = getFileType(url);

    return (
        <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm h-full flex flex-col">
            <h5 className="text-blue-300 mb-2 font-semibold">{name}</h5>
            <div className="flex-grow cursor-pointer" onClick={() => onOpen(url)}>
                {fileType === 'image' ? (
                    <ImageLoader src={url} alt={name} className="w-full h-48 rounded border border-indigo-700/30 object-cover" />
                ) : (
                    <div className="w-full h-48 rounded border border-indigo-700/30 bg-gray-800/50 flex flex-col items-center justify-center text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400 mb-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 11-2 0V4H6v12a1 1 0 11-2 0V4zm4 11a1 1 0 100-2h4a1 1 0 100 2H8z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white font-bold">PDF Document</span>
                        <span className="text-xs text-white/80 mt-1 break-all">{url.split('/').pop()}</span>
                    </div>
                )}
                <div className="text-center text-xs text-white/80 mt-2">Click to view</div>
            </div>
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
        const bgInterval = setInterval(() => setBgIndex(prev => (prev + 1) % backgroundImages.length), 5000);
        return () => clearInterval(bgInterval);
    }, []);

    useEffect(() => {
        const logoInterval = setInterval(() => setActiveLogo(prev => (prev + 1) % logos.length), 600);
        return () => clearInterval(logoInterval);
    }, []);

   const handleSearch = async (e) => {
    e.preventDefault();
    const cleanedDssn = dssn.trim().toUpperCase();

    if (!/^[A-Za-z0-9]{15}$/.test(cleanedDssn)) {
        setError({
            title: "Invalid DSSN Format", 
            message: "Must be exactly 15 alphanumeric characters",
            details: `Received: ${cleanedDssn} (${cleanedDssn.length} chars)`
        });
        return;
    }

    setIsSearching(true);
    setError(null);
    setCustomerData(null);

    try {
        const apiUrl = `https://api.digitalliberia.com/api/get-dssn?dssn=${encodeURIComponent(cleanedDssn)}`;
        
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            mode: 'cors'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success) {
            throw {
                title: result.error || 'Request failed',
                message: result.message || 'No data returned',
                details: `DSSN: ${cleanedDssn}`
            };
        }

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
            "Number of Children": result.data.numberOfChildren,
            "Passport Number": result.data.passportNumber || 'Not available',
            "Birth Certificate": result.data.birthCertificate || 'Not available',
            "Driver's License": result.data.driverLicense || 'Not available',
            "Profile Image": result.data.images?.profile || null,
            "Passport Image": result.data.images?.passport || null,
            "Birth Certificate Image": result.data.images?.birthCertificate || null,
            "Drivers License Image": result.data.images?.driverLicense || null,
            "National ID Image": result.data.images?.nationalId || null,
            "Search Metadata": result.metadata ? `Request ID: ${result.metadata.requestId} | ${new Date(result.metadata.timestamp).toLocaleString()}` : 'No metadata'
        };

        setCustomerData(transformedData);
        setShowInfoModal(true);

    } catch (err) {
        console.error('Search error:', err);
        setError({
            title: err.title || 'Search Error', 
            message: err.message || 'Failed to process request',
            details: err.details || `DSSN: ${cleanedDssn}`,
            technical: err.stack || `Status: ${err.status || 'Unknown'}`
        });
    } finally {
        setIsSearching(false);
    }
};

    const openDocumentModal = (url) => {
        if (!url) return;
        setCurrentDocumentUrl(url);
        setShowDocumentModal(true);
    };

    const closeDocumentModal = () => {
        setShowDocumentModal(false);
        setCurrentDocumentUrl("");
    };

    const downloadDocument = () => {
        if (!currentDocumentUrl) return;
        const link = document.createElement('a');
        link.href = currentDocumentUrl;
        link.target = '_blank';
        link.download = currentDocumentUrl.split('/').pop() || 'document';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative min-h-screen w-full bg-gray-900 text-white font-inter overflow-x-hidden">
            {/* Background elements */}
            <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blue-900/90 to-indigo-900/90" />
            <div className="fixed inset-0 -z-40 bg-white/10 backdrop-blur-[3px] pointer-events-none" />
            <div className="fixed inset-0 -z-30 bg-[url('/noise.png')] opacity-10 pointer-events-none" />
            <div className="fixed inset-0 -z-20 bg-cover bg-center transition-opacity duration-1000 mix-blend-soft-light"
                style={{ backgroundImage: `url(${backgroundImages[bgIndex]})`, opacity: 0.15 }} />

            {/* Logo display */}
            <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
                    {logos.map((logo, index) => (
                        <div key={index}
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${index === activeLogo ? "opacity-100" : "opacity-0"}`}>
                            <img src={logo} alt={`Logo ${index}`} className="max-w-full max-h-full object-contain" />
                            <div className="absolute inset-0 bg-black/5" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50">
                <div className="bg-indigo-900/70 backdrop-blur-md border-b border-indigo-700/30">
                    <div className="flex items-center justify-center px-4 py-4 max-w-7xl mx-auto">
                        <nav className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center">
                            {navLinks.map(link => (
                                <div key={link.to} className={`flex-shrink-0 ${link.color} px-3 py-1 rounded-lg`}>
                                    <Link to={link.to}
                                        className={`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${location.pathname === link.to ? "text-yellow-300" : "text-white hover:text-blue-200"}`}>
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>
                    <div className="w-full bg-gradient-to-b from-indigo-900/50 to-transparent overflow-x-auto">
                        <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
                            {logos.map((logo, index) => (
                                <div key={index}
                                    className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${index === activeLogo ? "scale-110 bg-white shadow-lg" : "scale-100 bg-white/90"}`}
                                    style={{ animation: index === activeLogo ? 'heartbeat 600ms ease-in-out' : 'none' }}>
                                    <img src={logo} alt={`Logo ${index}`} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
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
                                        <label htmlFor="dssn" className="block text-sm font-medium mb-2">Enter DSSN to Verify:</label>
                                        <input 
                                            type="text" 
                                            id="dssn" 
                                            value={dssn} 
                                            onChange={(e) => setDssn(e.target.value)}
                                            className="w-full bg-indigo-900/40 border border-indigo-700/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm text-white placeholder-indigo-400/70"
                                            placeholder="e.g. PYGMNL94LR09Z24" 
                                            required 
                                            pattern="[A-Za-z0-9]{15}" 
                                            title="15-character alphanumeric DSSN" 
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={isSearching}
                                        className={`flex items-center justify-center px-6 py-3 rounded-lg border transition-all ${isSearching ? "bg-blue-700/50 border-blue-600/30 cursor-not-allowed" : "bg-gradient-to-r from-blue-500/80 to-indigo-600/80 border-blue-400/30 hover:from-blue-600/80 hover:to-indigo-700/80 hover:shadow-lg"}`}
                                    >
                                        {isSearching ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Searching...
                                            </>
                                        ) : "Search"}
                                    </button>
                                </form>
                                {error && (
                                    <div className="bg-red-900/40 border border-red-700/30 rounded-lg p-4 backdrop-blur-sm">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-red-300">{error.title}</h4>
                                                <p className="text-red-200">{error.message}</p>
                                                {error.details && <p className="text-sm text-red-200/80 mt-1">{error.details}</p>}
                                                {error.technical && <p className="text-xs text-red-200/60 mt-2">{error.technical}</p>}
                                            </div>
                                            <button onClick={() => console.error('Full Error:', error)} className="text-xs text-red-300/70 hover:text-red-300 px-2 py-1 rounded">Details</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Info Modal */}
            {showInfoModal && customerData && (
                <div id="dssnInfo" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-gradient-to-br from-indigo-900/90 to-blue-900/90 border border-indigo-700/30 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4 pb-4 border-b border-indigo-700/30">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        Search Results for DSSN: {sanitizeHTML(dssn)}
                                    </h3>
                                    {customerData["Search Metadata"] && (
                                        <p className="text-xs text-blue-300/70 mt-1">{customerData["Search Metadata"]}</p>
                                    )}
                                </div>
                                <button 
                                    onClick={() => setShowInfoModal(false)} 
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                                <div className="lg:col-span-1 bg-indigo-900/40 p-4 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                    <h4 className="text-blue-300 mb-3 font-semibold text-lg">Profile Photo</h4>
                                    <ImageLoader 
                                        src={customerData["Profile Image"]} 
                                        alt="Profile Photo" 
                                        className="w-full h-64 rounded-lg border-2 border-blue-500/30 object-cover cursor-pointer" 
                                        onClick={() => openDocumentModal(customerData["Profile Image"])} 
                                    />
                                </div>
                                <div className="lg:col-span-2 bg-indigo-900/40 p-4 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                                    <h4 className="text-blue-300 mb-3 font-semibold text-lg">Profile Information</h4>
                                    <div className="space-y-2 text-sm max-h-[250px] overflow-y-auto pr-2">
                                        {Object.entries(customerData).map(([key, value]) => {
                                            if (typeof value === 'string' || typeof value === 'number') {
                                                if (!key.includes('Image') && !key.includes('Metadata')) {
                                                    return (
                                                        <div key={key} className="bg-indigo-800/20 p-2 rounded border border-indigo-700/20 flex justify-between">
                                                            <strong className="text-blue-300/80 font-medium">{key}:</strong>
                                                            <span className="ml-2 text-white/90 text-right">{sanitizeHTML(value)}</span>
                                                        </div>
                                                    );
                                                }
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-blue-300 mb-3 border-b border-indigo-700/30 pb-2 font-semibold text-lg">Associated Documents</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <DocumentThumbnail 
                                        url={customerData["Passport Image"]} 
                                        name="Passport" 
                                        onOpen={openDocumentModal} 
                                    />
                                    <DocumentThumbnail 
                                        url={customerData["Birth Certificate Image"]} 
                                        name="Birth Certificate" 
                                        onOpen={openDocumentModal} 
                                    />
                                    <DocumentThumbnail 
                                        url={customerData["Drivers License Image"]} 
                                        name="Driver's License" 
                                        onOpen={openDocumentModal} 
                                    />
                                    <DocumentThumbnail 
                                        url={customerData["National ID Image"]} 
                                        name="National ID" 
                                        onOpen={openDocumentModal} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Document Modal */}
            {showDocumentModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeDocumentModal}>
                    <div className="bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center p-4 border-b border-gray-700">
                            <h4 className="font-bold text-white">Document Viewer</h4>
                            <div>
                                <button 
                                    onClick={downloadDocument} 
                                    className="text-sm text-blue-400 hover:text-blue-300 mr-4"
                                >
                                    Download
                                </button>
                                <button 
                                    onClick={closeDocumentModal} 
                                    className="text-gray-400 hover:text-white"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                        <div className="p-4 flex-grow">
                            {getFileType(currentDocumentUrl) === 'image' && (
                                <img 
                                    src={currentDocumentUrl} 
                                    alt="Document" 
                                    className="max-w-full max-h-full mx-auto object-contain" 
                                />
                            )}
                            {getFileType(currentDocumentUrl) === 'pdf' && (
                                <iframe 
                                    src={currentDocumentUrl} 
                                    title="Document" 
                                    className="w-full h-[75vh] border-0"
                                />
                            )}
                            {getFileType(currentDocumentUrl) === 'other' && (
                                <p className="text-center text-white">Cannot display this file type. Please download to view.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
