import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import Navbar from "@/components/navbar";

import { title, subtitle } from "@/components/primitives"; // Assuming you have these primitives
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white" style={
      {
        marginTop:"-50px"
      }
    }>
      {/* Logo */}
      <div className="mb-2">
        <Image
          src="/FG-logo2.png" // Update the path to your logo
          alt="Fin Ghadi Logo"
          width={350}
          height={350}
          className="animate-fade-in"
        />
      </div>

      {/* Get Started Button */}
      <Link href="/auth/sign-in">
        <Button
          color="primary"
          size="lg"
          className="font-bold text-lg px-10 py-4  rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform transform hover:scale-105"
        >
          Get Started
        </Button>
      </Link>

      {/* Awareness Text */}
      <p className="text-center text-gray-500 mt-8 max-w-md">
        Explore your city, discover hidden gems, and make every journey an
        adventure!
      </p>
    </section>
  );
}
