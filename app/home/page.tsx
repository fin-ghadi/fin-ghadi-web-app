import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { ThemeSwitch } from "@/components/theme-switch";
import Logo from "@/components/logo"; // Replace with your logo component

export default function App() {
  // Mock user data
  const user = {
    name: "Simo",
    avatarUrl: "https://via.placeholder.com/150", // Replace with actual user avatar URL
  };

  return (
    <Navbar shouldHideOnScroll>
      {/* Branding */}
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Finghadi</p>
      </NavbarBrand>

      {/* Navigation Links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/activities">
            Activities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/map">
            Map
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Side Content */}
      <NavbarContent justify="end">
        {/* Theme Switch */}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>

        {/* User Dropdown */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="flex items-center gap-2"
                aria-label="User Menu"
              >
                <Avatar
                  size="sm"
                  src={user.avatarUrl}
                  alt={user.name}
                  className="cursor-pointer"
                />
                <span className="hidden sm:block">{user.name}</span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions">
              <DropdownItem key="history">History</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
