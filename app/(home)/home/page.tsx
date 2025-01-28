"use client";
import { useEffect, useState } from "react";
import WeatherCard from "@/components/weatherCard";
import GreetingCard from "@/components/greetingCard";
import RecomendationGrig from "@/components/recomendationGrig";
export default function HomePage() {
  useEffect(() => {
    // Logic has been removed as per your request.
  }, []); // Empty dependency array means this will run only once

  return (
    <div>
      <div className="space-y-8 pb-8" >
        {/* GreetingCard can be included if needed */}

        <div >
          <GreetingCard />
        </div>
        

        {/* Section for weather data */}
        <div
          className="container mx-auto px-4"
          style={{ placeItems: "center" }}
        >
          <div className="max-w-2xl mx-auto" style={
            {
              display:'grid', 
              placeItems:'center'
            }
          }>
            <WeatherCard />
          </div>
        </div>

        {/* Recommended Activities */}
        <div className="container mx-auto px-4">
          <RecomendationGrig />
        </div>
      </div>
    </div>
  );
}
