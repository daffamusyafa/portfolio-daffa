import { Code, User } from 'lucide-react';
import React from 'react'

const HandleClient = () => {
  return (
    <section id="process" className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How I Handle Every Client</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A transparent, collaborative process that ensures your project succeeds from idea to launch</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Client Message */}
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 mb-2">
                  <p className="text-gray-800 font-medium">I need a website for my company, PERIOD.</p>
                  <p className="text-gray-600 mt-2">We specialize in marketing eco-friendly and gender-neutral feminine hygiene products.</p>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">01</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">First, we need an idea...</h3>
                  <p className="text-gray-600">I'll analyze your business requirements and create a detailed project plan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">02</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Design & Development</h3>
                  <p className="text-gray-600">I'll create the design and share it with you. Once validated, I'll develop your website and put it online!</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">03</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Launch & Support</h3>
                  <p className="text-gray-600">Perfect! Your website is live and I'll provide ongoing support to ensure everything runs smoothly</p>
                </div>
              </div>
            </div>

            {/* My Response */}
            <div className="flex items-start space-x-4 mt-8 justify-end">
              <div className="flex-1 text-right">
                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-4 inline-block">
                  <p className="font-medium">Alright, great! I'll handle everything professionally and deliver a website that exceeds your expectations.</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HandleClient
