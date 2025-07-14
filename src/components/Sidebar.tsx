"use client";

import React, { useState } from "react";
import { Home, FolderOpen, Play, Moon, Sun, Github, Linkedin, Twitter, Instagram, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDarkMode } from "./DarkMode";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

const navigationItems: NavigationItem[] = [
  { id: "", label: "Home", icon: Home },
  { id: "portfolio", label: "Portfolio", icon: FolderOpen, badge: 8 },
  { id: "about", label: "About Me", icon: Play, badge: 5 },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/nrrarnn", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nur-arini", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/ryn_code", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/ryn_code", label: "Instagram" },
  { icon: Mail, href: "mailto:nurarini0302@gmail.com", label: "Email" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();


  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (itemId: string) => {
    setActiveItem(itemId);
    router.push(`/${itemId}`);
    // Auto close sidebar di mobile setelah navigation
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      {/* Mobile Menu Button */}
      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg lg:hidden">
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay untuk mobile */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar} />}

      {/* Sidebar - UI tetap sama, hanya tambah responsive logic */}
      <aside
        className={`
        fixed left-0 top-0 h-screen w-72 font-poppins bg-white dark:bg-gray-900 
        border-r border-gray-100 dark:border-gray-800 flex flex-col 
        transition-all duration-300 ease-in-out shadow-xl shadow-slate-500/10 z-40
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        {/* Profile Section - UI sama persis */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex justify-end">
            <button onClick={toggleDarkMode} className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group">
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500 group-hover:rotate-12 transition-transform duration-200" /> : <Moon className="w-4 h-4 text-gray-600 group-hover:-rotate-12 transition-transform duration-200" />}
            </button>
          </div>

          <div className="flex items-center justify-center mb-3">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 p-0.5">
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

        {/* Navigation - UI sama persis, hanya ganti onClick */}
        <nav className="flex-1 p-4 space-y-1">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group relative overflow-hidden ${
                  isActive ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-400 shadow-sm" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                {isActive && <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-r-full"></div>}

                <IconComponent
                  className={`w-5 h-5 transition-all duration-200  ${
                    isActive ? "text-blue-600 dark:text-blue-400 scale-110" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 group-hover:scale-105"
                  }`}
                />

                <span className={`font-medium  tracking-wide text-sm transition-all duration-200 ${isActive ? "text-blue-700 dark:text-blue-400" : ""}`}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Social Links - UI sama persis */}
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

          <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">© 2025 RynDev</p>
        </div>
      </aside>
    </div>
  );
}
