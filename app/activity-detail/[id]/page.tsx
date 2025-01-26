"use client"; // Mark this as a Client Component

import { useParams } from "next/navigation";
import ActivityDetail from "@/components/activityDetail";
import { Navbar } from "@/components/navbar";
const ActivityDetailPage = () => {
  const { id } = useParams();

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
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <ActivityDetail activity={activity} />
    </div>
  );
};

export default ActivityDetailPage;
