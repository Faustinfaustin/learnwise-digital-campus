
import React from "react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/courses/CourseCard";
import { Link } from "react-router-dom";

// Sample course data
const featuredCourses = [
  {
    id: "1",
    title: "Complete Ethical Hacking Bootcamp 2023",
    instructor: "Dr. Alex Johnson",
    rating: 4.8,
    ratingCount: 1243,
    price: 89.99,
    discountPrice: 49.99,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    category: "Cybersecurity",
    level: "Intermediate",
  },
  {
    id: "2",
    title: "Machine Learning: From Basics to Advanced",
    instructor: "Prof. Sarah Chen",
    rating: 4.9,
    ratingCount: 958,
    price: 94.99,
    discountPrice: 59.99,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    category: "Machine Learning",
    level: "All Levels",
  },
  {
    id: "3",
    title: "Data Analysis Masterclass with Python",
    instructor: "Michael Rodriguez",
    rating: 4.7,
    ratingCount: 1087,
    price: 79.99,
    discountPrice: 39.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "Data Analysis",
    level: "Beginner",
  },
  {
    id: "4",
    title: "Network Defense & Security Architecture",
    instructor: "Lisa Washington",
    rating: 4.6,
    ratingCount: 742,
    price: 99.99,
    discountPrice: undefined,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80",
    category: "Cybersecurity",
    level: "Advanced",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between mb-10 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Featured Courses</h2>
            <p className="mt-2 text-gray-600">Explore our most popular and highly rated courses</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/courses">View all courses</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
