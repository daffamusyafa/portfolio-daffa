"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen font-poppins flex items-center justify-center relative overflow-hidden bg-white dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Grid */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Accent Grid - Smaller */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent dark:via-gray-900/40" />

        {/* Animated Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-40 animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 animate-pulse delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-indigo-300 rounded-full opacity-30 animate-pulse delay-1000" />

        {/* Flowing Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform -skew-y-1" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-indigo-400/20 to-transparent transform skew-y-1" />
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 relative z-10 pb-8">
        <div className="text-center space-y-8">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-blue-100 dark:border-gray-700 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500 shadow-lg">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              {/* Glow effect around icon */}
              <div className="absolute inset-0 w-20 h-20 bg-blue-400/20 rounded-2xl blur-xl transform rotate-12" />
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
            <p className="text-lg md:text-xl tracking-wide text-gray-700 dark:text-gray-400 font-light max-w-3xl mx-auto leading-snug backdrop-blur-sm">
              I create custom websites that are easy to use, look professional, and help your business grow by building trust with your customers.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 transition-all duration-1000 delay-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <button className="group bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 backdrop-blur-sm">
              <span>Get Free Consultation</span>
            </button>

            <button className="group border-2 border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-gray-500 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm">
              <span>See My Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
