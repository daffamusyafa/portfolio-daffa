import HandleClient from "@/components/home/HandleClient";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import React from "react";

function Home() {
  return (
    <div>
      <HeroSection />
      <HandleClient />
      <ServiceSection />
    </div>
  );
}

export default Home;
