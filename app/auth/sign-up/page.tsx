"use client";
import { JSX, SVGProps, useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/react";
import Link from "next/link";
import axios from "axios";
import Logo from "@/components/logo";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // Import the useRouter hook

export const SelectorIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 9l4 -4l4 4" />
      <path d="M16 15l-4 4l-4 -4" />
    </svg>
  );
};

const genders = [
  { key: "male", label: "Male" },
  { key: "female", label: "Female" },
];

export default function SignUp() {
  const router = useRouter(); // Initialize the router

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    const userData = {
      fullName: formData.fullName,
      age: formData.age,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
    };

    try {
      console.log("Registering user:", userData);
      const response = await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, userData)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          toast.success(`${res.data.fullName} registered successfully!`);
          router.push("/auth/sign-in"); // Redirect to the sign-in page
        })
        .catch((error) => {
          console.error("Registration failed:", error);
          toast.error("Registration failed. Please try again.");
        });
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      <div
        style={{
          display: "grid",
          placeItems: "center",
          marginBottom: "-70px",
          marginTop: "-20px",
        }}
      >
        {/* Title */}
        <Logo width={150} height={150} />
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
        <section className="w-full max-w-md p-8 bg-white shadow-lg rounded-3xl">
          {/* Full Name Input */}
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full rounded-lg"
              size="lg"
              aria-label="Full Name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-lg"
              size="lg"
              aria-label="Email"
            />
          </div>
          {/* Age and Gender */}
          <div className="flex gap-4 mb-6">
            <Input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => handleChange("age", e.target.value)}
              className="w-1/2 rounded-lg"
              size="lg"
              aria-label="Age"
            />
            <Select
              label="Gender"
              placeholder="Select your gender"
              className="w-1/2 rounded-lg"
              size="sm"
              selectorIcon={<SelectorIcon />}
              onChange={(e) => handleChange("gender", e.target.value)}
            >
              {genders.map((gender) => (
                <SelectItem key={gender.key} value={gender.key}>
                  {gender.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* Password and Confirm Password */}
          <div className="flex gap-4 mb-8">
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-1/2 rounded-lg"
              size="lg"
              aria-label="Password"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="w-1/2 rounded-lg"
              size="lg"
              aria-label="Confirm Password"
            />
          </div>

          {/* Sign-Up Button */}
          <Button
            onPress={handleSignUp}
            className="w-full font-bold text-lg py-3 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white"
            variant="solid"
            size="lg"
          >
            Sign Up
          </Button>

          {/* Sign-In Link */}
          <div className="text-center mt-6">
            <div className="text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/sign-in">
                <p className="text-blue-600 font-semibold hover:underline">
                  Sign In
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
