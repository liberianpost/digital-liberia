import React from "react";
import { Link } from "react-router-dom";

const Grades7To9 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-green-800">Grades 7-9 Curriculum</h1>
              <p className="text-lg text-gray-600">Junior High Development</p>
            </div>
            <Link 
              to="/moe/curriculum"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to Curriculum
            </Link>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Junior High Overview</h2>
            <p>
              The Grades 7-9 curriculum builds upon elementary foundations with more specialized 
              subject exploration. Students begin to develop deeper academic skills and prepare 
              for senior high school specialization.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Core Subjects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">English Literature</h4>
                <p className="text-sm">Advanced reading comprehension and literary analysis</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Algebra & Geometry</h4>
                <p className="text-sm">Mathematical concepts and problem-solving techniques</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Integrated Science</h4>
                <p className="text-sm">Biology, chemistry, and physics fundamentals</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Civics & History</h4>
                <p className="text-sm">Government structures and historical perspectives</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Develop critical thinking and analytical skills</li>
              <li>Enhance subject-specific knowledge</li>
              <li>Prepare for academic specialization</li>
              <li>Develop study habits and research skills</li>
              <li>Explore career interests and aptitudes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades7To9;
