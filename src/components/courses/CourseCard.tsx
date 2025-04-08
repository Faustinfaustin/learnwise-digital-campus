
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  level: string;
}

const CourseCard = ({
  id,
  title,
  instructor,
  rating,
  ratingCount,
  price,
  discountPrice,
  image,
  category,
  level,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden card-hover flex flex-col h-full">
      <Link to={`/course/${id}`} className="flex-grow">
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
          <Badge
            className="absolute top-2 left-2"
            variant="secondary"
          >
            {category}
          </Badge>
          <Badge
            className="absolute top-2 right-2 bg-learnwise-700"
            variant="outline"
          >
            {level}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{instructor}</p>
          <div className="flex items-center mt-2">
            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="mx-1 text-sm text-gray-400">({ratingCount})</span>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between p-4 pt-0 mt-auto">
        <div>
          {discountPrice !== undefined ? (
            <div className="flex items-center">
              <span className="text-lg font-bold text-learnwise-700">
                ${discountPrice}
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${price}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-learnwise-700">
              ${price}
            </span>
          )}
        </div>
        <Button asChild size="sm" className="bg-learnwise-600 hover:bg-learnwise-700">
          <Link to={`/enroll/${id}`}>Enroll</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
