"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaRunning,
  FaSignOutAlt,
  FaHistory,
  FaUserCircle,
} from "react-icons/fa"; // Import icons from react-icons
import Logo from "./logo";
import { useState, useEffect } from "react";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation"; // For navigation
import Cookies from "js-cookie"; // For accessing cookies

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userFullName, setUserFullName] = useState(""); // State to store the user's full name
  const router = useRouter(); // Initialize the router

  // Fetch the user's full name from cookies on component mount
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      setUserFullName(user.fullName);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your dark/light mode logic here
  };

  const handleLogout = () => {
    // Clear user data from cookies
    Cookies.remove("user");
    Cookies.remove("token");
    router.push("/"); // Redirect to the home page
  };

  const handleHistory = () => {
    router.push("/history"); // Redirect to the history page
  };

  // Get the first half of the user's full name for the avatar title
  const getHalfName = (fullName: string) => {
    const halfLength = Math.ceil(fullName.length / 2);
    return fullName.slice(0, halfLength);
  };

  return (
    <Navbar
      shouldHideOnScroll
      className="p-4 sticky top-0 z-50 mb-8 bg-white dark:bg-gray-900"
    >
      <NavbarBrand>
        <div>
          <Logo width={140} height={140} />
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/home"
            className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 transition-colors"
          >
            <FaHome className="h-6 w-6" />
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/activities"
            className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 transition-colors"
          >
            <FaRunning className="h-6 w-6" />
            Activities
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-6">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <div>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform hover:scale-110"
                  color="default"
                  name={userFullName ? getHalfName(userFullName) : "User"} // Display half of the name
                  size="lg"
                />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User menu">
              {/* Display the full name beautifully */}
              <DropdownItem
                key="profile"
                className="text-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                isReadOnly
              >
                <div className="flex items-center gap-2 color-danger text-danger">
                  <FaUserCircle className="h-5 w-5" />
                  <span className="font-semibold">{userFullName}</span>
                </div>
              </DropdownItem>

              {/* spacer  */}
              <DropdownItem key="spacer" className="border-t border-gray-200" />

              {/* Menu items */}
              <DropdownItem
                key="history"
                className="text-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onPress={handleHistory}
              >
                <div className="flex items-center gap-2">
                  <FaHistory className="h-5 w-5" />
                  History
                </div>
              </DropdownItem>
              <DropdownItem
                key="logout"
                className="text-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onPress={handleLogout}
              >
                <div className="flex items-center gap-2">
                  <FaSignOutAlt className="h-5 w-5" />
                  Logout
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
