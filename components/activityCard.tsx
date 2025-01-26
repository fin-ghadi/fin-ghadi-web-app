import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ActivityCardProps {
  id: string; // Add an `id` prop for navigation
  image: any;
  title: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  image,
  title,
  description,
}) => {
  const router = useRouter();

  // Handle card click
  const handleClick = () => {
    router.push(`/activity-detail/${id}`); // Navigate to the activity detail page
  };

  return (
    <div
      onClick={handleClick} // Make the card clickable
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col max-w-xs mx-auto w-full border border-gray-100 dark:border-gray-700 cursor-pointer" // Add cursor-pointer for better UX
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-lg">
        <Image
          src={image || "/400.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-2 text-center space-y-1">
        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-1 px-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 px-1 pb-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
