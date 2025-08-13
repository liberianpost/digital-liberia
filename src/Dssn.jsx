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

export default function Dssn() {
    const location = useLocation();
    const [activeLogo, setActiveLogo] = useState(0);
    const [bgIndex, setBgIndex] = useState(0);
    const [dssn, setDssn] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [customerData, setCustomerData] = useState(null);
    const [error, setError] = useState(null);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        console.log('Component mounted');
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
            alert(`Search completed for DSSN: ${cleanedDssn}. Displaying results.`);
            setCustomerData(transformedData);
            setShowResults(true);

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

    const debugRender = () => {
        console.log('Debug Render button clicked');
        console.log('Current customerData:', customerData);
        alert('Debug Render: Check console for customerData');
        setShowResults(prev => !prev); // Force re-render
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
                                <button
                                    onClick={() => {
                                        console.log('Debug Image button clicked');
                                        alert('Attempting to load test image');
                                    }}
                                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white mb-4"
                                >
                                    Debug Image
                                </button>
                                <div>
                                    <img
                                        src="https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg"
                                        alt="Debug Test Image"
                                        style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid red' }}
                                        loading="lazy"
                                        onLoad={() => {
                                            console.log('Debug Test Image loaded successfully at https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg');
                                            alert('Debug Test Image loaded successfully');
                                        }}
                                        onError={(e) => {
                                            console.error('Debug Test Image failed to load at https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg', e);
                                            alert('Debug Test Image failed to load');
                                        }}
                                    />
                                </div>
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

                {showResults && customerData && (
                    <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto">
                        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 max-h-[80vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        Search Results for DSSN: {sanitizeHTML(dssn)}
                                    </h3>
                                    {customerData["Search Metadata"] && (
                                        <p className="text-xs text-gray-400 mt-1">
                                            {customerData["Search Metadata"]}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => setShowResults(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <button
                                onClick={debugRender}
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white mb-4"
                            >
                                Debug Render
                            </button>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-blue-300 mb-3">Profile Information</h4>
                                    {Object.entries(customerData).map(([key, value]) => {
                                        if (typeof value === 'string' && !key.includes('Image') && !key.includes('Metadata')) {
                                            return (
                                                <div key={key} className="p-2">
                                                    <strong className="text-blue-300 text-sm">{key}:</strong>
                                                    <span className="ml-2 text-white text-sm">{sanitizeHTML(value)}</span>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>

                                <div>
                                    <h4 className="text-blue-300 mb-3">Images</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="text-blue-300 mb-2">Test Image</h5>
                                            <img
                                                src="https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg"
                                                alt="Test Image"
                                                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid red' }}
                                                loading="lazy"
                                                onLoad={() => {
                                                    console.log('Test Image loaded successfully at https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg');
                                                    alert('Test Image loaded successfully');
                                                }}
                                                onError={(e) => {
                                                    console.error('Test Image failed to load at https://storage.googleapis.com/system-liberianpost/ceo%20passport.jpg', e);
                                                    alert('Test Image failed to load');
                                                }}
                                            />
                                        </div>

                                        {customerData["Image"] && (
                                            <div>
                                                <h5 className="text-blue-300 mb-2">Profile Photo</h5>
                                                {customerData["Image"].toLowerCase().endsWith('.pdf') ? (
                                                    <a
                                                        href={customerData["Image"]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-[150px] h-[150px] bg-gray-800 flex items-center justify-center text-white"
                                                    >
                                                        PDF Profile (Click to view)
                                                    </a>
                                                ) : (
                                                    <img
                                                        src={customerData["Image"]}
                                                        alt="Profile Photo"
                                                        style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                        loading="lazy"
                                                        onLoad={() => {
                                                            console.log(`Profile Photo loaded successfully at ${customerData["Image"]}`);
                                                            alert(`Profile Photo loaded at ${customerData["Image"]}`);
                                                        }}
                                                        onError={(e) => {
                                                            console.error(`Profile Photo failed to load at ${customerData["Image"]}`, e);
                                                            alert(`Profile Photo failed to load at ${customerData["Image"]}`);
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {customerData["Passport Image"] && (
                                            <div>
                                                <h5 className="text-blue-300 mb-2">Passport</h5>
                                                {customerData["Passport Image"].toLowerCase().endsWith('.pdf') ? (
                                                    <a
                                                        href={customerData["Passport Image"]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-[150px] h-[150px] bg-gray-800 flex items-center justify-center text-white"
                                                    >
                                                        PDF Passport
                                                    </a>
                                                ) : (
                                                    <img
                                                        src={customerData["Passport Image"]}
                                                        alt="Passport"
                                                        style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                        loading="lazy"
                                                        onLoad={() => {
                                                            console.log(`Passport loaded successfully at ${customerData["Passport Image"]}`);
                                                            alert(`Passport loaded at ${customerData["Passport Image"]}`);
                                                        }}
                                                        onError={(e) => {
                                                            console.error(`Passport failed to load at ${customerData["Passport Image"]}`, e);
                                                            alert(`Passport failed to load at ${customerData["Passport Image"]}`);
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {customerData["Birth Certificate Image"] && (
                                            <div>
                                                <h5 className="text-blue-300 mb-2">Birth Certificate</h5>
                                                {customerData["Birth Certificate Image"].toLowerCase().endsWith('.pdf') ? (
                                                    <a
                                                        href={customerData["Birth Certificate Image"]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-[150px] h-[150px] bg-gray-800 flex items-center justify-center text-white"
                                                    >
                                                        PDF Birth Certificate
                                                    </a>
                                                ) : (
                                                    <img
                                                        src={customerData["Birth Certificate Image"]}
                                                        alt="Birth Certificate"
                                                        style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                        loading="lazy"
                                                        onLoad={() => {
                                                            console.log(`Birth Certificate loaded successfully at ${customerData["Birth Certificate Image"]}`);
                                                            alert(`Birth Certificate loaded at ${customerData["Birth Certificate Image"]}`);
                                                        }}
                                                        onError={(e) => {
                                                            console.error(`Birth Certificate failed to load at ${customerData["Birth Certificate Image"]}`, e);
                                                            alert(`Birth Certificate failed to load at ${customerData["Birth Certificate Image"]}`);
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {customerData["Drivers License Image"] && (
                                            <div>
                                                <h5 className="text-blue-300 mb-2">Driver's License</h5>
                                                {customerData["Drivers License Image"].toLowerCase().endsWith('.pdf') ? (
                                                    <a
                                                        href={customerData["Drivers License Image"]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-[150px] h-[150px] bg-gray-800 flex items-center justify-center text-white"
                                                    >
                                                        PDF Driver's License
                                                    </a>
                                                ) : (
                                                    <img
                                                        src={customerData["Drivers License Image"]}
                                                        alt="Driver's License"
                                                        style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                        loading="lazy"
                                                        onLoad={() => {
                                                            console.log(`Driver's License loaded successfully at ${customerData["Drivers License Image"]}`);
                                                            alert(`Driver's License loaded at ${customerData["Drivers License Image"]}`);
                                                        }}
                                                        onError={(e) => {
                                                            console.error(`Driver's License failed to load at ${customerData["Drivers License Image"]}`, e);
                                                            alert(`Driver's License failed to load at ${customerData["Drivers License Image"]}`);
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {customerData["National Id Image"] && (
                                            <div>
                                                <h5 className="text-blue-300 mb-2">National ID</h5>
                                                {customerData["National Id Image"].toLowerCase().endsWith('.pdf') ? (
                                                    <a
                                                        href={customerData["National Id Image"]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-[150px] h-[150px] bg-gray-800 flex items-center justify-center text-white"
                                                    >
                                                        PDF National ID
                                                    </a>
                                                ) : (
                                                    <img
                                                        src={customerData["National Id Image"]}
                                                        alt="National ID"
                                                        style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                        loading="lazy"
                                                        onLoad={() => {
                                                            console.log(`National ID loaded successfully at ${customerData["National Id Image"]}`);
                                                            alert(`National ID loaded at ${customerData["National Id Image"]}`);
                                                        }}
                                                        onError={(e) => {
                                                            console.error(`National ID failed to load at ${customerData["National Id Image"]}`, e);
                                                            alert(`National ID failed to load at ${customerData["National Id Image"]}`);
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-blue-300 mb-3">Debug URLs</h4>
                                    <div className="text-sm text-white">
                                        <p>Profile Photo: {customerData["Image"] || 'None'}</p>
                                        <p>Passport: {customerData["Passport Image"] || 'None'}</p>
                                        <p>Birth Certificate: {customerData["Birth Certificate Image"] || 'None'}</p>
                                        <p>Driver's License: {customerData["Drivers License Image"] || 'None'}</p>
                                        <p>National ID: {customerData["National Id Image"] || 'None'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
                <div className="border-t border-indigo-700/30 pt-6">
                    © {new Date().getFullYear()} Digital Liberia. All rights reserved.
                </div>
            </footer>

            <style jsx global>{`
                img {
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
            `}</style>
        </div>
    );
}
