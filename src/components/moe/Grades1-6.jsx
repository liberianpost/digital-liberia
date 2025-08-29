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
              The study of English - Language Arts is critical to the development of appreciation for spoken and 
              written language with phonics as a key component. Learners develop an appreciation for various kinds 
              of literary works and gain knowledge of all of the parts of speech.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">General Objectives for Grades 1-6 English</h3>
            <p>
              The curriculum aims to provide for the development of skills which will enable learners to:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
              <li>Communicate in English both orally and in written composition effectively</li>
              <li>Listen attentively and with understanding (Comprehension)</li>
              <li>Read with speed, ease and comprehension through constant drills and exercise</li>
              <li>Identify the social, cultural, linguistic and ethnical environment and observe the role of language as conveyor of the cultural heritage</li>
              <li>Enhance digital skill through the use of digital technology</li>
              <li>Lay the foundation of creativity and innovation utilizing imagination to bring something new into being</li>
            </ol>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Core Subjects - English Language Arts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Reading and Comprehension</h4>
                <p className="text-sm">Letter-sound correspondence, decoding words, story elements, making predictions, inferences, and text analysis</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Grammar and Parts of Speech</h4>
                <p className="text-sm">Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and sentence structure</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Writing and Composition</h4>
                <p className="text-sm">Sentence writing, paragraph development, punctuation, capitalization, and various writing forms</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Vocabulary Development</h4>
                <p className="text-sm">Sight words, word patterns, prefixes, suffixes, context clues, and subject-related vocabulary</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">Phonics and Word Study</h4>
                <p className="text-sm">Letter-sound relationships, blends, digraphs, vowel patterns, and decoding strategies</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Listening and Speaking</h4>
                <p className="text-sm">Oral communication, following directions, participating in discussions, and presentations</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Teaching Approach</h3>
            <p>
              A learner-centered approach is emphasized in this curriculum. This is based on the firm belief that 
              learning becomes more permanent, meaningful and exciting when learners themselves take ownership of 
              the learning process. Instructors are therefore urged to contrive those classroom strategies that engage 
              learners actively in the teaching and learning process.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Assessment Strategies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div className="bg-gray-100 p-3 rounded text-center">Assignments</div>
              <div className="bg-gray-100 p-3 rounded text-center">Quizzes</div>
              <div className="bg-gray-100 p-3 rounded text-center">Tests</div>
              <div className="bg-gray-100 p-3 rounded text-center">Oral Presentations</div>
              <div className="bg-gray-100 p-3 rounded text-center">Peer Assessment</div>
              <div className="bg-gray-100 p-3 rounded text-center">Role Play</div>
              <div className="bg-gray-100 p-3 rounded text-center">Group Work</div>
              <div className="bg-gray-100 p-3 rounded text-center">Demonstrations</div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Expected Competencies</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Effective Communication</li>
              <li>Creativity & Innovation Skills</li>
              <li>Research and Problem Solving skills</li>
              <li>Organizational Ability</li>
              <li>Digital Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades1To6;
