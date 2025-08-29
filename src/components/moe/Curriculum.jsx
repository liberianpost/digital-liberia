import React, { useState } from "react";

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState("grades");
  
  // Curriculum data with direct download links
  const curriculumData = {
    grades: {
      "Grades 1-6": {
        title: "Elementary Education Foundation",
        color: "from-blue-500 to-blue-700",
        downloads: [
          { name: "Complete Elementary Curriculum (ZIP)", url: "http://www.moeliberia.com/wp-content/uploads/2019/09/GRADE-1-6.zip" }
        ]
      },
      "Grades 7-9": {
        title: "Junior High Development",
        color: "from-green-500 to-green-700",
        downloads: [
          { name: "Complete Junior High Curriculum (ZIP)", url: "http://www.moeliberia.com/wp-content/uploads/2019/09/GRADE-7-9.zip" }
        ]
      },
      "Grades 10-12": {
        title: "Senior High Specialization",
        color: "from-purple-500 to-purple-700",
        downloads: [
          { name: "Complete Senior High Curriculum (ZIP)", url: "http://www.moeliberia.com/wp-content/uploads/2019/09/Grade-10-12.zip" }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Ministry of Education Header - Centered */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 flex justify-center">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/logos/moe.png" 
              alt="Ministry of Education Logo" 
              className="w-20 h-20 object-contain mb-4"
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

        {/* About the Curriculum */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3 text-center">
            About the Curriculum
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

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-xl p-1 shadow-lg flex">
            <button
              onClick={() => setActiveTab("grades")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "grades"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Curriculum Downloads
            </button>
          </div>
        </div>

        {/* Curriculum Downloads Content */}
        {activeTab === "grades" && (
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(curriculumData.grades).map(([grade, data]) => (
                <div 
                  key={grade}
                  className={`bg-gradient-to-br ${data.color} rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:scale-105`}
                >
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{grade}</h3>
                    <h4 className="text-xl font-semibold mb-4">{data.title}</h4>
                    
                    <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                      <h5 className="font-semibold mb-3">Curriculum Download:</h5>
                      <div className="space-y-2">
                        {data.downloads.map((item, index) => (
                          <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-3 transition-all duration-200 flex items-center justify-center text-center"
                          >
                            <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            <span className="text-sm font-medium">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
