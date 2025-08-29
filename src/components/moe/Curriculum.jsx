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
        description: "Focus on literacy, numeracy, and foundational knowledge across subjects with emphasis on reading comprehension and basic mathematics",
        subjects: ["Language Arts (English)", "Mathematics", "General Science", "Social Studies", "Creative Arts", "Physical Education"],
        color: "from-blue-500 to-blue-700"
      },
      "Grades 7-9": {
        title: "Junior High Development",
        description: "Building on foundations with more specialized subject exploration and introduction to life skills",
        subjects: ["English Literature", "Algebra & Geometry", "Integrated Science", "Civics & History", "Computer Literacy", "Agricultural Science"],
        color: "from-green-500 to-green-700"
      },
      "Grades 10-12": {
        title: "Senior High Specialization",
        description: "College preparatory tracks with subject specialization options and career guidance",
        subjects: ["Advanced Mathematics", "Physics", "Chemistry", "Economics", "Biology", "Geography", "Foreign Languages"],
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
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <p className="text-blue-800 font-semibold text-sm">
                Quality Education for National Development
              </p>
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
            <button
              onClick={() => setActiveTab("resources")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "resources"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Resources
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
                to={`/curriculum/${grade.toLowerCase().replace(/\s+/g, '-')}`} 
                key={grade}
                className="block transform transition-all duration-300 hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${data.color} rounded-2xl shadow-xl overflow-hidden h-full`}>
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{grade}</h3>
                    <h4 className="text-xl font-semibold mb-3">{data.title}</h4>
                    <p className="mb-4 opacity-90">{data.description}</p>
                    
                    <div className="mt-4">
                      <h5 className="font-semibold mb-2">Core Subjects:</h5>
                      <ul className="space-y-1">
                        {data.subjects.map((subject, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
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

        {activeTab === "resources" && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Curriculum Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Teacher Guides</h3>
                <p className="text-gray-600 mb-3">Detailed lesson plans and teaching strategies for all subjects and grade levels aligned with national standards.</p>
                <button className="text-blue-600 font-medium flex items-center">
                  Download Resources
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Assessment Tools</h3>
                <p className="text-gray-600 mb-3">Standardized tests, rubrics, and evaluation materials aligned with curriculum objectives and learning outcomes.</p>
                <button className="text-green-600 font-medium flex items-center">
                  Access Tools
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Digital Learning</h3>
                <p className="text-gray-600 mb-3">Interactive online resources, e-books, and multimedia content for enhanced learning experiences.</p>
                <button className="text-purple-600 font-medium flex items-center">
                  Explore Digital Content
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-orange-700 mb-2">Professional Development</h3>
                <p className="text-gray-600 mb-3">Training programs and workshops for educators to effectively implement the national curriculum.</p>
                <button className="text-orange-600 font-medium flex items-center">
                  View Programs
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </button>
              </div>
            </div>
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
            
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Curriculum Department</h3>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> +231 XXX XXX XXXX<br />
                    <strong>Email:</strong> curriculum@moe.gov.lr
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
