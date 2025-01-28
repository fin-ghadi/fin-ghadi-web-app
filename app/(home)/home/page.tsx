"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { title } from "@/components/primitives";
import WeatherCard from "@/components/weatherCard";
import ActivitiesGrid from "@/components/HorizantalScrollActivities";
import VerticalScrollActivities from "@/components/verticalScrollActivities";
import Navbar from "@/components/navbar";
import { getCurrentLocation } from "@/utils/getCurrentLocation";
import GreetingCard from "@/components/greetingCard";
import { Activity } from "@/types"; // Import the Activity interface

export default function HomePage() {
  const [mostRecommended, setMostRecommended] = useState<Activity[]>([
    {
      id: "1",
      name: "Top Activity 1",
      address: "Somewhere",
      location: { latitude: 0, longitude: 0 },
      type: "Adventure",
      description: "Most popular choice",
      rating: 5,
    },
    {
      id: "2",
      name: "Top Activity 2",
      address: "Somewhere",
      location: { latitude: 0, longitude: 0 },
      type: "Tour",
      description: "Highly rated experience",
      rating: 5,
    },
    {
      id: "3",
      name: "Top Activity 3",
      address: "Somewhere",
      location: { latitude: 0, longitude: 0 },
      type: "Cultural",
      description: "Editor's pick",
      rating: 5,
    },
    {
      id: "4",
      name: "Top Activity 4",
      address: "Somewhere",
      location: { latitude: 0, longitude: 0 },
      type: "Sport",
      description: "Local favorite",
      rating: 5,
    },
  ]);

  const [otherActivities, setOtherActivities] = useState<Activity[]>([
    {
      id: "5",
      name: "Hiking Adventure",
      address: "Mountain",
      location: { latitude: 0, longitude: 0 },
      type: "Adventure",
      description: "Mountain trails exploration",
      rating: 3,
    },
    {
      id: "6",
      name: "City Tour",
      address: "City Center",
      location: { latitude: 0, longitude: 0 },
      type: "Tour",
      description: "Historical landmarks visit",
      rating: 4,
    },
    {
      id: "7",
      name: "Cooking Class",
      address: "Culinary School",
      location: { latitude: 0, longitude: 0 },
      type: "Workshop",
      description: "Local cuisine workshop",
      rating: 5,
    },
    {
      id: "8",
      name: "Water Sports",
      address: "Beach",
      location: { latitude: 0, longitude: 0 },
      type: "Sports",
      description: "Beach activities package",
      rating: 4,
    },
    {
      id: "9",
      name: "Wine Tasting",
      address: "Vineyard",
      location: { latitude: 0, longitude: 0 },
      type: "Cultural",
      description: "Vineyard tour experience",
      rating: 2,
    },
    {
      id: "10",
      name: "Photography Walk",
      address: "Park",
      location: { latitude: 0, longitude: 0 },
      type: "Tour",
      description: "Scenic spots tour",
      rating: 4,
    },
  ]);

  // Fetch and log the current location
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getCurrentLocation();
        console.log("Current Location:", location);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);

  // Fetch recommended activities from the API
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/activities/get_suggested_activities`
        );

        const activities: Activity[] = response.data; // Assuming the API response is an array of activities

        setMostRecommended(activities.slice(0, 4)); // First 4 activities for mostRecommended
        setOtherActivities(activities.slice(4, 13)); // Next 9 activities for otherActivities
      } catch (error) {
        console.error("Error fetching activities:", error);
        // In case of an error, use static activities as fallback
        setMostRecommended([
          {
            id: "1",
            name: "Top Activity 1",
            address: "Somewhere",
            location: { latitude: 0, longitude: 0 },
            type: "Adventure",
            description: "Most popular choice",
            rating: 5,
          },
          {
            id: "2",
            name: "Top Activity 2",
            address: "Somewhere",
            location: { latitude: 0, longitude: 0 },
            type: "Tour",
            description: "Highly rated experience",
            rating: 5,
          },
          {
            id: "3",
            name: "Top Activity 3",
            address: "Somewhere",
            location: { latitude: 0, longitude: 0 },
            type: "Cultural",
            description: "Editor's pick",
            rating: 5,
          },
          {
            id: "4",
            name: "Top Activity 4",
            address: "Somewhere",
            location: { latitude: 0, longitude: 0 },
            type: "Sport",
            description: "Local favorite",
            rating: 5,
          },
        ]);
        setOtherActivities([
          {
            id: "5",
            name: "Hiking Adventure",
            address: "Mountain",
            location: { latitude: 0, longitude: 0 },
            type: "Adventure",
            description: "Mountain trails exploration",
            rating: 3,
          },
          {
            id: "6",
            name: "City Tour",
            address: "City Center",
            location: { latitude: 0, longitude: 0 },
            type: "Tour",
            description: "Historical landmarks visit",
            rating: 4,
          },
          {
            id: "7",
            name: "Cooking Class",
            address: "Culinary School",
            location: { latitude: 0, longitude: 0 },
            type: "Workshop",
            description: "Local cuisine workshop",
            rating: 5,
          },
          {
            id: "8",
            name: "Water Sports",
            address: "Beach",
            location: { latitude: 0, longitude: 0 },
            type: "Sports",
            description: "Beach activities package",
            rating: 4,
          },
          {
            id: "9",
            name: "Wine Tasting",
            address: "Vineyard",
            location: { latitude: 0, longitude: 0 },
            type: "Cultural",
            description: "Vineyard tour experience",
            rating: 2,
          },
          {
            id: "10",
            name: "Photography Walk",
            address: "Park",
            location: { latitude: 0, longitude: 0 },
            type: "Tour",
            description: "Scenic spots tour",
            rating: 4,
          },
        ]);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <div className="space-y-8 pb-8">
        {/* Greeting Card */}
        <GreetingCard />

        {/* Weather Section */}
        <div
          className="container mx-auto px-4"
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <WeatherCard />
          </div>
        </div>

        {/* Most Recommended Activities */}
        <div className="container mx-auto px-4">
          <div
            style={{
              marginBottom: "50px",
            }}
          >
            <h2 className={title({ class: "mb-10" })}>
              Most Recommended Activities
            </h2>
          </div>

          <ActivitiesGrid activities={mostRecommended} />
        </div>

        {/* Other Recommended Activities */}
        <div className="container mx-auto px-4">
          <h2 className={title({ class: "mb-2" })}>
            Other Recommended Activities
          </h2>
          <VerticalScrollActivities activities={otherActivities} />
        </div>
      </div>
    </div>
  );
}
