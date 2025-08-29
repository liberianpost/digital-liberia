import React from "react";
import { Link } from "react-router-dom";

const Grades1To6 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-blue-800">Grades 1-6 Curriculum</h1>
              <p className="text-lg text-gray-600">Elementary Education Foundation</p>
            </div>
            <Link 
              to="/moe/curriculum"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Curriculum
            </Link>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Elementary Education Overview</h2>
            <p>
              The Grades 1-6 curriculum focuses on building strong foundational skills in literacy, 
              numeracy, and core subjects. This stage emphasizes holistic development and prepares 
              students for the transition to junior high school.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Core Subjects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Language Arts</h4>
                <p className="text-sm">Reading, writing, grammar, and communication skills</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Mathematics</h4>
                <p className="text-sm">Basic arithmetic, geometry, and problem-solving</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">General Science</h4>
                <p className="text-sm">Introduction to scientific concepts and exploration</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Social Studies</h4>
                <p className="text-sm">Liberian history, geography, and civic education</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Develop basic literacy and numeracy skills</li>
              <li>Foster curiosity and love for learning</li>
              <li>Build social and emotional development</li>
              <li>Introduce critical thinking skills</li>
              <li>Promote cultural awareness and national identity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades1To6;
