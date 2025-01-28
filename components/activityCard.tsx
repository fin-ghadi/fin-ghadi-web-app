import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Importing star icons
import { useRouter } from "next/navigation";
import { Activity } from "@/types"; // Assuming Activity interface is already imported

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const router = useRouter();

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

  // Handle card click
  const handleClick = () => {
    router.push(`/activity-detail/${activity.id}`); // Navigate to the activity detail page
  };

  return (
    <div
      onClick={handleClick} // Make the card clickable
      className="border rounded-2xl shadow-lg p-6 bg-white space-y-4 cursor-pointer hover:shadow-md transition-shadow duration-200"
    >
      {/* Activity Title */}
      <h2 className="text-xl font-bold text-gray-800">{activity.name}</h2>

      {/* Activity Description */}
      <p className="text-sm text-gray-600 line-clamp-2">
        {activity.description || "No description available."}
      </p>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Rating:</span>
        <div className="flex">{renderStars(activity.rating)}</div>
      </div>

      {/* Address */}
      {activity.address && (
        <p className="text-xs text-gray-500 flex items-center space-x-1">
          <span role="img" aria-label="location">📍</span>
          <span>{activity.address}</span>
        </p>
      )}

      {/* Date (Optional) */}
      {activity.opening_hours && (
        <p className="text-xs text-gray-500">Opening hours: {activity.opening_hours}</p>
      )}
    </div>
  );
};

export default ActivityCard;
