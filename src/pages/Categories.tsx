
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Brain, LineChart, Code, Server, Lock, Smartphone, Database } from "lucide-react";

const categories = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Learn ethical hacking, network security, and threat analysis from industry experts.",
    icon: Shield,
    courses: 24,
    color: "bg-red-100 text-red-600",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "machine-learning",
    name: "Machine Learning & AI",
    description: "Master algorithms, neural networks, and artificial intelligence applications.",
    icon: Brain,
    courses: 18,
    color: "bg-purple-100 text-purple-600",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    description: "Develop skills in data visualization, statistical analysis, and interpretation.",
    icon: LineChart,
    courses: 16,
    color: "bg-blue-100 text-blue-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Build modern web applications with the latest frameworks and technologies.",
    icon: Code,
    courses: 32,
    color: "bg-green-100 text-green-600",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    description: "Learn AWS, Azure, and Google Cloud platforms for scalable infrastructure.",
    icon: Server,
    courses: 14,
    color: "bg-orange-100 text-orange-600",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "blockchain",
    name: "Blockchain & Cryptocurrency",
    description: "Discover blockchain technology, smart contracts, and cryptocurrency fundamentals.",
    icon: Lock,
    courses: 10,
    color: "bg-yellow-100 text-yellow-600",
    image: "https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "mobile-dev",
    name: "Mobile Development",
    description: "Create mobile applications for iOS and Android using React Native and Flutter.",
    icon: Smartphone,
    courses: 20,
    color: "bg-pink-100 text-pink-600",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "database",
    name: "Database Management",
    description: "Master SQL, NoSQL, and database optimization techniques for efficient data storage.",
    icon: Database,
    courses: 12,
    color: "bg-indigo-100 text-indigo-600",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
];

const Categories = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Course Categories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of course categories and find the perfect learning path to enhance your skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/courses/${category.id}`} className="block no-underline">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${category.color} mr-3`}>
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-600 mb-3">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-learnwise-600">
                        {category.courses} courses
                      </span>
                      <span className="text-sm text-gray-600">
                        View courses →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
