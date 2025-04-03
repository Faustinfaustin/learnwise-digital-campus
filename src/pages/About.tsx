
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Shield, GraduationCap, Award, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & AI Specialist",
    bio: "PhD in Computer Science with a focus on AI and Machine Learning. Previously led AI research at Google and Stanford University.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Data Science Instructor",
    bio: "Former Data Science lead at Amazon with 12+ years of industry experience. Expert in building scalable data pipelines and ML systems.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Lisa Washington",
    role: "Head of Cybersecurity",
    bio: "Certified ethical hacker and security researcher with expertise in network defense and penetration testing. Previously CISO at Microsoft.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Dr. James Wilson",
    role: "Academic Director",
    bio: "Former professor of Computer Science with expertise in curriculum development and educational technology implementation.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve our platform and courses to incorporate the latest technologies and teaching methodologies.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a collaborative learning environment where students and instructors support each other's growth.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We maintain the highest standards of integrity in our content creation and business practices.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    description: "We strive for excellence in educational content to ensure meaningful outcomes for our students.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We maintain rigorous quality standards through expert review processes and continuous improvement.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're driven by a passion for education and technology that inspires both our team and our students.",
    color: "bg-pink-100 text-pink-600",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-learnwise-900 to-learnwise-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission: Democratizing Tech Education
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              LearnWise is transforming how people learn advanced technological skills through expert-led courses, cutting-edge content, and a supportive global community.
            </p>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link to="/courses">Browse Our Courses</Link>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 bottom-0 w-5/12">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="Team collaboration" 
            className="rounded-tl-lg shadow-xl"
          />
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team working" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2018 by a team of industry experts and educators, LearnWise was born from a simple observation: traditional education wasn't keeping pace with rapidly evolving tech fields.
              </p>
              <p className="text-gray-700 mb-4">
                We started with a single cybersecurity course and a vision to create practical, industry-relevant training that would prepare students for real-world challenges. Today, we've expanded to cover the most in-demand tech skills with over 100 courses and a global community of more than 500,000 learners.
              </p>
              <p className="text-gray-700">
                Our commitment remains the same: to provide accessible, high-quality education that bridges the gap between academic learning and industry needs, empowering students to thrive in their tech careers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at LearnWise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md">
                <div className={`${value.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry experts and educators dedicated to transforming tech education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-learnwise-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-learnwise-700 to-teal-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold">100+</div>
              <div className="mt-2 text-gray-100">Expert-led courses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">500K+</div>
              <div className="mt-2 text-gray-100">Global learners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">96%</div>
              <div className="mt-2 text-gray-100">Satisfaction rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">45+</div>
              <div className="mt-2 text-gray-100">Industry partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join our community of learners and gain the skills you need for success in today's tech industry
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-learnwise-600 hover:bg-learnwise-700">
              <Link to="/register">Sign Up Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
