
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: "1",
    name: "Emily Chen",
    role: "Security Analyst",
    company: "TechShield Inc.",
    content: "The cybersecurity courses on LearnWise completely transformed my career. I went from a basic IT role to a specialized security analyst position within 6 months of completing the certification.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 5,
  },
  {
    id: "2",
    name: "James Wilson",
    role: "Data Scientist",
    company: "Analytics Global",
    content: "The machine learning curriculum was both comprehensive and practical. The hands-on projects helped me build a portfolio that impressed recruiters and landed me my dream job.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 5,
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    role: "Business Intelligence Manager",
    company: "DataDrive Solutions",
    content: "As someone transitioning to a data-focused role, the data analysis courses provided exactly what I needed - clear explanations, real-world examples, and excellent instructor support.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">What Our Students Say</h2>
          <p className="mt-2 text-gray-600">Success stories from professionals who transformed their careers</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="flex items-center mt-6">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" asChild className="group">
            <Link to="/testimonials">
              View all success stories 
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
