"use client";

import React, { useState } from "react";
import { Home, FolderOpen, MessageSquare, Play, FileText, Moon, Sun, Github, Linkedin, Twitter, Instagram, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

const navigationItems: NavigationItem[] = [
  { id: "introduction", label: "Home", icon: Home },
  { id: "portfolio", label: "Services", icon: FolderOpen, badge: 12 },
  { id: "testimonials", label: "Portfolio", icon: MessageSquare, badge: 8 },
  { id: "videos", label: "Testimonials", icon: Play, badge: 5 },
  { id: "blog", label: "Blog Posts", icon: FileText, badge: 24 },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("introduction");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <aside className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 ease-in-out shadow-xl">
        {/* Profile Section */}
        <div className="p-8 border-b border-gray-100 dark:border-gray-800">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group">
            {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500 group-hover:rotate-12 transition-transform duration-200" /> : <Moon className="w-4 h-4 text-gray-600 group-hover:-rotate-12 transition-transform duration-200" />}
          </button>
          <div className="flex items-center justify-center mb-3">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                <Image src="/img/myfoto.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" width={100} height={100} />
              </div>
            </div>
          </div>
          <div className="space-y-1 flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Nur Arini</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Full Stack Developer</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">📍 Bandung, Indonesia</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group relative overflow-hidden ${
                  isActive ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-400 shadow-sm" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                {isActive && <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-r-full"></div>}

                <IconComponent
                  className={`w-5 h-5 transition-all duration-200 ${
                    isActive ? "text-blue-600 dark:text-blue-400 scale-110" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 group-hover:scale-105"
                  }`}
                />

                <span className={`font-medium transition-all duration-200 ${isActive ? "text-blue-700 dark:text-blue-400" : ""}`}>{item.label}</span>

                {item.badge && (
                  <span
                    className={`ml-auto px-2 py-0.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-gray-100 dark:border-gray-800">
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Connect with me</p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href={social.href} className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group hover:scale-105 hover:shadow-md" title={social.label}>
                    <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2">
              <span>Download Resume</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">© 2025 Sarah Johnson</p>
        </div>
      </aside>
    </div>
  );
}
