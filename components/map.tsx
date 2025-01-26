// components/Map.tsx
"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Uncomment these lines when you have a Google Maps API key
// import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
}

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const Map: React.FC<MapProps> = ({ location }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Check if Leaflet is loaded (you might need to adjust this based on your Leaflet setup)
    if (window.L) {
      setIsMapLoaded(true);
    }
  }, []);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      {isMapLoaded && (
        <>
          {/* Leaflet Map */}
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={14}
            style={mapContainerStyle}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]} />
          </MapContainer>

          {/* Google Maps (Commented out) */}
          {/* <LoadScriptNext
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={14}
              center={location}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScriptNext> */}
        </>
      )}
    </div>
  );
};

export default Map;
