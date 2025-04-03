
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for beginners to explore our platform",
    features: [
      "Access to free courses",
      "Limited course materials",
      "Community forum access",
      "Mobile app access",
      "Course completion certificates",
    ],
    notIncluded: [
      "Advanced courses",
      "Live Q&A sessions",
      "Downloadable resources",
      "1-on-1 instructor support",
      "Project reviews & feedback",
    ],
    highlighted: false,
    color: "bg-gray-100",
    buttonVariant: "outline",
    link: "/register?plan=free",
  },
  {
    name: "Pro",
    price: 19.99,
    priceDetail: "per month",
    description: "Our most popular plan for serious learners",
    features: [
      "Access to all courses",
      "Complete course materials",
      "Community forum access",
      "Mobile app access",
      "Course completion certificates",
      "Downloadable resources",
      "Live Q&A sessions",
      "Project reviews & feedback",
    ],
    notIncluded: [
      "1-on-1 instructor support",
      "Career counseling sessions",
    ],
    highlighted: true,
    color: "bg-gradient-to-r from-learnwise-700 to-teal-600",
    buttonVariant: "default",
    link: "/register?plan=pro",
  },
  {
    name: "Enterprise",
    price: 49.99,
    priceDetail: "per month",
    description: "Comprehensive learning for teams and professionals",
    features: [
      "Access to all courses",
      "Complete course materials",
      "Community forum access",
      "Mobile app access",
      "Course completion certificates",
      "Downloadable resources",
      "Live Q&A sessions",
      "Project reviews & feedback",
      "1-on-1 instructor support",
      "Career counseling sessions",
      "Team management dashboard",
      "API access",
    ],
    notIncluded: [],
    highlighted: false,
    color: "bg-gray-100",
    buttonVariant: "outline",
    link: "/register?plan=enterprise",
  },
];

const FAQ = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to all features included in your new plan. When downgrading, the changes will take effect at the end of your current billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with your subscription within the first 14 days, contact our support team for a full refund."
  },
  {
    question: "Are courses available offline?",
    answer: "Pro and Enterprise plan subscribers can download course content for offline viewing through our mobile app. Free plan users need an internet connection to access course materials."
  },
  {
    question: "How many devices can I use?",
    answer: "We allow unlimited devices per account, but we limit concurrent streaming to 2 devices for Pro plans and 5 devices for Enterprise plans to prevent account sharing."
  },
  {
    question: "Do you offer special pricing for students?",
    answer: "Yes, we offer a 50% discount on Pro plans for students with a valid student email address. Contact our support team with proof of your academic status to apply for the discount."
  },
];

const Pricing = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan to accelerate your learning journey with LearnWise
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`rounded-2xl overflow-hidden ${plan.highlighted ? "ring-2 ring-learnwise-600 shadow-xl -mt-4 md:-mt-6" : "shadow-md"} relative`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-learnwise-600 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`${plan.color} ${plan.highlighted ? "text-white" : ""}`}>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : ""}`}>{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold">${plan.price}</span>
                      {plan.priceDetail && <span className="ml-1 text-xl">{plan.priceDetail}</span>}
                    </div>
                    <p className="mt-2 text-sm opacity-90">{plan.description}</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-400">
                        <X className="h-5 w-5 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    variant={plan.buttonVariant as any} 
                    className={`w-full ${plan.buttonVariant === "default" ? "bg-learnwise-600 hover:bg-learnwise-700" : ""} mt-2`}
                  >
                    <Link to={plan.link}>
                      {plan.price === 0 ? "Start for Free" : "Subscribe Now"}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-200">
              {FAQ.map((item, index) => (
                <div key={index} className="py-5">
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">Our team is here to help you choose the right plan for your needs</p>
            <Button 
              asChild
              variant="outline" 
              className="mx-auto"
            >
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
