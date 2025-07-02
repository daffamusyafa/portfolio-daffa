import HeroSection from "@/components/home/HeroSection";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-80 min-h-screen p-8 bg-white dark:bg-gray-900">
        <HeroSection/>
      </main>
    </div>
  );
}

export default Home;
