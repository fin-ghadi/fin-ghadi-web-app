"use client";

import { Spacer } from "@nextui-org/spacer";
import Map from "./map";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import {
  FaCheckCircle,
  FaClock,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Activity } from "@/types";

import { MdConstruction } from "react-icons/md";
import { toast } from "react-hot-toast"; // For toast notifications

interface ActivityDetailProps {
  activity: Activity;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity }) => {
  const [isDone, setIsDone] = useState(false); // State to track if activity is done
  const [rating, setRating] = useState<"happy" | "sad" | "no_comment">(
    "no_comment"
  ); // State to store the rating

  // Function to handle marking the activity as done
  const handleMarkAsDone = () => {
    setIsDone(true);
  };

  const handleEmojiSelection = (emoji: string) => {
    if (emoji === "happy") {
      toast.success("You selected: 😊 Happy");
    } else if (emoji === "sad") {
      toast.error("You selected: 😞 Sad");
    } else {
      toast("You selected: No Comment");
    }
  };

  return (
    <div>
      <div className="container space-y-8 pb-8">
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
          {/* Activity Name */}
          <h1 className="text-4xl font-bold text-center text-gray-800 flex flex-col items-center">
            {activity.name} 🌟
          </h1>

          {/* Description */}
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto leading-7">
            {activity.description}
          </p>

          {/* Activity Address */}
          <div className="prose max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" />{" "}
              {activity.address || "Address not provided"}
            </p>
          </div>

          {/* Location Map */}
          <div className="max-w-2xl mx-auto">
            <Map location={activity.location} />
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Details 📋
              </h2>
              <div
                className="list-disc pl-6 text-gray-600 "
                style={{
                  display: "block",
                  justifyContent: "start",
                }}
              >
                <div>Type: {activity.type}</div>
                {activity.rating && (
                  <div>Rating: ⭐ {activity.rating} stars</div>
                )}
                {activity.distance && (
                  <div>Distance: 📏 {activity.distance} meters</div>
                )}
                {activity.opening_hours && (
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-blue-500" />{" "}
                    {activity.opening_hours}
                  </div>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4 flex">
              <h2 className="text-2xl font-semibold text-gray-800">
                Contact 📞
              </h2>
              <p className="text-gray-600">
                {activity.phone ? (
                  <span className="flex items-center">
                    <FaPhone className="mr-2 text-green-500" /> {activity.phone}
                  </span>
                ) : (
                  "Phone not provided"
                )}
                <br />
                {activity.website ? (
                  <a
                    href={activity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline flex items-center"
                  >
                    <FaGlobe className="mr-2" /> Visit Website
                  </a>
                ) : (
                  "Website not provided"
                )}
              </p>
            </div>
          </div>

          {/* Construction Updates */}
          <div className="prose max-w-2xl mx-auto text-center bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center">
              <MdConstruction className="mr-2 text-yellow-600" /> Construction
            </h3>
            <p className="text-lg text-gray-600 leading-7">
              {activity.constructions}
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
              // Rating System with Emojis
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  How was your experience?
                </h2>
                <div className="flex space-x-4">
                  <Button
                    color="warning"
                    onPress={() => handleEmojiSelection("happy")}
                    variant="light"
                    size="lg"
                  >
                    😊 Happy
                  </Button>
                  <Button
                    color="danger"
                    variant="light"
                    size="lg"
                    onPress={() => handleEmojiSelection("sad")}
                  >
                    😞 Sad
                  </Button>
                  <Button
                    color="secondary"
                    onPress={() => handleEmojiSelection("no_comment")}
                    variant="light"
                    size="lg"
                  >
                    No Comment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
