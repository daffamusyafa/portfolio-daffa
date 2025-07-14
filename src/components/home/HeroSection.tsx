"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen font-poppins flex items-center justify-center relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div
          className="absolute inset-0 opacity-20 dark:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/20 dark:via-transparent dark:to-indigo-900/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent dark:via-slate-800/60" />

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse dark:bg-blue-300 dark:opacity-80" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-40 animate-pulse delay-300 dark:bg-indigo-300 dark:opacity-60" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 animate-pulse delay-700 dark:bg-blue-200 dark:opacity-70" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-indigo-300 rounded-full opacity-30 animate-pulse delay-1000 dark:bg-indigo-200 dark:opacity-50" />

        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-indigo-400/20 to-transparent transform skew-y-1 dark:via-indigo-300/30" />
      </div>

      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse dark:bg-blue-300/10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-1000 dark:bg-indigo-300/10" />

      <div className="max-w-7xl mx-auto px-8 relative z-10 pb-8">
        <div className="text-center space-y-4">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/70 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-100 dark:border-slate-600 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500 shadow-lg dark:shadow-slate-900/50">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              </div>
              {/* Glow effect around icon */}
              <div className="absolute inset-0 w-20 h-20 bg-blue-400/20 rounded-2xl blur-xl transform rotate-12 dark:bg-blue-300/30" />
            </div>
          </div>

          {/* Animated Typography */}
          <div className="space-y-4">
            <div className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-gray-800 dark:text-gray-100 mr-4">Grow Your Business with a Professional</span>
                  <span className={`bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent animate-pulse`}> Website</span>
                  <span className="text-gray-600 dark:text-gray-400"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <p className="text-sm md:text-lg tracking-wide text-gray-700 dark:text-gray-300 font-light max-w-3xl mx-auto leading-snug backdrop-blur-sm">
              I create custom websites that are easy to use, look professional, and help your business grow by building trust with your customers.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-row gap-4 justify-center items-center pt-6 transition-all duration-1000 delay-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <button className="group bg-gradient-to-r from-gray-900 to-gray-800 dark:from-slate-100 dark:to-gray-100 text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl dark:hover:shadow-slate-700/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 backdrop-blur-sm">
              <a href="https://wa.me/6285703223464?text=Hi%20I'm%20interested%20in%20a%20consultation" className="text-xs sm:text-md">
                Get Free Consultation
              </a>
            </button>

            <button className="group border-2 border-gray-400 dark:border-slate-500 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-2xl font-semibold hover:border-gray-500 dark:hover:border-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800/60 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm">
              <Link href={"/portfolio"} className="text-xs sm:text-md">
                See My Portfolio
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
