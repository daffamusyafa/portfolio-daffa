import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ArrowRight, Globe, Search, Shield, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const ServiceSection = () => {
  return (
    <section id="services" className="pt-20 pb-6 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Expertise</h2>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">Building applications that users actually enjoy using</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Globe className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Modern Frontend Development</CardTitle>
              <CardDescription>
                I build fast, responsive, and interactive user interfaces using the latest technologies. My expertise in React and Next.js allows me to translate complex designs from Figma into pixel-perfect, functional code that provides
                an exceptional user experience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <Sparkles className="w-6 h-6 text-green-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Backend & API Development</CardTitle>
              <CardDescription>
                I develop secure, scalable, and efficient backends to power web applications. Using Node.js and lightweight frameworks like Hono.js, I manage data with databases like MongoDB, and ensure smooth communication with the
                frontend.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <Search className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Full-Stack Architecture</CardTitle>
              <CardDescription>
                I specialize in architecting complete web solutions from concept to completion. By handling both the frontend and backend, I ensure seamless integration and a cohesive product. This holistic approach is perfect for building
                data-driven platforms and dashboards where all parts work in harmony.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                <Shield className="w-6 h-6 text-orange-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Deployment & DevOps</CardTitle>
              <CardDescription>
                An application is only useful when it&apos;s live and reliable. I manage the deployment process, from containerizing applications with Docker for consistency and portability, to deploying and maintaining them on a VPS for optimal
                performance and scalability.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="py-20 flex justify-center">
          <Button className="px-8 py-6 font-poppins tracking-wide">
            <Link href="/portfolio" className="flex items-center gap-2">
              Explore My Works <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection
