
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Reply, 
  ChevronLeft, 
  Star,
  Calendar,
  Video,
  Clock 
} from "lucide-react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";

// Sample course data
const coursesData = {
  "1": {
    id: "1",
    title: "Complete Ethical Hacking Bootcamp 2023",
    instructor: {
      name: "Dr. Alex Johnson",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    rating: 4.8,
    ratingCount: 1243,
  }
};

// Sample discussion data
const discussionData = [
  {
    id: "1",
    courseId: "1",
    title: "Best tools for penetration testing in 2025?",
    content: "I'm looking to build my toolkit for penetration testing. What are the current must-have tools in 2025 that professionals are using? I've been using Kali Linux with the standard suite, but I'd love to hear about any specialized tools that might be more efficient for specific tasks.",
    author: {
      name: "Alex Stevens",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      role: "Student",
    },
    date: "April 2, 2025",
    tags: ["tools", "pentesting", "cybersecurity"],
    replies: [
      {
        id: "1-1",
        content: "For web application testing, I'd highly recommend OWASP ZAP and Burp Suite Professional. Burp has some great new features in the 2025 release that automate a lot of the tedious testing. For network analysis, Wireshark is still the gold standard but take a look at NetworkMiner as well for quick host information extraction.",
        author: {
          name: "Lisa Washington",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          role: "Security Specialist",
          isInstructor: true,
        },
        date: "April 2, 2025",
        votes: 15,
      },
      {
        id: "1-2",
        content: "Don't forget about PowerShell Empire for post-exploitation. It's gotten some great updates lately that make it more stealthy against modern endpoint protection. Also, Covenant is worth looking at as an alternative C2 framework.",
        author: {
          name: "James Wilson",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          role: "Ethical Hacker",
        },
        date: "April 3, 2025",
        votes: 8,
      },
    ],
  },
  {
    id: "4",
    courseId: "1",
    title: "Setting up a secure home lab environment",
    content: "I want to practice the techniques from this course, but I'm not sure about the best way to set up a secure, isolated lab environment at home. What virtualization software do you recommend? And what's the minimum hardware I should have to run a decent lab with multiple virtual machines?",
    author: {
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      role: "Student",
    },
    date: "April 1, 2025",
    tags: ["lab", "virtualization", "security"],
    replies: [
      {
        id: "4-1",
        content: "VMware Workstation Pro or VirtualBox are both good options. I personally prefer VMware for its networking capabilities. For hardware, aim for at least 16GB RAM, a modern CPU with 4+ cores, and an SSD with 250GB+ free space. That should let you run 3-4 VMs simultaneously without performance issues.",
        author: {
          name: "Dr. Alex Johnson",
          image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          role: "Instructor",
          isInstructor: true,
        },
        date: "April 1, 2025",
        votes: 21,
      },
    ],
  },
];

// Sample upcoming Q&A session
const upcomingQA = {
  id: "1",
  title: "Cybersecurity Career Paths Q&A",
  instructor: "Dr. Alex Johnson",
  date: "April 15, 2025",
  time: "14:00 - 15:30",
  course: "Complete Ethical Hacking Bootcamp 2023",
  description: "Join this live session to learn about the various career paths in cybersecurity, including roles, certifications, and skills needed for each specialty. Dr. Johnson will share insights from his 15+ years of industry experience and answer your questions about breaking into the field.",
  topics: [
    "Security Analyst vs. Penetration Tester roles",
    "Essential certifications for 2025",
    "Building a portfolio to demonstrate skills",
    "Transitioning from general IT to security roles",
    "Salary expectations and market trends"
  ]
};

const CourseDiscussion = () => {
  const { id } = useParams<{ id: string }>();
  const [newReply, setNewReply] = useState("");
  const course = coursesData[id as keyof typeof coursesData];
  
  // In a real app, filter discussions based on course ID
  const discussions = discussionData.filter(
    discussion => discussion.courseId === id
  );

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reply submitted: " + newReply);
    setNewReply("");
  };

  if (!course) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold">Course not found</h2>
          <Button asChild className="mt-4">
            <Link to="/forum">Back to Forum</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="container px-4 mx-auto">
          {/* Header with course info */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/forum">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to Forum
              </Link>
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{course.title}</h1>
                <div className="flex items-center mt-2 space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="ml-1 text-gray-500">({course.ratingCount} ratings)</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={course.instructor.image} />
                      <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{course.instructor.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Button>Start New Discussion</Button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main discussions list */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="discussions">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                  <TabsTrigger value="qa">Q&A Sessions</TabsTrigger>
                </TabsList>
                
                {/* Discussions tab */}
                <TabsContent value="discussions" className="pt-4">
                  <div className="space-y-8">
                    {discussions.map(discussion => (
                      <Card key={discussion.id} className="overflow-hidden">
                        <CardHeader className="bg-gray-50 p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-semibold">{discussion.title}</h3>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {discussion.tags.map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 text-right">
                              <div>Posted on {discussion.date}</div>
                              <div>Topic #{discussion.id}</div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          {/* Original post */}
                          <div className="p-4 border-b">
                            <div className="flex items-start space-x-4">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={discussion.author.image} alt={discussion.author.name} />
                                <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <span className="font-medium">{discussion.author.name}</span>
                                  <Badge variant="outline" className="ml-2 px-1 text-xs">
                                    {discussion.author.role}
                                  </Badge>
                                </div>
                                <p className="mt-2 text-gray-700">{discussion.content}</p>
                                <div className="mt-4 flex items-center space-x-4 text-sm">
                                  <Button variant="ghost" size="sm" className="h-8 px-2">
                                    <ThumbsUp className="mr-1 h-4 w-4" />
                                    Like
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 px-2">
                                    <Reply className="mr-1 h-4 w-4" />
                                    Reply
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Replies */}
                          {discussion.replies.map(reply => (
                            <div key={reply.id} className="p-4 border-b bg-gray-50">
                              <div className="flex items-start space-x-4">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={reply.author.image} alt={reply.author.name} />
                                  <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center">
                                    <span className="font-medium">{reply.author.name}</span>
                                    <Badge 
                                      variant={reply.author.isInstructor ? "default" : "outline"} 
                                      className={`ml-2 px-1 text-xs ${reply.author.isInstructor ? "bg-learnwise-600" : ""}`}
                                    >
                                      {reply.author.role}
                                    </Badge>
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">{reply.date}</div>
                                  <p className="mt-2 text-gray-700">{reply.content}</p>
                                  <div className="mt-3 flex items-center space-x-4 text-sm">
                                    <div className="flex items-center space-x-1">
                                      <Button variant="ghost" size="sm" className="h-6 px-1">
                                        <ThumbsUp className="h-3.5 w-3.5" />
                                      </Button>
                                      <span className="text-sm">{reply.votes}</span>
                                      <Button variant="ghost" size="sm" className="h-6 px-1">
                                        <ThumbsDown className="h-3.5 w-3.5" />
                                      </Button>
                                    </div>
                                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                                      Reply
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          
                          {/* Reply form */}
                          <div className="p-4">
                            <h4 className="font-medium">Add a reply</h4>
                            <form onSubmit={handleSubmitReply} className="mt-2">
                              <Textarea 
                                value={newReply}
                                onChange={(e) => setNewReply(e.target.value)}
                                placeholder="Write your reply here..." 
                                className="min-h-[100px]"
                              />
                              <div className="mt-3 flex justify-end">
                                <Button type="submit" disabled={!newReply.trim()}>
                                  Post Reply
                                </Button>
                              </div>
                            </form>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Q&A Sessions tab */}
                <TabsContent value="qa" className="pt-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold">{upcomingQA.title}</h3>
                          <div className="mt-2 flex items-center text-gray-600">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src={course.instructor.image} />
                              <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{upcomingQA.instructor}</span>
                          </div>
                        </div>
                        <Button>Join Session</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 border-y">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-learnwise-600" />
                            <span>{upcomingQA.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-learnwise-600" />
                            <span>{upcomingQA.time}</span>
                          </div>
                        </div>
                        <div className="mt-3 md:mt-0">
                          <Badge variant="outline" className="flex items-center">
                            <Video className="h-3.5 w-3.5 mr-1" />
                            Live Session
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-700">{upcomingQA.description}</p>
                        
                        <h4 className="font-medium mt-4 mb-2">Topics to be covered:</h4>
                        <ul className="space-y-1">
                          {upcomingQA.topics.map((topic, index) => (
                            <li key={index} className="flex items-start">
                              <span className="bg-gray-200 text-gray-700 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                                {index + 1}
                              </span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6">
                          <h4 className="font-medium mb-2">Submit your questions in advance:</h4>
                          <Textarea 
                            placeholder="What would you like to ask the instructor?" 
                            className="min-h-[80px]"
                          />
                          <div className="mt-3 flex justify-end">
                            <Button>Submit Question</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Past Q&A Sessions</h3>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center py-8">
                          <MessageSquare className="mx-auto h-10 w-10 text-gray-400" />
                          <p className="mt-2 text-gray-500">No past sessions available for this course yet</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Course rating */}
              <Card>
                <CardContent className="p-5">
                  <h3 className="text-lg font-medium">Course Rating</h3>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="text-4xl font-bold text-gray-900">{course.rating}</div>
                    <div className="ml-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {course.ratingCount} ratings
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Rate This Course
                  </Button>
                </CardContent>
              </Card>
              
              {/* Popular topics */}
              <Card>
                <CardContent className="p-5">
                  <h3 className="text-lg font-medium">Popular Topics</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">pentesting</Badge>
                    <Badge variant="secondary">virtualization</Badge>
                    <Badge variant="secondary">tools</Badge>
                    <Badge variant="secondary">lab setup</Badge>
                    <Badge variant="secondary">security</Badge>
                    <Badge variant="secondary">career</Badge>
                    <Badge variant="secondary">certifications</Badge>
                  </div>
                </CardContent>
              </Card>
              
              {/* Guidelines */}
              <Card>
                <CardContent className="p-5">
                  <h3 className="text-lg font-medium">Community Guidelines</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>• Be respectful and supportive to fellow learners</li>
                    <li>• Stay on topic and use appropriate tags</li>
                    <li>• Do not share answers to assessments or quizzes</li>
                    <li>• Share code or configurations using code blocks</li>
                    <li>• Report inappropriate content to moderators</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDiscussion;
