"use client";
import React from "react";
import ActivityCard from "./activityCard";

interface Activity {
  id: string;
  image: any;
  title: string;
  description: string;
}

interface VerticalScrollActivitiesProps {
  activities: Activity[];
}

const VerticalScrollActivities: React.FC<VerticalScrollActivitiesProps> = ({
  activities,
}) => {
  return (
    <div className="min-h-screen p-4 overflow-y-auto">
      <div className="flex items-center justify-center min-h-[calc(100vh-2rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl w-full">
          {activities.map((activity) => (
            <div key={activity.id} className="flex-shrink-0 w-full">
              <ActivityCard
                image={activity.image}
                title={activity.title}
                description={activity.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollActivities;