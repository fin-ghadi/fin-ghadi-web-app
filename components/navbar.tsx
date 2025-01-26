import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Sun, Moon, Home, Activity, LogOut, History } from "lucide-react"; // Assuming you use lucide-react for icons
import Logo from "./logo";
import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your dark/light mode logic here
  };

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Activity className="mr-2 h-4 w-4" />
            Activities
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly onClick={toggleDarkMode} variant="light">
            {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="logout">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownItem>
              <DropdownItem key="history">
                <History className="mr-2 h-4 w-4" />
                History
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}