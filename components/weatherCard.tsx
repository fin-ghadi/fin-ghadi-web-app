"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "@heroui/card";
import moment from "moment";
import Image from "next/image";
import axios from "axios";
import { getCurrentLocation } from "../utils/getCurrentLocation"; // Import the utility function
import { Spinner } from "@heroui/react";

interface WeatherResponse {
  city: string;
  country: string;
  temperature: number;
  description: string;
  main: string;
  humidity: number;
  wind_speed: number;
}

const weatherIcons: { [key: string]: string } = {
  Clear: "/weather-icons/sun.png",
  Clouds: "/weather-icons/clouds.png",
  Rain: "/weather-icons/rainy-day.png",
  Drizzle: "/weather-icons/rainy-day.png",
  Thunderstorm: "/weather-icons/thunder.png",
  Snow: "/weather-icons/snow.png",
  Mist: "/weather-icons/mist.png",
  Smoke: "/weather-icons/mist.png",
  Haze: "/weather-icons/mist.png",
  Dust: "/weather-icons/mist.png",
  Fog: "/weather-icons/mist.png",
  Sand: "/weather-icons/mist.png",
  Ash: "/weather-icons/mist.png",
  Squall: "/weather-icons/mist.png",
  Tornado: "/weather-icons/tornado.png",
};

const WeatherCard: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user's current location and weather data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the user's current location
        const location = await getCurrentLocation();
        if (!location) {
          throw new Error("Unable to fetch location.");
        }
        console.log("Location:", location);

        // Fetch weather data using the location
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/weather/get_weather`,
          {
            latitude: location.latitude,
            longitude: location.longitude,
          }
        );
        console.log("Weather Data:", response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
        setError("Failed to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update date every second (client-side only)
  useEffect(() => {
    setDate(moment().format("MMMM Do YYYY, h:mm a")); // Initial date

    const interval = setInterval(() => {
      setDate(moment().format("MMMM Do YYYY, h:mm a"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Get the appropriate weather icon based on the main weather condition
  const getWeatherIcon = (main: string) => {
    return weatherIcons[main] || "/weather-icons/sun.png"; // Default to sun icon if not found
  };

  // Get the color for the description based on the main weather condition
  const getDescriptionColor = (main: string) => {
    switch (main) {
      case "Clear":
        return "text-yellow-400";
      case "Rain":
      case "Drizzle":
      case "Thunderstorm":
        return "text-blue-400";
      case "Clouds":
        return "text-gray-400";
      case "Snow":
        return "text-white";
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return "text-gray-300";
      default:
        return "text-yellow-400";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="lg"/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] rounded-2xl pl-6"
      shadow="lg"
    >
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center ">
          {/* Left Section: Date, Location, and Temperature */}
          <div className="flex flex-col space-y-4">
            <span className="text-sm text-foreground/80">{date}</span>
            <span className="text-2xl font-semibold text-primary">
              {weatherData?.city}, {weatherData?.country}
            </span>
            <span
              className="text-6xl font-bold text-foreground"
              style={{
                textShadow: "1px 1px 2px #000000",
              }}
            >
              {weatherData?.temperature}°
            </span>
            <div className="flex space-x-4 text-sm text-foreground/80">
              <div className="flex items-center space-x-2">
                <span>💧</span>
                <span>Humidity: {weatherData?.humidity}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌬️</span>
                <span>Wind: {weatherData?.wind_speed} m/s</span>
              </div>
            </div>
          </div>

          {/* Right Section: Weather Icon and Description */}
          <div className="flex flex-col items-center justify-center space-y-4 pl-6">
            {weatherData && (
              <div className="w-36 h-36 relative">
                <Image
                  src={getWeatherIcon(weatherData.main)}
                  alt={weatherData.main}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            )}
            {weatherData && (
              <span
                className={`text-lg font-medium ${getDescriptionColor(
                  weatherData.main
                )} text-center`}
              >
                {weatherData.description}
              </span>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;
