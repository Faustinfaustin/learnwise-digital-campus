
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const recentDiscussions = [
  {
    id: "1",
    title: "Tips for configuring firewall settings in a Windows environment?",
    course: "Network Defense & Security Architecture",
    replies: 12,
    lastActive: "2 hours ago",
    category: "Cybersecurity",
  },
  {
    id: "2",
    title: "Struggling with training data preparation for my ML model",
    course: "Machine Learning: From Basics to Advanced",
    replies: 8,
    lastActive: "5 hours ago",
    category: "Machine Learning",
  },
  {
    id: "3",
    title: "Best way to visualize time series data in Python?",
    course: "Data Analysis Masterclass with Python",
    replies: 15,
    lastActive: "1 day ago",
    category: "Data Analysis",
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Live Q&A: Cybersecurity Career Paths",
    date: "April 15, 2025",
    time: "14:00 - 15:30",
    instructor: "Dr. Alex Johnson",
  }
];

const ForumPreview = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Community Forum</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Connect with fellow students and instructors in our active learning community
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Recent Discussions</h3>
            <div className="space-y-4">
              {recentDiscussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Link to={`/forum/course/${discussion.id}`} className="font-medium hover:text-learnwise-600 transition-colors">
                      {discussion.title}
                    </Link>
                    <div className="flex flex-wrap items-center mt-2 text-sm">
                      <Badge variant="outline" className="mr-2">{discussion.category}</Badge>
                      <span className="text-gray-500 mr-2">in {discussion.course}</span>
                    </div>
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <div className="flex items-center mr-4">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {discussion.replies} replies
                      </div>
                      <div>Last activity: {discussion.lastActive}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Upcoming Live Events</h3>
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="mb-4 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">with {event.instructor}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    Open to all students
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="bg-gray-100 rounded-lg p-4 mt-6">
              <h4 className="font-medium mb-2">Join The Discussion</h4>
              <p className="text-sm text-gray-600 mb-3">
                Ask questions, share insights, and connect with fellow learners in our active community forum.
              </p>
              <Button asChild className="w-full bg-learnwise-600 hover:bg-learnwise-700">
                <Link to="/forum">Visit Forum</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumPreview;
