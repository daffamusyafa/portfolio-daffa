import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ArrowRight, Cloud, Box, Activity, GitFork } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const ServiceSection = () => {
  return (
    <section id="services" className="pt-20 pb-6 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Expertise</h2>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">Automating infrastructure and deployment pipelines to deliver high-quality software faster</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Cloud className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Cloud Infrastructure & Automation</CardTitle>
              <CardDescription className="text-justify">
                I design, build, and maintain scalable and secure cloud infrastructures using industry-standard tools such as AWS, Google Cloud Platform (GCP), Alibaba Cloud, Biznet Gio, WarnaHost, Tencent Cloud, Terraform, and Kubernetes. My focus is on automating infrastructure provisioning and management to ensure high availability, fault tolerance, and cost efficiency, enabling teams to deploy and scale applications seamlessly.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <GitFork className="w-6 h-6 text-green-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Continuous Integration & Continuous Deployment (CI/CD)</CardTitle>
              <CardDescription className="text-justify">
                I develop and optimize automated CI/CD pipelines using tools like Jenkins, GitHub Actions, and GitLab CI. By integrating automated testing, building, and deployment processes, I help deliver software updates rapidly and reliably, reducing manual errors and accelerating time-to-market.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <Box className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Containerization & Orchestration</CardTitle>
              <CardDescription className="text-justify">
                I specialize in containerizing applications using Docker, enabling consistency across development, testing, and production environments. Leveraging Kubernetes for orchestration, I manage container deployment, scaling, and networking to ensure applications are resilient, scalable, and easy to maintain.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                <Activity className="w-6 h-6 text-orange-600 group-hover:text-white" />
              </div>
              <CardTitle className="text-xl">Monitoring</CardTitle>
              <CardDescription className="text-justify">
                I implement comprehensive monitoring and alerting systems using Prometheus, Grafana, and the ELK Stack (Elasticsearch, Logstash, Kibana). These tools provide real-time visibility into system performance, application metrics, and logs. By setting up proactive alerting based on key performance indicators, I ensure issues are detected early, helping maintain system stability and optimize resource usage.
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
