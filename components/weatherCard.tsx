"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "@heroui/card";
import moment from "moment";
import Image from "next/image";

interface WeatherData {
  name: string;
  image: string;
  description: string;
}

const weatherTypes: WeatherData[] = [
  {
    name: "Sunny Day",
    image: "/weather-icons/sun.png",
    description: "Clear and bright",
  },
  {
    name: "Rainy Day",
    image: "/weather-icons/rainy-day.png",
    description: "Rain showers",
  },
  {
    name: "Cloudy-Sunny",
    image: "/weather-icons/cloudy-sunny.png",
    description: "Partly cloudy",
  },
  {
    name: "Cloudy",
    image: "/weather-icons/clouds.png",
    description: "Overcast",
  },
  {
    name: "Cloudy-Sunny-Rainy",
    image: "/weather-icons/cloudy-sunny-rainy.png",
    description: "Mixed weather",
  },
];

const WeatherCard: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchRandomWeather = async () => {
      const randomIndex = Math.floor(Math.random() * weatherTypes.length);
      const selectedWeather = weatherTypes[randomIndex];
      setWeather(selectedWeather);
    };

    fetchRandomWeather();
  }, []);

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
            <span
              className="text-4xl font-bold text-foreground"
              style={{
                textShadow: "1px 1px 2px #000000",
                fontSize: "4rem",
                fontWeight: "bold",
              }}
            >
              26°
            </span>
          </div>

          {/* Right Section: Weather Icon and Description */}
          <div className="flex flex-col items-center justify-center space-y-4">
            {weather && (
              <div className="w-32 h-32 relative">
                <Image
                  src={weather.image}
                  alt={weather.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            )}
            {weather && (
              <span className="text-lg font-medium text-yellow-400 text-center">
                {weather.description}
              </span>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;
