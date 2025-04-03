
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Clock,
  Star,
  Award,
  Calendar,
  CheckCircle,
  BarChart,
  MessageSquare,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample user data
const userData = {
  name: "John Smith",
  email: "john.smith@example.com",
  enrolledCourses: 4,
  completedCourses: 1,
  certificatesEarned: 1,
};

// Sample enrolled courses data
const enrolledCourses = [
  {
    id: "1",
    title: "Complete Ethical Hacking Bootcamp 2023",
    instructor: "Dr. Alex Johnson",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    progress: 68,
    category: "Cybersecurity",
    level: "Intermediate",
    lastAccessed: "2 days ago",
  },
  {
    id: "2",
    title: "Machine Learning: From Basics to Advanced",
    instructor: "Prof. Sarah Chen",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    progress: 42,
    category: "Machine Learning",
    level: "All Levels",
    lastAccessed: "5 days ago",
  },
  {
    id: "3",
    title: "Data Analysis Masterclass with Python",
    instructor: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    progress: 23,
    category: "Data Analysis",
    level: "Beginner",
    lastAccessed: "1 week ago",
  },
  {
    id: "4",
    title: "Network Defense & Security Architecture",
    instructor: "Lisa Washington",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80",
    progress: 100,
    category: "Cybersecurity",
    level: "Advanced",
    lastAccessed: "2 weeks ago",
    completed: true,
  },
];

// Sample upcoming events data
const upcomingEvents = [
  {
    id: "1",
    title: "Live Q&A: Cybersecurity Career Paths",
    date: "April 15, 2025",
    time: "14:00 - 15:30",
    instructor: "Dr. Alex Johnson",
  },
  {
    id: "2",
    title: "Workshop: Building Your First ML Model",
    date: "April 18, 2025",
    time: "10:00 - 12:00",
    instructor: "Prof. Sarah Chen",
  },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          <p className="mt-2 text-gray-600">Track your progress and manage your learning journey</p>

          {/* Stats cards */}
          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <BookOpen className="w-8 h-8 text-learnwise-600" />
                <h2 className="mt-4 text-2xl font-bold">{userData.enrolledCourses}</h2>
                <p className="text-gray-500">Enrolled Courses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <CheckCircle className="w-8 h-8 text-teal-600" />
                <h2 className="mt-4 text-2xl font-bold">{userData.completedCourses}</h2>
                <p className="text-gray-500">Completed Courses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Award className="w-8 h-8 text-yellow-500" />
                <h2 className="mt-4 text-2xl font-bold">{userData.certificatesEarned}</h2>
                <p className="text-gray-500">Certificates Earned</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <BarChart className="w-8 h-8 text-purple-600" />
                <h2 className="mt-4 text-2xl font-bold">42</h2>
                <p className="text-gray-500">Hours of Learning</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content tabs */}
          <div className="mt-8">
            <Tabs defaultValue="my-courses">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="my-courses">My Courses</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
              </TabsList>
              
              {/* My Courses tab */}
              <TabsContent value="my-courses" className="pt-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {enrolledCourses.map((course) => (
                    <Link to={`/course/${course.id}`} key={course.id}>
                      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-40">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="object-cover w-full h-full"
                          />
                          {course.completed && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <Badge className="bg-green-500">Completed</Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold line-clamp-1">{course.title}</h3>
                          <p className="text-sm text-gray-500">{course.instructor}</p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex-1 pr-4">
                              <Progress value={course.progress} className="h-2" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                            <span>Last accessed: {course.lastAccessed}</span>
                            <Badge variant="outline" className="ml-2">
                              {course.level}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              
              {/* Events tab */}
              <TabsContent value="events" className="pt-4">
                <div className="grid gap-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-500">By {event.instructor}</p>
                          </div>
                          <div className="flex items-center mt-4 space-x-4 md:mt-0">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                              <span className="text-sm">{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1 text-gray-500" />
                              <span className="text-sm">{event.time}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {upcomingEvents.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No upcoming events</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* Certificates tab */}
              <TabsContent value="certificates" className="pt-4">
                {userData.certificatesEarned > 0 ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardContent className="p-4">
                        <div className="p-4 border border-dashed rounded-lg border-gray-200 flex flex-col items-center justify-center">
                          <Award className="w-12 h-12 text-yellow-500" />
                          <h3 className="mt-4 font-semibold">Network Defense & Security Architecture</h3>
                          <p className="mt-1 text-sm text-gray-500">Completed on March 20, 2023</p>
                          <Badge className="mt-4">Cybersecurity</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Complete courses to earn certificates</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
