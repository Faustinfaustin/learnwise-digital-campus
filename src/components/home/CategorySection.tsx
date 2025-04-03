
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Brain, LineChart } from "lucide-react";

const categories = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Learn ethical hacking, network security, and threat analysis from industry experts.",
    icon: Shield,
    courses: 24,
    color: "bg-red-100 text-red-600",
    link: "/courses/cybersecurity",
  },
  {
    id: "machine-learning",
    name: "Machine Learning & AI",
    description: "Master algorithms, neural networks, and artificial intelligence applications.",
    icon: Brain,
    courses: 18,
    color: "bg-purple-100 text-purple-600",
    link: "/courses/machine-learning",
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    description: "Develop skills in data visualization, statistical analysis, and interpretation.",
    icon: LineChart,
    courses: 16,
    color: "bg-blue-100 text-blue-600",
    link: "/courses/data-analysis",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Explore Categories</h2>
          <p className="mt-2 text-gray-600">Dive into our specialized course categories</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={category.link}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                  <div className="mt-4 text-sm font-medium text-gray-500">
                    {category.courses} courses
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
