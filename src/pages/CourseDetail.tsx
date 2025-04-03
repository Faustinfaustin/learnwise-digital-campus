
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Award, Star, Users, Check } from "lucide-react";

// Sample course data - in a real app, this would come from an API
const courseData = {
  id: "1",
  title: "Complete Ethical Hacking Bootcamp 2023",
  description: "Master the art of ethical hacking and cybersecurity with this comprehensive course designed for security professionals. Learn how to identify vulnerabilities, conduct security assessments, and implement effective defense strategies.",
  instructor: {
    name: "Dr. Alex Johnson",
    bio: "Security expert with 15+ years experience in penetration testing and security consulting for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  rating: 4.8,
  ratingCount: 1243,
  studentsEnrolled: 12568,
  price: 89.99,
  discountPrice: 49.99,
  image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  category: "Cybersecurity",
  level: "Intermediate",
  duration: "24 hours",
  lectures: 42,
  updatedDate: "November 2023",
  language: "English",
  whatYouWillLearn: [
    "Understand the fundamentals of network security and encryption",
    "Master essential penetration testing techniques",
    "Perform reconnaissance and vulnerability assessment",
    "Exploit web application vulnerabilities safely",
    "Set up secure defensive measures for your organization",
    "Create detailed security reports and documentation",
  ],
  curriculum: [
    {
      title: "Introduction to Ethical Hacking",
      lectures: 5,
      duration: "2h 30m",
      topics: ["Course Overview", "Ethical Hacking Methodology", "Legal Framework", "Setting up your Lab Environment", "Essential Tools"],
    },
    {
      title: "Reconnaissance and Footprinting",
      lectures: 8,
      duration: "3h 45m",
      topics: ["Passive Reconnaissance Techniques", "Active Information Gathering", "Social Engineering Basics", "OSINT Tools and Methods"],
    },
    {
      title: "Scanning and Enumeration",
      lectures: 7,
      duration: "4h 15m",
      topics: ["Port Scanning with Nmap", "Vulnerability Scanning", "Service Enumeration", "Banner Grabbing", "Scanning Countermeasures"],
    },
    {
      title: "Exploitation Techniques",
      lectures: 10,
      duration: "6h 20m",
      topics: ["Introduction to Metasploit", "Web Application Attacks", "Password Cracking", "Privilege Escalation", "Maintaining Access"],
    },
    {
      title: "Defensive Security",
      lectures: 7,
      duration: "4h 10m",
      topics: ["Security Architecture Fundamentals", "Firewall Configuration", "Intrusion Detection Systems", "Incident Response"],
    },
    {
      title: "Security Assessment and Reporting",
      lectures: 5,
      duration: "3h 00m",
      topics: ["Report Writing", "Risk Assessment", "Remediation Planning", "Communicating with Stakeholders"],
    },
  ],
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, we'd fetch course data based on the ID
  const course = courseData;

  return (
    <Layout>
      <div className="py-6">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Course header */}
              <div>
                <Badge className="mb-2">{course.category}</Badge>
                <h1 className="text-2xl font-bold md:text-3xl">{course.title}</h1>
                <p className="mt-3 text-gray-700">{course.description}</p>
              </div>

              {/* Course stats */}
              <div className="flex flex-wrap gap-4 my-6">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="ml-1 text-gray-500">({course.ratingCount} ratings)</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-gray-500" />
                  <span>{course.studentsEnrolled.toLocaleString()} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-gray-500" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1 text-gray-500" />
                  <span>{course.lectures} lectures</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1 text-gray-500" />
                  <span>{course.level}</span>
                </div>
              </div>

              {/* Course tabs */}
              <div className="mt-8">
                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  </TabsList>
                  
                  {/* Overview tab */}
                  <TabsContent value="overview" className="pt-4">
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold">What You'll Learn</h3>
                      <div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex">
                            <Check className="flex-shrink-0 w-5 h-5 mt-0.5 text-learnwise-600" />
                            <span className="ml-2">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Course Details</h3>
                      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Last Updated</h4>
                          <p>{course.updatedDate}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Language</h4>
                          <p>{course.language}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Curriculum tab */}
                  <TabsContent value="curriculum" className="pt-4">
                    <h3 className="text-xl font-semibold">Course Content</h3>
                    <div className="mt-4 text-sm text-gray-600">
                      {course.lectures} lectures • {course.duration} total length
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      {course.curriculum.map((section, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-semibold">
                                  {index + 1}. {section.title}
                                </h4>
                                <p className="mt-1 text-sm text-gray-500">
                                  {section.lectures} lectures • {section.duration}
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 pl-4 border-l-2 border-gray-100">
                              <ul className="space-y-2">
                                {section.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex} className="text-gray-700">
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Instructor tab */}
                  <TabsContent value="instructor" className="pt-4">
                    <div className="flex items-center">
                      <img
                        src={course.instructor.image}
                        alt={course.instructor.name}
                        className="object-cover w-20 h-20 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                        <p className="text-gray-600">{course.category} Instructor</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700">{course.instructor.bio}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Course enrollment card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="object-cover w-full h-full" 
                      />
                    </div>
                    <div className="flex items-center mb-4">
                      {course.discountPrice !== undefined ? (
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-learnwise-700">
                            ${course.discountPrice}
                          </span>
                          <span className="ml-2 text-lg text-gray-500 line-through">
                            ${course.price}
                          </span>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold text-learnwise-700">
                          ${course.price}
                        </span>
                      )}
                    </div>
                    
                    <Button className="w-full mb-3 bg-learnwise-600 hover:bg-learnwise-700">
                      Enroll Now
                    </Button>
                    <Button className="w-full" variant="outline">
                      Add to Wishlist
                    </Button>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 text-sm">
                      <div className="flex">
                        <Check className="flex-shrink-0 w-4 h-4 mt-0.5 text-learnwise-600" />
                        <span className="ml-2">30-day money-back guarantee</span>
                      </div>
                      <div className="flex">
                        <Check className="flex-shrink-0 w-4 h-4 mt-0.5 text-learnwise-600" />
                        <span className="ml-2">Full lifetime access</span>
                      </div>
                      <div className="flex">
                        <Check className="flex-shrink-0 w-4 h-4 mt-0.5 text-learnwise-600" />
                        <span className="ml-2">Certificate of completion</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
