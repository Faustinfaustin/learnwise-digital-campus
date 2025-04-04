
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Users, Shield, GraduationCap } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve our platform and courses to incorporate the latest technologies.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a collaborative learning environment where students and instructors support each other.",
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
];

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">About LearnWise</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Transforming tech education through expert-led courses and a supportive community
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Team working" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2018 by industry experts and educators, LearnWise was born from a simple observation: traditional education wasn't keeping pace with rapidly evolving tech fields.
            </p>
            <p className="text-gray-700">
              We started with a single cybersecurity course and have expanded to cover the most in-demand tech skills with over 100 courses and a global community of more than 500,000 learners.
            </p>
            <Button asChild className="mt-6 bg-learnwise-600 hover:bg-learnwise-700">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {values.map((value, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5 transition-all hover:shadow-md">
              <div className={`${value.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/about">View Our Full Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
