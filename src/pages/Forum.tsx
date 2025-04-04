
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageSquare, Users, Calendar, ArrowUpRight } from "lucide-react";

// Sample forum data - in a real app, this would come from an API
const forumCategories = [
  { id: "cybersecurity", name: "Cybersecurity", count: 142 },
  { id: "machine-learning", name: "Machine Learning", count: 98 },
  { id: "data-analysis", name: "Data Analysis", count: 76 },
  { id: "programming", name: "Programming", count: 115 },
  { id: "networking", name: "Networking", count: 63 },
];

const popularDiscussions = [
  {
    id: "1",
    courseId: "1",
    course: "Complete Ethical Hacking Bootcamp 2023",
    title: "Best tools for penetration testing in 2025?",
    author: "Alex Johnson",
    replies: 24,
    views: 342,
    lastActivity: "2 hours ago",
    tags: ["tools", "pentesting", "cybersecurity"],
  },
  {
    id: "2",
    courseId: "2",
    course: "Machine Learning: From Basics to Advanced",
    title: "Comparing TensorFlow vs PyTorch for NLP tasks",
    author: "Sarah Chen",
    replies: 18,
    views: 256,
    lastActivity: "6 hours ago",
    tags: ["nlp", "tensorflow", "pytorch"],
  },
  {
    id: "3",
    courseId: "3",
    course: "Data Analysis Masterclass with Python",
    title: "How to optimize pandas for large datasets?",
    author: "Michael Rodriguez",
    replies: 32,
    views: 410,
    lastActivity: "1 day ago",
    tags: ["pandas", "performance", "big-data"],
  },
  {
    id: "4",
    courseId: "1",
    course: "Complete Ethical Hacking Bootcamp 2023",
    title: "Setting up a secure home lab environment",
    author: "Lisa Washington",
    replies: 15,
    views: 189,
    lastActivity: "2 days ago",
    tags: ["lab", "virtualization", "security"],
  },
];

const upcomingQASessions = [
  {
    id: "1",
    title: "Cybersecurity Career Paths Q&A",
    instructor: "Dr. Alex Johnson",
    date: "April 15, 2025",
    time: "14:00 - 15:30",
    course: "Complete Ethical Hacking Bootcamp 2023",
    courseId: "1",
  },
  {
    id: "2",
    title: "Building Your First ML Model: Live Session",
    instructor: "Prof. Sarah Chen",
    date: "April 18, 2025",
    time: "10:00 - 12:00",
    course: "Machine Learning: From Basics to Advanced",
    courseId: "2",
  },
];

const Forum = () => {
  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Learning Community</h1>
              <p className="mt-2 text-gray-600">Discuss courses, ask questions, and connect with fellow learners</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" asChild>
                <Link to="/dashboard">My Discussions</Link>
              </Button>
              <Button>Start New Discussion</Button>
            </div>
          </div>

          {/* Search and filter */}
          <div className="flex flex-col mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                className="pl-10" 
                placeholder="Search discussions..." 
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Latest</Button>
              <Button variant="outline" size="sm">Popular</Button>
              <Button variant="outline" size="sm">Unanswered</Button>
            </div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            {/* Side panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <Card>
                <CardContent className="p-5">
                  <h3 className="text-lg font-medium">Categories</h3>
                  <div className="mt-4 space-y-3">
                    {forumCategories.map(category => (
                      <div key={category.id} className="flex justify-between items-center">
                        <Link to={`/forum?category=${category.id}`} className="text-gray-700 hover:text-learnwise-600 transition-colors">
                          {category.name}
                        </Link>
                        <Badge variant="outline">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Q&A Sessions */}
              <Card>
                <CardContent className="p-5">
                  <h3 className="text-lg font-medium">Upcoming Q&A Sessions</h3>
                  <div className="mt-4 space-y-4">
                    {upcomingQASessions.map(session => (
                      <Card key={session.id} className="border border-gray-200">
                        <CardContent className="p-4">
                          <h4 className="font-medium">{session.title}</h4>
                          <p className="text-sm text-gray-500">{session.instructor}</p>
                          <div className="mt-2 text-sm flex justify-between">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              {session.date}
                            </div>
                            <span>{session.time}</span>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-3 w-full"
                            asChild
                          >
                            <Link to={`/forum/course/${session.courseId}`}>
                              Join Session
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main discussions list */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="discussions">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="discussions">Course Discussions</TabsTrigger>
                  <TabsTrigger value="qa">Q&A Forum</TabsTrigger>
                </TabsList>

                <TabsContent value="discussions" className="pt-4">
                  <div className="space-y-4">
                    {popularDiscussions.map(discussion => (
                      <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between">
                            <div>
                              <Link 
                                to={`/forum/course/${discussion.courseId}`}
                                className="text-sm font-medium text-learnwise-600 hover:underline"
                              >
                                {discussion.course}
                              </Link>
                              <h3 className="mt-1 font-semibold hover:text-learnwise-700">
                                <Link to={`/forum/course/${discussion.courseId}?topic=${discussion.id}`}>
                                  {discussion.title}
                                </Link>
                              </h3>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {discussion.tags.map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Link 
                              to={`/forum/course/${discussion.courseId}?topic=${discussion.id}`}
                              className="text-gray-400 hover:text-learnwise-600"
                            >
                              <ArrowUpRight className="h-5 w-5" />
                            </Link>
                          </div>

                          <div className="mt-4 flex flex-wrap items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                <span>{discussion.replies} replies</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                <span>{discussion.views} views</span>
                              </div>
                            </div>
                            <div className="text-sm">
                              <span>Last reply {discussion.lastActivity}</span>
                              <span className="mx-1">•</span>
                              <span>by {discussion.author}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <div className="flex justify-center mt-6">
                      <Button variant="outline">Load More Discussions</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qa" className="pt-4">
                  <div className="p-8 text-center border rounded-md">
                    <h3 className="text-lg font-medium">Instructor Q&A</h3>
                    <p className="mt-2 text-gray-600">
                      Ask questions directly to course instructors and get expert answers
                    </p>
                    <Button className="mt-4">Ask a Question</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Forum;
