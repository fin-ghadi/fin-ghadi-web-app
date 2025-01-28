import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Activity, UserActivity } from "@/types";

interface ActivityHistoryCardProps {
  userActivity: UserActivity;
}

const ActivityHistoryCard: React.FC<ActivityHistoryCardProps> = ({ userActivity }) => {
  // Helper function to render stars
  const renderStars = (rating: number | undefined) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= (rating || 0) ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-gray-400" />
        )
      );
    }
    return stars;
  };

  // Safely access activity and timestamp
  const activity = userActivity.activity;
  const timestamp = userActivity.timestamp;

  // Check if activity exists
  if (!activity) {
    return <div className="border rounded-2xl shadow-lg p-6 bg-white">Activity data is missing.</div>;
  }

  return (
    <div className="border rounded-2xl shadow-lg p-6 bg-white space-y-4">
      {/* Activity Title */}
      <h2 className="text-xl font-bold text-gray-800">{activity.name}</h2>

      {/* Activity Date */}
      <p className="text-sm text-gray-500">
        Completed on: {timestamp ? new Date(timestamp).toDateString() : "N/A"}
      </p>

      {/* Activity Description */}
      <p className="text-gray-700">{activity.description || "No description available."}</p>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Rating:</span>
        <div className="flex">{renderStars(activity.rating)}</div>
      </div>

      {/* Rate Button (if user hasn't rated yet) */}
      {!userActivity.userRating && (
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Rate this activity
        </button>
      )}
    </div>
  );
};

export default ActivityHistoryCard;