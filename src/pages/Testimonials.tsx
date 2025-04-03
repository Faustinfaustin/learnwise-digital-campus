
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

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
  {
    id: "4",
    name: "Michael Johnson",
    role: "Web Developer",
    company: "TechFusion Labs",
    content: "The web development course was outstanding! The curriculum covered everything from fundamentals to advanced topics, and the hands-on projects gave me real-world experience.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 5,
  },
  {
    id: "5",
    name: "Sophie Chen",
    role: "Mobile App Developer",
    company: "AppWorks Studio",
    content: "The mobile development course was incredibly practical. I was able to build and publish my own app before even completing the course. The instructor support was exceptional.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    rating: 5,
  },
  {
    id: "6",
    name: "David Kim",
    role: "Cloud Solutions Architect",
    company: "CloudTech Systems",
    content: "The cloud computing course gave me the confidence to implement complex cloud architectures. The labs and real-world scenarios were invaluable for practical learning.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 4,
  },
];

const featuredTestimonials = [
  {
    id: "7",
    name: "Jennifer Parker",
    role: "Chief Information Security Officer",
    company: "SecureNet Industries",
    content: "As a CISO looking to upskill my team, LearnWise has been invaluable. The enterprise training options allowed me to create custom learning paths for different security roles within my organization. The quality of instruction and the practical labs have significantly improved our security posture.",
    image: "https://images.unsplash.com/photo-1598550474006-902222962d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 5,
  },
  {
    id: "8",
    name: "Robert Martinez",
    role: "Director of AI Research",
    company: "InnovateAI",
    content: "The depth of content in LearnWise's advanced machine learning courses is unmatched. What sets them apart is the accessibility of cutting-edge concepts - complex ideas are broken down in a way that's digestible without losing their technical significance. My entire research team has benefited enormously.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 5,
  },
];

const TestimonialsPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our courses have transformed careers and empowered professionals worldwide
            </p>
          </div>

          {/* Featured Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Featured Student Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 bg-gradient-to-br from-learnwise-600 to-teal-600 p-6 flex items-center justify-center">
                        <Avatar className="h-24 w-24 border-4 border-white">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="w-full md:w-2/3 p-6">
                        <Quote className="h-8 w-8 text-learnwise-200 mb-4" />
                        <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full hover:shadow-lg transition-all duration-300">
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
                  <p className="text-gray-700 mb-6">{testimonial.content}</p>
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
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

          {/* Video Testimonial Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold">Video Success Stories</h2>
              <p className="text-gray-600">Hear directly from our successful students</p>
            </div>
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-black">
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                <p className="text-center p-8">Video testimonial placeholder - In a real implementation, this would be an embedded video player.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestimonialsPage;
