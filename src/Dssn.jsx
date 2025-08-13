import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Home", to: "/", color: "bg-blue-500/80" },
    { label: "System", to: "/system", color: "bg-green-500/80" },
    { label: "Digital Liberia", to: "/digital-liberia", color: "bg-purple-500/80" },
    { label: "LibPay", to: "/libpay", color: "bg-yellow-500/80" },
    { label: "Liberian Post", to: "/liberian-post", color: "bg-pink-500/80" }
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
    const [dssn, setDssn] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [customerData, setCustomerData] = useState(null);
    const [error, setError] = useState(null);

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

        try {
            const response = await fetch(`https://api.digitalliberia.com/api/get-dssn?dssn=${encodeURIComponent(cleanedDssn)}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw {
                    title: result.error || `HTTP Error ${response.status}`,
                    message: result.message || 'Request failed',
                    details: `Reference: ${result.metadata?.requestId || 'N/A'}`,
                    timestamp: result.metadata?.timestamp || new Date().toISOString()
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

            setCustomerData(transformedData);

        } catch (err) {
            setError({
                title: err.title || 'Search Error',
                message: err.message || 'Failed to process request',
                details: err.details || `DSSN: ${cleanedDssn}`,
                technical: `Status: ${err.status || 'Unknown'} | ${err.timestamp || new Date().toISOString()}`
            });
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#1a202c', color: 'white', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, background: 'rgba(79, 70, 229, 0.7)', backdropFilter: 'blur(4px)' }}>
                <nav style={{ display: 'flex', justifyContent: 'center', padding: '16px', maxWidth: '1280px', margin: '0 auto' }}>
                    {navLinks.map(link => (
                        <div key={link.to} style={{ padding: '4px 12px', borderRadius: '8px', backgroundColor: link.color }}>
                            <Link
                                to={link.to}
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: location.pathname === link.to ? '#facc15' : 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                {link.label}
                            </Link>
                        </div>
                    ))}
                </nav>
            </header>

            <main style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '16px', paddingRight: '16px' }}>
                <section style={{ maxWidth: '1024px', margin: '0 auto', padding: '32px', background: 'rgba(79, 70, 229, 0.5)', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: 'white' }}>
                        DSSN Verification
                    </h2>
                    <div style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '24px' }}>
                        <p style={{ marginBottom: '16px' }}>
                            Verify a Digital Social Security Number (DSSN) to check its validity and view basic public information.
                            Enter the 15-digit alphanumeric DSSN below.
                        </p>

                        <form onSubmit={handleSearch} style={{ marginBottom: '16px' }}>
                            <div>
                                <label htmlFor="dssn" style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>
                                    Enter DSSN to Verify:
                                </label>
                                <input
                                    type="text"
                                    id="dssn"
                                    value={dssn}
                                    onChange={(e) => setDssn(e.target.value)}
                                    style={{ width: '100%', background: 'rgba(79, 70, 229, 0.4)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '8px', padding: '12px', color: 'white' }}
                                    placeholder="e.g. LIB123456789ABCD"
                                    required
                                    pattern="[A-Za-z0-9]{15}"
                                    title="15-character alphanumeric DSSN"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSearching}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px', borderRadius: '8px', marginTop: '12px',
                                    background: isSearching ? 'rgba(59, 130, 246, 0.5)' : '#3b82f6', color: 'white'
                                }}
                            >
                                {isSearching ? (
                                    <>
                                        <svg style={{ animation: 'spin 1s linear infinite', marginRight: '8px', height: '20px', width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Searching...
                                    </>
                                ) : (
                                    "Search"
                                )}
                            </button>
                        </form>

                        {error && (
                            <div style={{ background: 'rgba(239, 68, 68, 0.4)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '16px' }}>
                                <h4 style={{ fontWeight: 'bold', color: '#f87171' }}>{error.title}</h4>
                                <p style={{ color: '#fecaca' }}>{error.message}</p>
                                {error.details && (
                                    <p style={{ fontSize: '14px', color: 'rgba(254, 202, 202, 0.8)', marginTop: '4px' }}>{error.details}</p>
                                )}
                            </div>
                        )}
                    </div>
                </section>

                {customerData ? (
                    <section style={{ maxWidth: '1024px', margin: '0 auto', padding: '32px' }}>
                        <div style={{ background: '#1f2937', border: '1px solid #374151', borderRadius: '12px', padding: '24px', maxHeight: '80vh', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                                    Search Results for DSSN: {sanitizeHTML(dssn)}
                                </h3>
                                <button
                                    onClick={() => setCustomerData(null)}
                                    style={{ color: '#9ca3af' }}
                                >
                                    <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <h4 style={{ color: '#93c5fd', marginBottom: '12px' }}>Profile Information</h4>
                                {Object.entries(customerData).map(([key, value]) => {
                                    if (typeof value === 'string' && !key.includes('Image') && !key.includes('Metadata')) {
                                        return (
                                            <div key={key} style={{ padding: '8px' }}>
                                                <strong style={{ color: '#93c5fd', fontSize: '14px' }}>{key}:</strong>
                                                <span style={{ marginLeft: '8px', color: 'white', fontSize: '14px' }}>{sanitizeHTML(value)}</span>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                                {customerData["Search Metadata"] && (
                                    <div style={{ padding: '8px' }}>
                                        <strong style={{ color: '#93c5fd', fontSize: '14px' }}>Search Metadata:</strong>
                                        <span style={{ marginLeft: '8px', color: 'white', fontSize: '14px' }}>{sanitizeHTML(customerData["Search Metadata"])}</span>
                                    </div>
                                )}
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <h4 style={{ color: '#93c5fd', marginBottom: '12px' }}>Images</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {customerData["Image"] && (
                                        <div>
                                            <h5 style={{ color: '#93c5fd', marginBottom: '8px' }}>Profile Photo</h5>
                                            <img
                                                src={customerData["Image"]}
                                                alt="Profile Photo"
                                                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    {customerData["Passport Image"] && (
                                        <div>
                                            <h5 style={{ color: '#93c5fd', marginBottom: '8px' }}>Passport</h5>
                                            <img
                                                src={customerData["Passport Image"]}
                                                alt="Passport"
                                                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    {customerData["Birth Certificate Image"] && (
                                        <div>
                                            <h5 style={{ color: '#93c5fd', marginBottom: '8px' }}>Birth Certificate</h5>
                                            <img
                                                src={customerData["Birth Certificate Image"]}
                                                alt="Birth Certificate"
                                                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    {customerData["Drivers License Image"] && (
                                        <div>
                                            <h5 style={{ color: '#93c5fd', marginBottom: '8px' }}>Driver's License</h5>
                                            <img
                                                src={customerData["Drivers License Image"]}
                                                alt="Driver's License"
                                                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    {customerData["National Id Image"] && (
                                        <div>
                                            <h5 style={{ color: '#93c5fd', marginBottom: '8px' }}>National ID</h5>
                                            <img
                                                src={customerData["National Id Image"]}
                                                alt="National ID"
                                                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '2px solid blue' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section style={{ maxWidth: '1024px', margin: '0 auto', padding: '32px' }}>
                        <div style={{ background: '#1f2937', border: '1px solid #374151', borderRadius: '12px', padding: '24px' }}>
                            <p style={{ color: 'white' }}>No results yet. Perform a search to view data.</p>
                        </div>
                    </section>
                )}
            </main>

            <footer style={{ padding: '24px', textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                <div style={{ borderTop: '1px solid rgba(99, 102, 241, 0.3)', paddingTop: '24px' }}>
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
