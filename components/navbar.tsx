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
import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your dark/light mode logic here
  };

  return (
    <Navbar
      shouldHideOnScroll
      className="
   p-4   sticky top-0 z-50 mb-8  
    "
    >
      <NavbarBrand>
        <div>
          <Logo width={100} height={100} />
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            <FaHome className="mr-2 h-12 w-12" />
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <FaRunning className="mr-2 h-12 w-12" />
            Activities
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarContent justify="end" className="gap-6">
          <NavbarItem>
            <ThemeSwitch   />
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light" className="flex items-center gap-2">
                  <FaUserCircle className="h-12 w-12" />{" "}
                  {/* Increase avatar size */}
                  <span className="text-lg">John Doe</span>{" "}
                  {/* Static user name */}
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="logout" className="text-lg">
                  {" "}
                  {/* Increase font size */}
                  <FaSignOutAlt className="mr-2 h-5 w-5" />{" "}
                  {/* Increase icon size */}
                  Logout
                </DropdownItem>
                <DropdownItem key="history" className="text-lg">
                  {" "}
                  {/* Increase font size */}
                  <FaHistory className="mr-2 h-5 w-5" />{" "}
                  {/* Increase icon size */}
                  History
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
