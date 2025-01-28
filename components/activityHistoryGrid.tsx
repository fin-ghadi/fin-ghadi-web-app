import React from "react";
import ActivityHistoryCard from "./activityHistoryCard";
import { UserActivity } from "@/types";

interface ActivityHistoryGridProps {
  userActivities: UserActivity[];
}

const ActivityHistoryGrid: React.FC<ActivityHistoryGridProps> = ({ userActivities }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {userActivities.map((userActivity, index) => (
        <ActivityHistoryCard
          key={userActivity.activity?.id || index} // Use activity.id or fallback to index
          userActivity={userActivity}
        />
      ))}
    </div>
  );
};

export default ActivityHistoryGrid;