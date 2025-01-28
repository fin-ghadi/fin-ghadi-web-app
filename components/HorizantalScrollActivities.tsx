"use client";
import React, { useRef, useState } from "react";
import ActivityCard from "./activityCard";
import { Button } from "@heroui/button";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Activity } from "@/types";

interface ActivitiesGridProps {
  activities: Activity[];
}

const ActivitiesGrid: React.FC<ActivitiesGridProps> = ({ activities }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            scrollContainerRef.current;
          setShowLeftButton(scrollLeft > 0);
          setShowRightButton(scrollLeft + clientWidth < scrollWidth);
        }
      }, 300);
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      {/* Navigation Buttons */}
      <div className="hidden md:flex justify-between absolute inset-y-0 w-full pointer-events-none">
        <Button
          onPress={() => handleScroll(-300)}
          isIconOnly
          aria-label="Scroll left"
          className={`pointer-events-auto mt-12  rounded-full p-3 shadow-xl transition-all ${
            !showLeftButton && "opacity-0"
          }`}
          variant="faded"
          style={{ transform: "translateX(-125%)" }}
        >
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            <FaAnglesLeft className="w-7 h-7 text-darck font-bold stroke-[2]" />
          </div>
        </Button>

        <Button
          onPress={() => handleScroll(300)}
          isIconOnly
          aria-label="Scroll right"
          className={`pointer-events-auto mt-12  rounded-full p-3 shadow-xl transition-all ${
            !showRightButton && "opacity-0"
          }`}
          variant="faded"
          style={{ transform: "translateX(125%)" }}
        >
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            <FaAnglesRight className="w-6 h-6 text-darck font-bold stroke-[2]" />
          </div>
        </Button>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 scrollbar-hide space-x-1" // Adjusted space-x to 1 for minimal spacing
        onScroll={() => {
          if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
              scrollContainerRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft + clientWidth < scrollWidth);
          }
        }}
      >
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex-shrink-0 w-[360px] mx-[2px] p-6" // Adjusted width and added minimal margin
          >
            <ActivityCard activity={activity} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesGrid;
