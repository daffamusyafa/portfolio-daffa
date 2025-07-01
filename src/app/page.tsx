import Sidebar from "@/components/Sidebar";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-80 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome to my portfolio</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              This is a modern, beautiful sidebar design for your portfolio. The sidebar includes smooth animations, dark mode toggle, social media links, and a clean navigation system. Try clicking on different navigation items and
              toggling the dark mode!
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Features</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Responsive design</li>
                  <li>• Dark mode support</li>
                  <li>• Smooth animations</li>
                  <li>• Modern icons</li>
                  <li>• Social media links</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technology</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• React + TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Lucide React icons</li>
                  <li>• Modern CSS animations</li>
                  <li>• Production ready</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
