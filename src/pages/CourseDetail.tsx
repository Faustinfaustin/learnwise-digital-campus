import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Star, PlayCircle, Users, MessageSquare } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Dummy course data
  const course = {
    id: "1",
    title: "Complete Ethical Hacking Bootcamp 2023",
    instructor: "Dr. Alex Johnson",
    rating: 4.8,
    ratingCount: 1243,
    modules: [
      { title: "Introduction to Ethical Hacking", duration: "1h 30m" },
      { title: "Setting up a Lab Environment", duration: "2h" },
      { title: "Footprinting and Reconnaissance", duration: "2h 30m" },
      { title: "Scanning Networks", duration: "1h 45m" },
      { title: "Enumeration", duration: "2h 15m" },
      { title: "Vulnerability Analysis", duration: "2h 45m" },
      { title: "Exploitation", duration: "3h" },
      { title: "Post-Exploitation", duration: "2h 30m" },
      { title: "Web Application Hacking", duration: "3h 15m" },
      { title: "Wireless Hacking", duration: "2h" },
      { title: "Mobile Hacking", duration: "2h 30m" },
      { title: "Cloud Security", duration: "2h 45m" },
      { title: "Cryptography", duration: "1h 30m" },
      { title: "Social Engineering", duration: "2h" },
      { title: "Reporting and Documentation", duration: "1h 45m" },
    ],
    progress: 75,
    description:
      "Learn ethical hacking from scratch and become a certified professional. This course covers the latest tools and techniques used by ethical hackers in 2023.",
    instructorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    students: 5478,
  };

  if (!course) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold">Course not found</h2>
          <Button asChild className="mt-4">
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="container px-4 mx-auto">
          {/* Course Header */}
          <Card className="mb-8">
            <CardHeader className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
              <div>
                <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                <div className="flex items-center mt-2">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src={course.instructorImage} alt={course.instructor} />
                    <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-gray-700">{course.instructor}</span>
                  <span className="ml-2 text-gray-400">|</span>
                  <div className="flex items-center ml-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-gray-700">{course.rating}</span>
                    <span className="text-gray-500 ml-1">({course.ratingCount} ratings)</span>
                  </div>
                </div>
              </div>
              <Button>Enroll Now</Button>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{course.description}</p>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Course Progress</div>
                  <div className="text-sm text-gray-500">{course.progress}%</div>
                </div>
                <Progress value={course.progress} className="mt-2" />
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">{course.modules.length} Modules</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">{course.students}+ Students</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-gray-500" />
                  <Link to="/forum" className="text-sm text-learnwise-600 hover:underline">
                    Discussion Forum
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Content and Details */}
          <Tabs defaultValue="modules">
            <TabsList className="w-full">
              <TabsTrigger value="modules">Course Modules</TabsTrigger>
              <TabsTrigger value="details">Course Details</TabsTrigger>
            </TabsList>
            <TabsContent value="modules" className="mt-6">
              <ul className="space-y-4">
                {course.modules.map((module, index) => (
                  <li key={index} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="mr-3 font-semibold">{index + 1}.</span>
                        <span>{module.title}</span>
                      </div>
                      <div className="text-gray-500">
                        <Clock className="inline-block h-4 w-4 mr-1" />
                        {module.duration}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="details" className="mt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Course Description</h3>
                  <p className="text-gray-700">{course.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Instructor</h3>
                  <div className="flex items-center mt-2">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={course.instructorImage} alt={course.instructor} />
                      <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{course.instructor}</div>
                      <div className="text-sm text-gray-500">Expert in Ethical Hacking</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">What you'll learn</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Understand the core principles of ethical hacking</li>
                    <li>Learn to set up a secure lab environment</li>
                    <li>Master footprinting and reconnaissance techniques</li>
                    <li>Perform vulnerability analysis and exploitation</li>
                    <li>Secure web applications and wireless networks</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Courses */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dummy related courses */}
              {[1, 2, 3].map((i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Related Course {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button variant="link" className="mt-4">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
