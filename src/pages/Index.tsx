
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

const Index = () => {
  return (
    <Layout>
      <HeroSection />
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
