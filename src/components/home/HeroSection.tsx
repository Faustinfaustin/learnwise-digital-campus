import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Laptop } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative py-16 overflow-hidden bg-gradient-to-r from-learnwise-900 to-learnwise-800 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Laptop className="w-10 h-10 mr-3 text-teal-400" />
              <h1 className="text-3xl font-bold text-white">LearnWiseTechnology</h1>
            </div>
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Learn Skills for the <span className="text-teal-400">Digital Future</span>
            </h2>
            <p className="mt-6 text-lg text-gray-100">
              Master cybersecurity, machine learning, and data analysis with expert-led courses designed for real-world applications.
            </p>
            <div className="flex flex-col items-center w-full max-w-md gap-4 mx-auto mt-8 md:mx-0 md:flex-row">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for courses..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-teal-400"
                />
              </div>
              <Button size="lg" className="w-full md:w-auto bg-teal-600 hover:bg-teal-700">
                Explore Courses
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-8 md:justify-start">
              <Badge text="Cybersecurity" />
              <Badge text="Ethical Hacking" />
              <Badge text="Machine Learning" />
              <Badge text="Data Analysis" />
              <Badge text="Deep Learning" />
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Learning platform"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg shadow-inner"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-500 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-learnwise-500 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ text }: { text: string }) => {
  return (
    <span className="px-3 py-1 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
      {text}
    </span>
  );
};

export default HeroSection;
