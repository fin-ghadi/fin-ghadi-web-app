import React from "react";
import { Card, CardBody } from "@heroui/card";
import moment from "moment";
import Image from "next/image";

// List of weather types and their corresponding PNG files and descriptions
const weatherTypes = [
  {
    name: "Sunny Day",
    image: "/weather-icons/sun.png", // Replace with your image URL
    description: "Clear and bright",
  },
  {
    name: "Rainy Day",
    image: "/weather-icons/rainy-day.png", // Replace with your image URL
    description: "Rain showers",
  },
  {
    name: "Cloudy-Sunny",
    image: "/weather-icons/cloudy-sunny.png", // Replace with your image URL
    description: "Partly cloudy",
  },
  {
    name: "Cloudy",
    image: "/weather-icons/clouds.png", // Replace with your image URL
    description: "Overcast",
  },
  {
    name: "Cloudy-Sunny-Rainy",
    image: "/weather-icons/cloudy-sunny-rainy.png", // Replace with your image URL
    description: "Mixed weather",
  },
];

// Function to get random weather
const getRandomWeather = () => {
  const randomIndex = Math.floor(Math.random() * weatherTypes.length);
  return weatherTypes[randomIndex];
};

const WeatherCard: React.FC = () => {
  const weather = getRandomWeather(); // Get a random weather
  const { name, image, description } = weather;

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
          {/* Left Section: Date, Location, and Temperature */}
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-foreground/80">
              {moment().format("MMMM Do YYYY, h:mm:ss a")}
            </span>
            <span className="text-2xl font-semibold text-primary">
              Tangier, Morocco
            </span>
            <span className="text-4xl font-bold text-foreground" style={
                {
                  
                    textShadow: "1px 1px 2px #000000",
                    fontSize: "4rem",
                    fontWeight: "bold"
                }
            }>26°</span>
          </div>

          {/* Right Section: Weather Icon and Description */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-32 h-32 relative">
              <Image
                src={image}
                alt={name}
                layout="fill" // Fill the container
                objectFit="cover" // Ensure the image fits well
                className="rounded-lg"
              />
            </div>
            <span className="text-lg font-medium text-yellow-400 text-center">
              {description}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;
