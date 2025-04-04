
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import CategorySection from "@/components/home/CategorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import ForumPreview from "@/components/home/ForumPreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <section className="py-16 bg-gradient-to-r from-learnwise-800 to-learnwise-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Welcome to LearnWise</h2>
              <p className="mb-4">
                Founded in 2018 by industry experts and educators, LearnWise was born from a simple observation: traditional education wasn't keeping pace with rapidly evolving tech fields.
              </p>
              <p className="mb-6">
                We started with a single cybersecurity course and have expanded to cover the most in-demand tech skills with over 100 courses and a global community of more than 500,000 learners.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/courses">Explore Our Courses</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team working" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <FeaturedCourses />
      <CategorySection />
      <AboutSection />
      <TestimonialsSection />
      <ForumPreview />
      <ContactSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
