import React from "react";
import Image from "next/image";

interface ActivityCardProps {
  image: any;
  title: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col max-w-xs mx-auto w-full border border-gray-100">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-lg">
        <Image
          src={image || '/400.svg'}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-2 text-center space-y-1">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-1 px-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 px-1 pb-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;