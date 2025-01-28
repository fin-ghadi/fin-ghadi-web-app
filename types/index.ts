import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


// Base types
export interface Location {
  latitude: number;
  longitude: number;
}

// User Model
export interface User {
  id: string; // Assuming MongoDB uses string IDs
  fullName: string;
  email: string;
  password: string;
  gender: string;
  age: number;
}

// Activity Model
export interface Activity {
  id: string;
  name: string;
  address: string;
  location: Location;
  type: string;
  rating?: number; // Optional field
  distance?: number; // Optional field
  website?: string; // Optional field
  phone?: string; // Optional field
  opening_hours?: string; // Optional field
  description?: string; // Optional field
  constructions?: string; // Optional field
}

// UserActivity Model
export interface UserActivity {
  id: string;
  user: User; // Link to User
  activity: Activity; // Link to Activity
  timestamp: Date;
  userRating?: number; // Optional field
}

// Weather Model
export interface Weather {
  id: string;
  city: string;
  country: string;
  temperature: number;
  description: string;
  main: string;
  humidity: number;
  windSpeed: number;
}

// Quote Model
export interface Quote {
  id: string;
  quote: string;
  author: string;
}

// JWT Payload
export interface JWTPayload {
  sub: string; // User ID
  exp: number; // Expiration timestamp
}

// JWT Response
export interface JWTResponse {
  token: string;
}

// API Response Wrapper
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}