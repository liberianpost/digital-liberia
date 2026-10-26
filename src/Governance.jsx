import React, { useState } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const leadershipTeam = [
  {
    name: "Sullivan T. Doeblah",
    title: "Chairman of the Board",
    image: "/logos/PHOTO-2025-11-28-16-48-33.png",
    highlights: [
      "Technology Entrepreneur & Organizational Builder: Founder of Technical Solutions Liberia (TSL), Inc., Founder of the Environmental & Conserve Health Organization (ECHO), and Co-Founder of Ducor Tech Haven, with demonstrated success in building and leading organizations that leverage technology, innovation, and strategic partnerships to drive sustainable impact.",
      "ICT & Digital Transformation Leader: Accomplished technology professional with extensive experience in network infrastructure, systems administration, IT operations, technical leadership, and digital transformation initiatives across Liberia's corporate and telecommunications sectors.",
      "Strategic Innovator in Governance & Public Sector Modernization: Passionate advocate for digital governance, automation, and data-driven solutions, with experience supporting initiatives that strengthen institutional efficiency, improve service delivery, enhance transparency, and modernize public-sector operations.",
      "Community Impact & Sustainability Champion: Recognized for leadership in environmental stewardship, civic engagement, and community development, combining technology, stakeholder collaboration, and social innovation to advance sustainable development and long-term resilience within Liberia and the broader region.",
    ],
    responsibilities: [
      "Board coordination and leadership alignment",
      "Strategic oversight of infrastructure development",
      "Mobilizing execution capacity across board members",
      "Strengthening government and institutional relationships",
      "Ensuring accountability across company leadership",
      "Supporting major strategic initiatives",
    ],
    note: "The Chairman is not a ceremonial role — it is an active leadership function focused on driving progress and execution discipline.",
  },
  {
    name: "Izetta Jones Howe",
    title: "Co-Chairperson of the Board",
    image: "/logos/Izetta.jpg",
    highlights: [
      "LLB Law",
      "Trailblazing legal and student leader: First female President of the Federation of African Law Students and Former President of the Law Students Association at the Louis Arthur Grimes School of Law, recognized for transformational leadership and advocacy.",
      "Experienced executive and business leader: CEO of Fidelity Holdings Inc. and Special Project Coordinator at NASSCORP, with expertise in project management, strategic planning, procurement, public financial management, and investment portfolio management.",
      "Highly qualified and internationally recognized professional: Holds an M.Sc. in Project Management (Distinction) from Coventry University, with multiple professional certifications from Liberia, the U.S., Germany, and the UK, and is an alumnus of the International Visitor Leadership Program.",
    ],
    responsibilities: [
      "Co-leading board execution strategy",
      "Strengthening institutional partnerships",
      "Supporting governance structure development",
      "Ensuring cross-sector coordination",
      "Assisting in policy-level and institutional engagement",
      "Supporting organizational accountability",
    ],
    note: "The Co-Chair plays an active role in ensuring the board remains operationally engaged and not symbolic.",
  },
  {
    name: "Emmanuel Paygar Jr.",
    title: "Founder & Chief Executive Officer (CEO)",
    image: "/logos/B61B5444-5CDE-48BA-A14D-3F08DD2DDF8F.JPG",
    highlights: [
      "FinTech Entrepreneur & Founder: Founder and owner of Solid, focused on building innovative financial technology solutions that advance digital payments, financial access, and technology-driven economic growth.",
      "Full-Stack Software Developer & Systems Builder: Experienced software developer with expertise across frontend development, backend engineering, cloud infrastructure, and scalable system architecture, with hands-on experience building end-to-end digital platforms and products.",
      "Data Analytics & Data Architecture: Skilled in analyzing and interpreting data from both relational and non-relational database environments, utilizing technologies such as MySQL, PostgreSQL, SQL Server, MongoDB, and Redis to drive data-informed decision-making, business intelligence, product development, risk assessment, and organizational growth.",
      "Investor & Financial Markets Trader: Active investor and trader in the financial markets with experience in market analysis, capital allocation, risk management, and identifying growth opportunities across global financial assets.",
    ],
    responsibilities: [
      "Overall vision and strategic direction",
      "Product ecosystem development",
      "Investor relations and capital strategy",
      "National government engagement",
      "Executive coordination",
      "Final decision authority on company direction",
      "Long-term platform architecture",
    ],
    note: "The CEO serves as the central integration point across all business units and governance structures.",
  },
  {
    name: "Winston B. Borbor Jr.",
    title: "Chief Operating Officer (COO)",
    icon: "⚙️",
    image: null,
    responsibilities: [
      "Daily operational execution",
      "Merchant operations and onboarding systems",
      "Logistics and delivery operations",
      "Internal coordination between departments",
      "Execution of expansion strategy",
      "Operational scaling across counties",
      "Performance tracking and delivery KPIs",
    ],
    note: "The COO ensures that strategy is translated into execution across all units.",
  },
  {
    name: "Adolphus D. Dopoh",
    title: "Chief Technology Officer (CTO)",
    image: "/logos/WhatsApp Image 2025-09-22 at 12.54.32.jpeg",
    highlights: [
      "Telecommunications and Technology Leader: Experienced technology and telecommunications professional with leadership in core network engineering, IT infrastructure, cybersecurity, systems security, and digital transformation, currently serving with the Liberia Telecommunication Corporation.",
      "Highly qualified multidisciplinary professional: Holds advanced academic and technical qualifications in law, business administration, computer science engineering, IT infrastructure, cybersecurity, procurement, and supply chain management, with specialized training across Liberia and India.",
      "Strategic leader, researcher, and educator: Proven experience across executive leadership, academia, consulting, and institutional management, with published research in technology, telecommunications, supply chain systems, and sustainable development, alongside leadership roles in higher education and national organizations.",
    ],
    responsibilities: [
      "Platform architecture and system design",
      "Backend and frontend engineering oversight",
      "LibPay infrastructure stability",
      "Cybersecurity systems and protection",
      "API and integration development",
      "Super App technical development",
      "System scalability and performance",
      "DevOps and deployment pipelines",
    ],
    note: "The CTO owns the full technical backbone of Digital Liberia.",
  },
];

export default function Governance() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/8 via-transparent to-blue-500/8 z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85 z-0"></div>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 md:pt-48 pb-12 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-sm font-bold tracking-wide">✦ EXECUTIVE GOVERNANCE ✦</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">Functional Governance</span>
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">For National Infrastructure</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Digital Liberia Inc. operates as a multi-sector digital infrastructure company. Its leadership structure is designed to function as both an executive management system and an active operational governance system — ensuring leadership is directly involved in execution, coordination, accountability, and national-scale delivery.
          </p>
        </div>
      </section>

      {/* Governance Model */}
      <section className="relative py-8 md:py-12 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30">
              <div className="text-4xl mb-4 opacity-80">🏛️</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">Functional Board of Directors</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Digital Liberia does not operate with a passive advisory board. Instead, it uses a Functional Board Model, designed to actively participate in execution oversight, strategic acceleration, and operational alignment.
              </p>
              <p className="text-white/60 leading-relaxed">
                This ensures that leadership remains engaged in building, not just reviewing. Unlike traditional boards that meet periodically, the Digital Liberia Board is designed as a working governance system.
              </p>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30">
              <div className="text-4xl mb-4 opacity-80">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">Execution-Oriented Model</h3>
              <p className="text-white/60 leading-relaxed">
                Because the company spans fintech, government systems, identity infrastructure, logistics, commerce, and national digital services, Digital Liberia adopts a functional governance model where leadership roles are tied directly to operational outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-12 md:py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">Leadership & Executive Team</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              An active, execution-driven leadership structure focused on national-scale delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30 cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-5 md:mb-7 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500/10 to-blue-500/10 flex items-center justify-center group-hover:scale-105 transition-transform border-2 border-white/20 shadow-xl">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-5xl md:text-6xl opacity-80">{member.icon}</div>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white text-center">{member.name}</h3>
                  <p className="text-red-400 text-base md:text-lg font-semibold mb-5 text-center">{member.title}</p>

                  <div className={`overflow-y-auto transition-all duration-500 ${expandedCard === index ? "max-h-[1200px]" : "max-h-0"}`}>
                    <div className="pt-5 border-t border-white/10 mt-2">
                      {member.highlights && (
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold text-white/60 mb-3">Professional Highlights:</h4>
                          <ul className="space-y-3">
                            {member.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-white/50 text-sm flex items-start gap-2">
                                <span className="text-blue-400 mt-1 flex-shrink-0">✦</span>
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <h4 className="text-sm font-semibold text-white/60 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-3">
                        {member.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-white/50 text-sm flex items-start gap-2">
                            <span className="text-red-400 mt-1 flex-shrink-0">▹</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                      {member.note && (
                        <div className="mt-5 p-3 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-lg border border-red-500/20">
                          <p className="text-white/60 text-xs italic leading-relaxed">📌 {member.note}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <span className="text-xs text-white/30 group-hover:text-red-400 transition-colors">
                      {expandedCard === index ? "▲ Click to collapse" : "▼ Click to expand"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
