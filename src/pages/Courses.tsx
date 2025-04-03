
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/courses/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

// Sample course data - in a real app, this would come from an API
const allCourses = [
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
  {
    id: "5",
    title: "Deep Learning Specialization",
    instructor: "Dr. Thomas Lee",
    rating: 4.9,
    ratingCount: 623,
    price: 129.99,
    discountPrice: 79.99,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    category: "Machine Learning",
    level: "Advanced",
  },
  {
    id: "6",
    title: "SOC Analyst Career Path",
    instructor: "Jennifer Martinez",
    rating: 4.7,
    ratingCount: 482,
    price: 89.99,
    discountPrice: 44.99,
    image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    category: "Cybersecurity",
    level: "Beginner",
  },
  {
    id: "7",
    title: "Big Data Analytics with Spark",
    instructor: "Robert Kim",
    rating: 4.5,
    ratingCount: 371,
    price: 69.99,
    discountPrice: undefined,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    category: "Data Analysis",
    level: "Intermediate",
  },
  {
    id: "8",
    title: "Artificial Intelligence: Business Applications",
    instructor: "Emily Taylor",
    rating: 4.8,
    ratingCount: 529,
    price: 119.99,
    discountPrice: 69.99,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Machine Learning",
    level: "Intermediate",
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  
  // Filter courses based on search query, category, and level
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Explore Courses</h1>
            <p className="mt-2 text-gray-600">Discover our wide range of expert-led courses</p>
          </div>
          
          <div className="flex flex-col mb-8 space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <span className="mr-2 text-sm font-medium text-gray-700">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full min-w-[150px] rounded-md border border-gray-300 p-2 text-sm"
                >
                  <option value="All">All Categories</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Data Analysis">Data Analysis</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <span className="mr-2 text-sm font-medium text-gray-700">Level:</span>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full min-w-[150px] rounded-md border border-gray-300 p-2 text-sm"
                >
                  <option value="All">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))
            ) : (
              <div className="col-span-full py-10 text-center">
                <p className="text-lg text-gray-600">No courses found matching your criteria.</p>
                <Button 
                  className="mt-4" 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedLevel("All");
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
