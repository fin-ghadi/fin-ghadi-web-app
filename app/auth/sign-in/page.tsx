"use client"

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Sign-in logic here
    console.log("Sign-In with", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      <section className="w-full max-w-md p-6 shadow-lg rounded-xl">
        {/* Title */}
        <h4 className="text-center font-bold mb-6">Login</h4>

        {/* Email Input */}
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            size="lg"
            aria-label="Email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            size="lg"
            aria-label="Password"
          />
        </div>

        {/* Sign-In Button */}
        <Button
          onClick={handleSignIn}
          className="w-full font-bold text-lg py-3 rounded-lg"
          variant="solid"
          color="primary"
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
  );
}
