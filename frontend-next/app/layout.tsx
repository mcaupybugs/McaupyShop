"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useEffect, useState, createContext } from "react";
import { User, UserContextType } from "./types";
import { ProjectDetails } from "@/components/Project/Project.model";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "McaupyShop",
//   description: "Shop to sell your projects",
// };

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    null
  );
  useEffect(() => {
    // window.sessionStorage.clear();
    var currentUser = window.sessionStorage.getItem("current_user");
    if (currentUser !== null) {
      var parsedCurrentUser = JSON.parse(currentUser);
      setUser(parsedCurrentUser);
    }
  }, []);
  return (
    <html lang="en">
      <body>
        <UserContext.Provider
          value={{ user, setUser, selectedProject, setSelectedProject }}
        >
          <Navbar></Navbar>
          {children}
        </UserContext.Provider>
      </body>
    </html>
  );
}
