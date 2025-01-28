"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@heroui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Location } from "@/types";
interface MapProps {
  location: Location
}

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const Map: React.FC<MapProps> = ({ location }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Check if Leaflet is loaded
    if (window.L) {
      setIsMapLoaded(true);
    }
  }, []);

  // Function to handle map click and open Google Maps with the clicked location
  const handleMapClick = () => {
    const clickedLat = location.latitude;
    const clickedLng = location.longitude;

    // Open Google Maps with the clicked location
    const googleMapsUrl = `https://www.google.com/maps?q=${clickedLat},${clickedLng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg relative">
      {isMapLoaded && (
        <>
          {/* Leaflet Map */}
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={14}
            style={mapContainerStyle}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.latitude, location.longitude]} />
          </MapContainer>

          {/* Button to open Google Maps */}
          <div className="absolute top-4 right-4 z-[1000]">
            <Button
              onPress={handleMapClick}
              className="flex items-center justify-center p-3 bg-default-500 text-white rounded-lg shadow-md hover:bg-default-600 transition-all focus:outline-none"
            >
              <FaExternalLinkAlt size={18} className="mr-2" />
              <span className="text-sm font-medium">Open in Google Maps</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Map;