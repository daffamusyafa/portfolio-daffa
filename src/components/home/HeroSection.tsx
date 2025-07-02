"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import HandleClient from "./HandleClient";
import ServiceSection from "./ServiceSection";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20  dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          {/* Animated Typography */}
          <div className="space-y-6">
            <div className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-gray-800 dark:text-gray-200 mr-4">Grow Your Business with a Professional</span>
                  <span className={`bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent animate-pulse`}> Website</span>
                  <span className="text-gray-600 dark:text-gray-400"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              I create custom websites that are easy to use, look professional, and help your business grow by building trust with your customers.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 transition-all duration-1000 delay-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <button className="group bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <span>Get Free Consultation</span>
            </button>

            <button className="group border-2 border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-gray-500 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-3">
              <span>See My Portfolio</span>
            </button>
          </div>

          <HandleClient/>
          <ServiceSection/>
        </div>
      </div>
      
     
    </div>
  );
}
