"use client";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import Link from "next/link";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = () => {
    // Sign-up logic here
    console.log("Sign-Up with", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white px-4">
      <section className="w-full max-w-md p-6 shadow-lg rounded-xl">
        {/* Title */}
        <h4 className="text-center font-bold mb-6">Sign Up</h4>

        {/* Full Name Input */}
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full"
            size="lg"
            aria-label="Full Name"
          />
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <Input
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => handleChange("age", e.target.value)}
            className="w-full"
            size="lg"
            aria-label="Age"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full"
            size="lg"
            aria-label="Email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full"
            size="lg"
            aria-label="Password"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <Input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className="w-full"
            size="lg"
            aria-label="Confirm Password"
          />
        </div>

        {/* Sign-Up Button */}
        <Button
          onClick={handleSignUp}
          className="w-full font-bold text-lg py-3 rounded-lg"
          variant="solid"
          color="primary"
          size="lg"
        >
          Sign Up
        </Button>

        {/* Sign-In Link */}
        <div className="text-center mt-6">
          <div className="text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/sign-in/page">
              <p className="text-green-600 font-semibold hover:underline">
                Sign In
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
