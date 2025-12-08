/** @format */
"use client";

import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserCog, Key, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import LogoutModal from "./LogOutModal";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    setIsLogoutModalOpen(false);
    router.push("/sign-in");
  };
  if (
    pathname == "/" ||
    pathname == "/sign-in" ||
    pathname == "/sign-up" ||
    pathname == "/create-new-pass" ||
    pathname == "/reset-pass" ||
    pathname == "/verify-email" ||
    pathname == "/verify-otp"
  )
    return null;
  return (
    <div className="w-full sticky top-0 z-50 px-4">
      <div className=" max-w-[2500px] rounded-2xl mx-auto flex items-center justify-between bg-white border border-gray-200 px-6 py-3">
        {/* Left side - Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          Technician Dashboard
        </h1>

        {/* Right side - Search, Select, Notification, Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button
            onClick={() => router.push("/notifications")}
            className="cursor-pointer relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
              <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-800">Moni Roy</p>
                <p className="text-xs text-gray-500">Technician</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2">
              <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 cursor-pointer">
                <UserCog className="w-5 h-5 text-blue-500" />
                <span className="text-base">Manage Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 cursor-pointer">
                <Key className="w-5 h-5 text-pink-500" />
                <span className="text-base">Change Password</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setIsLogoutModalOpen(true)}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer"
              >
                <LogOut className="w-5 h-5 text-red-500" />
                <span className="text-base">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default NavBar;
