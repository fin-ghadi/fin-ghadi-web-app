"use client"; // Mark this as a Client Component

import { useEffect, useState } from "react";
import axios from "axios";
import ActivityDetail from "@/components/activityDetail";
import { Activity } from "@/types";
import { toast } from "react-hot-toast"; // For toast notifications
import { Spinner } from "@heroui/react";
type Props = {
  id: string;
};

const ActivityDetailPage = ({ id }: Props) => {
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/weathers/${id}`)
          .then((res) => {
            setActivity(res.data);
          })
          .catch((err) => {
            toast.error("Error geting the activity");
            setActivity({
              id: "1",
              name: "🌳 Sample Activity",
              address: "123 Main Street",
              location: { latitude: 40.7128, longitude: -74.006 },
              type: "Outdoor",
              rating: 4.5,
              distance: 1200,
              website: "https://example.com",
              phone: "123-456-7890",
              opening_hours: "9:00 AM - 5:00 PM",
              description:
                "This is a sample activity showcasing an exciting outdoor experience. Enjoy lush greenery, breathtaking views, and countless opportunities to connect with nature. Perfect for relaxation or adventure!",
              constructions:
                "Currently undergoing minor maintenance to improve facilities. Construction includes adding picnic areas and upgrading walkways to enhance visitor experience.",
            });
          });
      } catch (error) {
        toast.error("Error geting the activity");
      }
    };

    fetchActivity();
  }, [id]);

  return (
    <div>
      <div className="container space-y-8 pb-8">
        {activity ? (
          <ActivityDetail activity={activity} />
        ) : (
          <Spinner size="lg" />
        )}
      </div>
    </div>
  );
};

export default ActivityDetailPage;
