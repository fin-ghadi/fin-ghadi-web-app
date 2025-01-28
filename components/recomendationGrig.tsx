// pages/recommendationGrid.tsx

import { useState, useEffect } from "react";
import LoadingSuggestions from "@/components/loadingSuggestions";
import VerticalScrollActivities from "@/components/verticalScrollActivities";
import ActivitiesGrid from "@/components/HorizantalScrollActivities";
import Cookies from "js-cookie";
import axios from "axios";

// Validation function for the suggestion request data
const validateSuggestionRequest = (data: any) => {
  // Validate user
  if (!data.user || typeof data.user !== "object") {
    throw new Error("User data is missing or invalid");
  }
  if (typeof data.user.gender !== "string") {
    throw new Error("User gender must be a string");
  }
  if (typeof data.user.age !== "number" || data.user.age <= 0) {
    throw new Error("User age must be a positive number");
  }

  // Validate weather
  if (!data.weather || typeof data.weather !== "object") {
    throw new Error("Weather data is missing or invalid");
  }
  const requiredWeatherFields = {
    city: "string",
    country: "string",
    main: "string",
    description: "string",
    temperature: "number",
    wind_speed: "number",
    humidity: "number",
  };
  Object.entries(requiredWeatherFields).forEach(([field, type]) => {
    if (!(field in data.weather)) {
      throw new Error(`Weather data is missing field: ${field}`);
    }
    if (typeof data.weather[field] !== type) {
      throw new Error(`Weather field ${field} must be a ${type}`);
    }
  });

  // Validate location
  if (!data.location || typeof data.location !== "object") {
    throw new Error("Location data is missing or invalid");
  }
  if (
    typeof data.location.latitude !== "number" ||
    isNaN(data.location.latitude)
  ) {
    throw new Error("Latitude must be a valid number");
  }
  if (
    typeof data.location.longitude !== "number" ||
    isNaN(data.location.longitude)
  ) {
    throw new Error("Longitude must be a valid number");
  }

  // Validate radius
  if (typeof data.radius !== "number" || data.radius <= 0) {
    throw new Error("Radius must be a positive number");
  }

  // Validate timestamp
  if (typeof data.timestamp !== "string" || isNaN(Date.parse(data.timestamp))) {
    throw new Error("Timestamp must be a valid ISO string");
  }
};

const RecommendationGrid: React.FC = () => {
  const [mostRecommended, setMostRecommended] = useState<any[]>([]);
  const [otherActivities, setOtherActivities] = useState<any[]>([]);
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch and validate user data from cookies
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      try {
        const decodedUserCookie = decodeURIComponent(userCookie);
        const user = JSON.parse(decodedUserCookie);

        // Validate user data from cookie
        if (typeof user.gender !== "string") {
          throw new Error("Invalid gender in user cookie");
        }
        if (typeof user.age !== "number" || user.age <= 0) {
          throw new Error("Invalid age in user cookie");
        }

        setGender(user.gender);
        setAge(user.age);
      } catch (error) {
        console.error("Error parsing user cookie:", error);
        setError("Invalid user data in cookie. Please log in again.");
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      setError("User cookie not found. Please log in.");
    }
  }, []);

  // Fetch location, weather, and activities with validation
  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Mock location (replace with actual geolocation logic if needed)
        const location = { latitude: 35.7595, longitude: -5.832 };

        // Fetch and validate weather data
        const weatherResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/weather/get_weather`,
          { latitude: location.latitude, longitude: location.longitude }
        );
        const weatherData = weatherResponse.data;

        // Basic weather validation
        if (!weatherData || typeof weatherData.temperature !== "number") {
          throw new Error("Invalid weather data received");
        }

        // Prepare suggestion request data
        const suggestionRequestData = {
          user: { gender: gender!, age: age! }, // Non-null assertion valid due to useEffect dependency
          weather: weatherData,
          location,
          radius: 10000, // Adjusted to match example structure
          timestamp: new Date().toISOString(),
        };

        // Validate entire request payload
        validateSuggestionRequest(suggestionRequestData);

        // Fetch activities
        const activitiesResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/activities/get_suggested_activities`,
          suggestionRequestData
        );

        const activities = activitiesResponse.data;
        setMostRecommended(activities.slice(0, 4));
        setOtherActivities(activities.slice(4, 13));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setError(
          (error as any).message || "An error occurred while fetching data."
        );
      }
    };

    if (gender && age !== null) {
      fetchAllData();
    }
  }, [gender, age]);

  // Render logic remains the same
  return (
    <div className="container mx-auto py-6 px-4">
      <LoadingSuggestions isLoading={isLoading} />
      {error && <p className="text-center text-red-500">{error}</p>}
      <h2 className="text-2xl font-semibold mb-4">
        Most Recommended Activities
      </h2>
      <ActivitiesGrid activities={mostRecommended} />

      <h2 className="text-2xl font-semibold mb-4 mt-8">Other Activities</h2>
      <VerticalScrollActivities activities={otherActivities} />
    </div>
  );
};

export default RecommendationGrid;
