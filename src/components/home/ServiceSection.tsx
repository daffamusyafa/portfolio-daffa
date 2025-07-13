import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ArrowRight, CheckCircle, Globe, Search, Shield, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const ServiceSection = () => {
  return (
    <section id="services" className="pt-20 pb-6 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Solutions for Your Success</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from my comprehensive range of web development services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Globe className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Landing Pages & Company Profile</CardTitle>
              <CardDescription>Professional, conversion-focused landing pages and comprehensive company profiles that make a lasting impression</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Responsive design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  SEO optimized
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Fast loading speed
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Contact forms
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <Sparkles className="w-6 h-6 text-green-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">E-commerce & Custom Web</CardTitle>
              <CardDescription>Powerful e-commerce platforms and custom web applications tailored to your specific business needs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Payment integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Inventory management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Admin dashboard
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Custom features
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <Search className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Web Optimization</CardTitle>
              <CardDescription>Boost your website&apos;s performance, speed, and search engine rankings with expert optimization</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Speed optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  SEO improvement
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Security updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance monitoring
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                <Shield className="w-6 h-6 text-orange-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Maintenance & Support</CardTitle>
              <CardDescription>Keep your website running smoothly with regular maintenance, updates, and dedicated support</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Regular backups
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Security monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Content updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className='py-20 flex justify-center'>
          <Button className="px-8 py-6 font-poppins tracking-wide">
            <Link href="/porfolio" className='flex items-center gap-2'>Explore My Works <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection
