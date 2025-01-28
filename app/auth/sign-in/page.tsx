"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { toast } from "react-hot-toast"; // For toast notifications
import Logo from "@/components/logo"; // Import your logo component
import Cookies from "js-cookie";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the router

  const handleSignIn = async () => {
    try {
      // Make a POST request to the login endpoint
      const requestBody = {
        username: email, // Map the email to the username field
        password: password,
      };
      console.log(requestBody);
      const response = await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, requestBody)
        .then((res) => {
          // Store the token in the local storage
          Cookies.set("token", res.data.token);
          Cookies.set("user", JSON.stringify(res.data.user));
          toast.success(`Welcome back, ${res.data.user.fullName}!`);
          router.push("/home");
        })
        .catch((error) => {
          console.error("Login failed:", error);
          toast.error("Login failed. Please check your credentials.");
        });

      // Redirect to the /home page
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      {/* Logo at the top */}
      <div
        style={{
          display: "grid",
          placeItems: "center",
          marginBottom: "-90px",
        }}
      >
        <Logo width={150} height={150} />
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
        <section className="w-full max-w-md p-8 bg-white shadow-lg rounded-3xl">
          {/* Title */}
          <h4 className="text-center text-2xl font-bold mb-6">Login</h4>

          {/* Email Input */}
          <div className="mb-6">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg"
              size="lg"
              aria-label="Email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-8">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg"
              size="lg"
              aria-label="Password"
            />
          </div>

          {/* Sign-In Button */}
          <Button
            onPress={handleSignIn}
            className="w-full font-bold text-lg py-3 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white"
            variant="solid"
            size="lg"
          >
            Sign In
          </Button>

          {/* Sign-Up Link */}
          <div className="text-center mt-6">
            <div className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/auth/sign-up">
                <p className="text-blue-600 font-semibold hover:underline">
                  Sign Up
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
