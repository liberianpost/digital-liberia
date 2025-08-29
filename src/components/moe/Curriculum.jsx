import React, { useState } from "react";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample curriculum data structure
  const curriculumData = {
    overview: `The Liberian National Curriculum is designed to provide a comprehensive, 
    balanced education that prepares students for academic success and personal development. 
    Our curriculum emphasizes critical thinking, creativity, and practical skills aligned 
    with 21st-century requirements while maintaining strong foundations in core subjects.`,
    
    grades: {
      "Grades 1-6": {
        title: "Elementary Education Foundation",
        description: "Focus on literacy, numeracy, and foundational knowledge across subjects",
        subjects: ["Language Arts", "Mathematics", "Science", "Social Studies", "Creative Arts"],
        color: "from-blue-500 to-blue-700"
      },
      "Grades 7-9": {
        title: "Junior High Development",
        description: "Building on foundations with more specialized subject exploration",
        subjects: ["English Literature", "Algebra", "Biology", "Civics", "Computer Literacy"],
        color: "from-green-500 to-green-700"
      },
      "Grades 10-12": {
        title: "Senior High Specialization",
        description: "College preparatory tracks with subject specialization options",
        subjects: ["Advanced Mathematics", "Physics", "Chemistry", "Economics", "Foreign Languages"],
        color: "from-purple-500 to-purple-700"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Liberian National Curriculum
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
                  <p>To create a world-class education system that empowers all Liberian students to reach their full potential.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Mission</h3>
                  <p>To provide equitable access to quality education that develops knowledgeable, skilled, and ethical citizens.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Approach</h3>
                  <p>Student-centered learning with emphasis on critical thinking, creativity, and practical application of knowledge.</p>
                </div>
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
                <p className="text-gray-600 mb-3">Detailed lesson plans and teaching strategies for all subjects and grade levels.</p>
                <button className="text-blue-600 font-medium flex items-center">
                  Download Resources
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Assessment Tools</h3>
                <p className="text-gray-600 mb-3">Standardized tests, rubrics, and evaluation materials aligned with curriculum objectives.</p>
                <button className="text-green-600 font-medium flex items-center">
                  Access Tools
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Digital Learning</h3>
                <p className="text-gray-600 mb-3">Interactive online resources, e-books, and multimedia content for enhanced learning.</p>
                <button className="text-purple-600 font-medium flex items-center">
                  Explore Digital Content
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-orange-700 mb-2">Professional Development</h3>
                <p className="text-gray-600 mb-3">Training programs and workshops for educators to effectively implement the curriculum.</p>
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

        {/* Footer Note */}
        <div className="text-center text-gray-600 text-sm">
          <p>For questions about the curriculum, contact the Ministry of Education Curriculum Department</p>
          <p className="mt-1">Email: curriculum@moe.gov.lr | Phone: +231 XXX XXX XXXX</p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
