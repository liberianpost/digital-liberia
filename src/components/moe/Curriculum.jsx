import React, { useState } from "react";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample curriculum data structure
  const curriculumData = {
    overview: `The Liberian National Curriculum, developed by the Ministry of Education, 
    provides a comprehensive educational framework that prepares students for academic excellence, 
    personal development, and national progress. Our curriculum emphasizes critical thinking, 
    creativity, and practical skills aligned with 21st-century requirements while maintaining 
    strong foundations in core subjects and Liberian cultural values.`,
    
    grades: {
      "Grades 1-6": {
        title: "Elementary Education Foundation",
        color: "from-blue-500 to-blue-700"
      },
      "Grades 7-9": {
        title: "Junior High Development",
        color: "from-green-500 to-green-700"
      },
      "Grades 10-12": {
        title: "Senior High Specialization",
        color: "from-purple-500 to-purple-700"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Ministry of Education Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <img 
                src="/logos/moe.png" 
                alt="Ministry of Education Logo" 
                className="w-20 h-20 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-blue-800">
                  Ministry of Education
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  Republic of Liberia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Ministry of Education */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3">
            About the Ministry of Education
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The Ministry of Education of the Republic of Liberia is committed to providing 
              quality education that empowers all Liberian citizens to reach their full potential. 
              Our mission is to develop an educated, skilled, and productive population that 
              contributes to national development and global competitiveness.
            </p>
            <p>
              The Liberian education system follows a 6-3-3 structure: six years of primary education, 
              three years of junior high school, and three years of senior high school. This structure 
              is designed to provide a comprehensive education that prepares students for higher education, 
              vocational training, or direct entry into the workforce.
            </p>
            <p>
              The national curriculum emphasizes academic excellence while incorporating Liberian 
              cultural heritage, civic responsibility, and practical life skills. We are committed 
              to ensuring equitable access to quality education across all counties and communities.
            </p>
          </div>
        </div>

        {/* Curriculum Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Liberian National Curriculum Framework
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive educational framework designed to develop well-rounded, 
            critically-thinking citizens prepared for the challenges of the modern world.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-xl p-1 shadow-lg flex">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "overview"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("grades")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "grades"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Grade Levels
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === "overview" && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 transform transition-all duration-500 hover:shadow-2xl">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{curriculumData.overview}</p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Vision</h3>
                  <p>To create a world-class education system that empowers all Liberian students to reach their full potential and contribute to national development.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Mission</h3>
                  <p>To provide equitable access to quality education that develops knowledgeable, skilled, and ethical citizens for a prosperous Liberia.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Core Values</h3>
                  <p>Excellence, Equity, Innovation, Integrity, and Patriotism - guiding principles for educational development in Liberia.</p>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Curriculum Philosophy</h3>
                <p>
                  The Liberian National Curriculum is built on the belief that every child deserves 
                  quality education that is relevant, engaging, and responsive to both local needs 
                  and global standards. We emphasize:
                </p>
                <ul className="mt-3 space-y-2">
                  <li>• Student-centered learning approaches</li>
                  <li>• Integration of technology in education</li>
                  <li>• Preservation of Liberian cultural heritage</li>
                  <li>• Development of critical thinking and problem-solving skills</li>
                  <li>• Preparation for both higher education and vocational opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "grades" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {Object.entries(curriculumData.grades).map(([grade, data]) => (
              <Link 
                to={`/moe/curriculum/${grade.toLowerCase().replace(/\s+/g, '-')}`} 
                key={grade}
                className="block transform transition-all duration-300 hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${data.color} rounded-2xl shadow-xl overflow-hidden h-full`}>
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{grade}</h3>
                    <h4 className="text-xl font-semibold mb-3">{data.title}</h4>
                    
                    <div className="mt-6 pt-4 border-t border-white border-opacity-20">
                      <span className="inline-flex items-center font-medium">
                        Explore Curriculum
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Ministry Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3">
            Ministry Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Address</h3>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="text-gray-700">
                    MoE Building, Ministerial Complex<br />
                    Congo Town, Montserrado County<br />
                    Liberia
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Office Hours</h3>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <p className="text-gray-700">
                    <strong>Mon–Fri:</strong> 9:00 AM–5:00 PM<br />
                    <strong>Saturday & Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Email Contacts</h3>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p className="text-gray-700">
                    <strong>Primary:</strong> contact@moe.gov.lr<br />
                    <strong>Alternative:</strong> contact@moeliberia.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-600 text-sm bg-white rounded-xl p-6 shadow-md">
          <p className="font-semibold mb-2">Ministry of Education - Republic of Liberia</p>
          <p>Committed to providing quality education for all Liberian citizens</p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
