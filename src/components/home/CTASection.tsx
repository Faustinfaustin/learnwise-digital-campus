
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-learnwise-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Ready to advance your tech career?
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Join over 50,000 professionals who have accelerated their careers through our specialized tech courses. Start learning today.
          </p>
          <div className="flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link to="/register">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Stat value="50K+" label="Students" />
            <Stat value="200+" label="Courses" />
            <Stat value="35+" label="Expert Instructors" />
            <Stat value="92%" label="Completion Rate" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold sm:text-3xl">{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

export default CTASection;
