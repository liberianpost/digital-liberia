import React from "react";
import { Link } from "react-router-dom";

const Grades10To12 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-purple-800">Grades 10-12 Curriculum</h1>
              <p className="text-lg text-gray-600">Senior High Specialization</p>
            </div>
            <Link 
              to="/moe/curriculum"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Back to Curriculum
            </Link>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Senior High Overview</h2>
            <p>
              The Grades 10-12 curriculum offers specialized tracks to prepare students for higher 
              education or vocational paths. Students can choose focus areas based on their interests 
              and career aspirations.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Core Subjects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Advanced Mathematics</h4>
                <p className="text-sm">Calculus, statistics, and advanced algebra</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Physics</h4>
                <p className="text-sm">Mechanics, electricity, and modern physics</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Chemistry</h4>
                <p className="text-sm">Organic, inorganic, and physical chemistry</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Biology</h4>
                <p className="text-sm">Cell biology, genetics, and ecology</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Specialization Tracks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Science Track</h4>
                <p className="text-sm">Focus on mathematics and natural sciences</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Arts & Humanities</h4>
                <p className="text-sm">Literature, history, and social sciences</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Business & Economics</h4>
                <p className="text-sm">Commerce, accounting, and economics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades10To12;
