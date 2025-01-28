"use client";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import Cookies from "js-cookie"; // or use 'cookies-next' for Next.js
import { useRouter } from "next/navigation";

const GreetingCard: React.FC = () => {
  const [userFullName, setUserFullName] = useState(""); // State to store the user's full name
  const [quote, setQuote] = useState(""); // State to store the fetched quote
  const [author, setAuthor] = useState(""); // State to store the author of the quote
  const router = useRouter(); // Initialize the router

  // Fetch the user's full name from cookies on component mount
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      setUserFullName(user.fullName);
    }
  }, []);

  // Fetch a random quote from the API
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/quotes/random_quote`)
          .then((res) => {
            const { quote, author } = res.data; // Assuming the API returns { text, author }
            
            setQuote(quote); // Remove HTML tags from the quote
            setAuthor(author || "Unknown");
          });
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Oops! Unable to fetch a quote at the moment.");
        setAuthor("");
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="container mx-auto px-4 text-center space-y-4">
      {/* Greeting Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome Back, {userFullName}! 🌟
      </h1>

      {/* Quote Section */}
      <p className="text-xl md:text-2xl text-default-600 italic">
        {quote ? `${quote}` : ""}
        <br />
        {author && <span className="text-sm">- {author}</span>}
      </p>
    </div>
  );
};

export default GreetingCard;
