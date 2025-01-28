import React from "react";
import VerticalScrollActivities from "@/components/verticalScrollActivities";
import { Activity } from "@/types"; // Assuming your updated Activity interface is imported from "@/types"

// Static sample data
const sampleActivities: Activity[] = [
  {
    id: "1",
    name: "Hiking at Mount Rainier", // Updated to match the new interface
    description: "A beautiful hike with stunning views of the mountain.",
    address: "Mount Rainier National Park, WA",
    location: {
      latitude: 46.8797, // Sample latitudeitude
      longitude: -121.7269, // Sample longitude
    },
    type: "Outdoor",
    rating: 4,
  },
  {
    id: "2",
    name: "Visit to the Space Needle",
    description: "Enjoyed the panoramic views of Seattle from the top.",
    address: "Space Needle, Seattle, WA",
    location: {
      latitude: 47.6205,
      longitude: -122.3493,
    },
    type: "Sightseeing",
    rating: 5,
  },
  {
    id: "3",
    name: "Kayaking on Lake Union",
    description: "A relaxing day paddling on the lake.",
    address: "Lake Union, Seattle, WA",
    location: {
      latitude: 47.6484,
      longitude: -122.3555,
    },
    type: "Water Activity",
    rating: 3,
  },
  {
    id: "4",
    name: "Exploring Pike Place Market",
    description: "Visited the famous market and tried local delicacies.",
    address: "Pike Place Market, Seattle, WA",
    location: {
      latitude: 47.6097,
      longitude: -122.3426,
    },
    type: "Market",
    rating: 4.5,
  },
  {
    id: "5",
    name: "Biking the Burke-Gilman Trail",
    description: "A scenic bike ride along the trail.",
    address: "Burke-Gilman Trail, Seattle, WA",
    location: {
      latitude: 47.6832,
      longitude: -122.3393,
    },
    type: "Outdoor",
    rating: 4,
  },
];

const ActivitiesPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Activities</h1>
      <VerticalScrollActivities activities={sampleActivities} />
    </div>
  );
};

export default ActivitiesPage;
