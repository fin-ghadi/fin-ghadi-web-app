"use client";

import { Spacer } from "@nextui-org/spacer";
import Map from "./map";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { FaCheckCircle } from "react-icons/fa";
import { Activity } from "@/types"; // Import the Activity model

interface ActivityDetailProps {
  activity: Activity;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity }) => {
  const [isDone, setIsDone] = useState(false); // State to track if activity is done
  const [rating, setRating] = useState(0); // State to store the rating

  // Function to handle marking the activity as done
  const handleMarkAsDone = () => {
    setIsDone(true);
  };

  // Function to handle rating submission
  const handleRatingSubmit = () => {
    alert(`Thank you for rating this activity with ${rating} stars!`);
    // You can add logic here to save the rating to your backend
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Activity Title */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        {activity.name}
      </h1>

      {/* Activity Address */}
      <div className="prose max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-600">
          {activity.address || "Address not provided"}
        </p>
      </div>

      <Spacer y={2} />

      {/* Location Map */}
      <div className="max-w-2xl mx-auto">
        <Map location={activity.location} />
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Details</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Type: {activity.type}</li>
            {activity.rating && <li>Rating: {activity.rating} stars</li>}
            {activity.distance && <li>Distance: {activity.distance} meters</li>}
            {activity.opening_hours && (
              <li>Opening Hours: {activity.opening_hours}</li>
            )}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="text-gray-600">
            {activity.phone ? `Phone: ${activity.phone}` : "Phone not provided"}
            <br />
            {activity.website ? (
              <a
                href={activity.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Visit Website
              </a>
            ) : (
              "Website not provided"
            )}
          </p>
        </div>
      </div>

      {/* Activity Description */}
      <div className="prose max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-600">
          {activity.description || "No description available"}
        </p>
      </div>

      {/* Success Button and Rating System */}
      <div className="flex flex-col items-center justify-center space-y-4">
        {!isDone ? (
          // Big Success Button
          <Button
            color="success"
            size="lg"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all"
            startContent={<FaCheckCircle size={20} />}
            onPress={handleMarkAsDone}
          >
            Mark as Done
          </Button>
        ) : (
          // Rating System
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              How was your experience?
            </h2>
            <Button
              color="primary"
              size="md"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all"
              onPress={handleRatingSubmit}
            >
              Submit Rating
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityDetail;
