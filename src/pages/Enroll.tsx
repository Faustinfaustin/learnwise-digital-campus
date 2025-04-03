
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CreditCard, CheckCircle, AlertCircle } from "lucide-react";

const Enroll = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState<"personal" | "payment" | "confirmation">("personal");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulated course data - in a real app, you'd fetch this based on the ID
  const course = {
    id: id || "1",
    title: id === "2" ? "Machine Learning: From Basics to Advanced" : 
           id === "3" ? "Data Analysis Masterclass with Python" : 
           id === "4" ? "Network Defense & Security Architecture" : 
           "Complete Ethical Hacking Bootcamp 2023",
    price: id === "2" ? 59.99 : 
           id === "3" ? 39.99 : 
           id === "4" ? 99.99 : 
           49.99,
  };

  const handleSubmitPersonalInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep("payment");
    window.scrollTo(0, 0);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep("confirmation");
      toast.success("Enrollment successful!");
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleReturn = () => {
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Enroll in Course</h1>
          <p className="text-gray-600">Complete your enrollment for {course.title}</p>
        </div>

        <div className="flex justify-center mb-8">
          <ol className="flex items-center w-full max-w-3xl">
            <li className={`flex items-center ${formStep !== "personal" ? "text-learnwise-600" : ""}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${formStep !== "personal" ? "bg-learnwise-600 border-learnwise-600 text-white" : "border-gray-300"}`}>
                1
              </span>
              <span className="ml-2 text-sm">Personal Info</span>
              <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            </li>
            <li className={`flex items-center ${formStep === "confirmation" ? "text-learnwise-600" : ""}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${formStep === "confirmation" ? "bg-learnwise-600 border-learnwise-600 text-white" : formStep === "payment" ? "border-gray-300" : "border-gray-200 text-gray-400"}`}>
                2
              </span>
              <span className={`ml-2 text-sm ${formStep === "personal" ? "text-gray-400" : ""}`}>Payment</span>
              <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            </li>
            <li className="flex items-center">
              <span className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${formStep === "confirmation" ? "bg-learnwise-600 border-learnwise-600 text-white" : "border-gray-200 text-gray-400"}`}>
                3
              </span>
              <span className={`ml-2 text-sm ${formStep === "confirmation" ? "" : "text-gray-400"}`}>Confirmation</span>
            </li>
          </ol>
        </div>

        {formStep === "personal" && (
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmitPersonalInfo}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-learnwise-600 hover:bg-learnwise-700">Continue to Payment</Button>
              </CardFooter>
            </form>
          </Card>
        )}

        {formStep === "payment" && (
          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmitPayment}>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                    </div>
                    <div className="text-xl font-bold text-learnwise-700">${course.price}</div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input id="cardNumber" required placeholder="1234 5678 9012 3456" />
                    <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" required placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" required placeholder="123" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full bg-learnwise-600 hover:bg-learnwise-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : `Pay $${course.price}`}
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}

        {formStep === "confirmation" && (
          <Card>
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl">Enrollment Successful!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">
                You have successfully enrolled in <strong>{course.title}</strong>. 
                We've sent you an email with all the details and access instructions.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-6 inline-block">
                <p className="text-green-700">Your course is now available in your dashboard.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={handleReturn} className="bg-learnwise-600 hover:bg-learnwise-700">
                Go to Dashboard
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Enroll;
