/** @format */
"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutGrid,
  Briefcase,
  Calendar,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "../ui/button";
import LogoutModal from "./LogOutModal";

export default function DashboardSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const isCollapsed = state === "collapsed";

  const navItems = [
    {
      href: "/overview",
      icon: LayoutGrid,
      label: "Overview",
    },
    {
      href: "/todays-jobs",
      icon: Calendar,
      label: "Today's Jobs",
    },
    {
      href: "/all-jobs",
      icon: Briefcase,
      label: "All Jobs",
    },
    {
      href: "/notifications",
      icon: Bell,
      label: "Notifications",
    },
    {
      href: "/settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  const handleLogout = () => {
    router.push("/sign-in");
    // Add your logout logic here (e.g., clear tokens, redirect, etc.)
    console.log("Logging out...");
    setIsLogoutModalOpen(false);
    // Example: router.push('/login');
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
    <>
      {/* mobile menu button */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <SidebarTrigger />
      </div>

      {/* Sidebar content goes here */}
      <Sidebar
        className="border-r-2 border-gray-300 bg-white rounded-r-2xl shadow-none"
        collapsible="icon"
      >
        <SidebarContent className="bg-white rounded-tr-xl shadow-none">
          <div
            className={`flex items-center justify-center px-0 md:px-2 py-6 relative ${
              isCollapsed ? "px-2" : "gap-2"
            }`}
          >
            <div className="flex gap-2">
              {isCollapsed ? (
                <h1 className="mt-2 font-bold text-xl text-red-800 rounded-full px-2 border-2 border-red-800">
                  B
                </h1>
              ) : (
                <div className="mt-2 flex items-center gap-2">
                  <Image src="/logo.png" alt="Logo" width={70} height={70} />
                </div>
              )}
            </div>
            {/* Toggle button for mobile */}

            {/* Collapse button for desktop */}
            <div
              className={`absolute top-2 hidden md:block ${
                isCollapsed ? "right-0" : "right-0"
              }`}
            >
              <SidebarTrigger />
            </div>
          </div>
          <SidebarMenu
            className={
              isCollapsed ? "px-2 space-y-4 items-center" : "md:px-6 space-y-4"
            }
          >
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                active={
                  !!(
                    pathname === item.href ||
                    pathname?.startsWith(item.href + "/")
                  )
                }
                collapsed={isCollapsed}
              />
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="pb-4 bg-white rounded-br-2xl shadow-none">
          {/* Footer content can go here if needed */}
          <div className="w-full flex justify-center">
            <Button
              variant="default"
              size="sm"
              className="bg-red-800 text-white hover:bg-red-700! hover:text-white!"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              {isCollapsed ? (
                <LogOut />
              ) : (
                <div className="flex justify-center items-center gap-2 px-3">
                  <LogOut /> Log Out
                </div>
              )}
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  collapsed?: boolean;
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed = false,
}: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={href}
          className={cn(
            collapsed
              ? "flex items-center justify-center px-2 py-3 transition-colors rounded-full w-12 h-12 mx-auto"
              : "flex items-center gap-3 px-4 py-3 transition-colors rounded-md",
            active
              ? "bg-red-800 text-white hover:bg-red-700! hover:text-white! font-medium"
              : "bg-transparent text-black hover:bg-red-100!  font-medium"
          )}
        >
          <Icon size={collapsed ? 20 : 18} />
          {!collapsed && <span className="text-base">{label}</span>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
// ...existing code...
