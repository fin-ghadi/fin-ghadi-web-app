"use client"; // Mark this as a Client Component

import { useParams } from "next/navigation";
import ActivityDetail from "@/components/activityDetail";
import Navbar from "@/components/navbar";
const ActivityDetailPage = () => {
  const params = useParams(); // Get all route parameters
  const { id } = params; // Destructure `id` from params

  console.log("ID:", id); // Debugging: Check if `id` is correct

  // In a real app, you'd fetch this data from an API based on the ID
  const activity = {
    id: id as string,
    title: "Mountain Hiking Adventure in Tangier",
    description:
      "Experience breathtaking views of the Tangier coastline on our guided mountain hiking tour. Suitable for all skill levels, this 8-hour adventure includes...",
    location: {
      lat: 35.7776, // Approximate latitude of Tangier
      lng: -5.8084, // Approximate longitude of Tangier
    },
  };

  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container  space-y-8 pb-8">
        <ActivityDetail activity={activity} />
      </div>
    </div>
  );
};

export default ActivityDetailPage;
