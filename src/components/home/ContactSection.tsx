
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you soon.");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Contact Us</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-learnwise-700">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-learnwise-100 p-2 rounded-full mr-3">
                  <Mail className="h-5 w-5 text-learnwise-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">Email</h4>
                  <a href="mailto:djakbafaustin20@gmail.com" className="text-learnwise-600 hover:underline">
                    djakbafaustin20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-learnwise-100 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-learnwise-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">Phone</h4>
                  <a href="tel:+237693932762" className="text-learnwise-600 hover:underline">
                    +237 693932762
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-learnwise-100 p-2 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-learnwise-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">Office</h4>
                  <p className="text-gray-600 text-sm">
                    LearnWise HQ, Digital Campus<br />
                    Tech Innovation District<br />
                    Yaoundé, Cameroon
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-learnwise-700">Quick Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Input id="name" placeholder="Your name" required />
              </div>
              
              <div>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              
              <div>
                <Textarea id="message" placeholder="Your message..." className="min-h-[100px]" required />
              </div>
              
              <Button type="submit" className="w-full bg-learnwise-600 hover:bg-learnwise-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/contact">View Full Contact Information</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
