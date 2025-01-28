import React from "react";
import ActivityHistoryGrid from "@/components/activityHistoryGrid";
import { UserActivity, User, Activity } from "@/types";

// Static sample data
const sampleUserActivities: UserActivity[] = [
  {
    id: "1",
    user: {
      id: "1",
      fullName: "John Doe",
      email: "john@example.com",
      password: "password",
      gender: "Male",
      age: 30,
    },
    activity: {
      id: "1",
      name: "Hiking at Mount Rainier",
      description: "A beautiful hike with stunning views of the mountain.",
      address: "Mount Rainier, WA",
      location: { latitude: 46.8523, longitude: -121.7603 },
      type: "Outdoor",
      rating: 4.5,
      distance: 10.5,
    },
    timestamp: new Date("2023-10-15"),
    userRating: 4,
  },
  {
    id: "2",
    user: {
      id: "2",
      fullName: "Jane Smith",
      email: "jane@example.com",
      password: "password",
      gender: "Female",
      age: 25,
    },
    activity: {
      id: "2",
      name: "Visit to the Space Needle",
      description: "Enjoyed the panoramic views of Seattle from the top.",
      address: "Seattle, WA",
      location: { latitude: 47.6205, longitude: -122.3493 },
      type: "Sightseeing",
      rating: 5,
      distance: 5.2,
    },
    timestamp: new Date("2023-10-10"),
    userRating: 5,
  },
  {
    id: "3",
    user: {
      id: "3",
      fullName: "Alice Johnson",
      email: "alice@example.com",
      password: "password",
      gender: "Female",
      age: 28,
    },
    activity: {
      id: "3",
      name: "Kayaking on Lake Union",
      description: "A relaxing day paddling on the lake.",
      address: "Lake Union, WA",
      location: { latitude: 47.6423, longitude: -122.3331 },
      type: "Outdoor",
      rating: 3,
      distance: 2.5,

    },
    timestamp: new Date("2023-10-05"),
    userRating: 3,
  },
];

const HistoryPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Activity History</h1>
      <ActivityHistoryGrid userActivities={sampleUserActivities} />
    </div>
  );
};

export default HistoryPage;