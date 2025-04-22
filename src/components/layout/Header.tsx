import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Laptop } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Laptop className="w-8 h-8 mr-2 text-learnwise-700" />
          <span className="text-2xl font-bold text-learnwise-700">
            LearnWise<span className="text-teal-600">Technology</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/courses" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
            Courses
          </Link>
          <Link to="/categories" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
            Categories
          </Link>
          <Link to="/pricing" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
            Pricing
          </Link>
          <Link to="/testimonials" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
            Testimonials
          </Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
            About
          </Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
            Contact
          </Link>
        </nav>

        {/* Search, Auth buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="w-5 h-5" />
          </Button>
          
          {isLoggedIn ? (
            <Link to="/dashboard">
              <Avatar className="cursor-pointer">
                <AvatarFallback className="bg-learnwise-100 text-learnwise-700">JS</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button variant="default" className="bg-learnwise-600 hover:bg-learnwise-700" asChild>
                <Link to="/register">Sign up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 p-4 bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-3">
              <Link
                to="/courses"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/categories"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/pricing"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/testimonials"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2 border-t border-gray-200">
                {isLoggedIn ? (
                  <Link 
                    to="/dashboard"
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Avatar className="w-6 h-6 mr-2">
                      <AvatarFallback className="text-xs bg-learnwise-100 text-learnwise-700">JS</AvatarFallback>
                    </Avatar>
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link 
                      to="/login"
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Button 
                      className="w-full mt-2 bg-learnwise-600 hover:bg-learnwise-700" 
                      onClick={() => setIsMenuOpen(false)}
                      asChild
                    >
                      <Link to="/register">Sign up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
