import React from "react";
import VerticalScrollActivities from "@/components/verticalScrollActivities";

// Define the Activity interface
interface Activity {
  id: string;
  title: string;
  description: string;
  date: string; // Date when the activity was done
  rating?: number; // Rating on a scale of 5 (optional)
}

// Static sample data
const sampleActivities: Activity[] = [
  {
    id: "1",
    title: "Hiking at Mount Rainier",
    description: "A beautiful hike with stunning views of the mountain.",
    date: "2023-10-15",
    rating: 4,
  },
  {
    id: "2",
    title: "Visit to the Space Needle",
    description: "Enjoyed the panoramic views of Seattle from the top.",
    date: "2023-10-10",
    rating: 5,
  },
  {
    id: "3",
    title: "Kayaking on Lake Union",
    description: "A relaxing day paddling on the lake.",
    date: "2023-10-05",
    rating: 3,
  },
  {
    id: "4",
    title: "Exploring Pike Place Market",
    description: "Visited the famous market and tried local delicacies.",
    date: "2023-10-01",
    rating: 4.5,
  },
  {
    id: "5",
    title: "Biking the Burke-Gilman Trail",
    description: "A scenic bike ride along the trail.",
    date: "2023-09-28",
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