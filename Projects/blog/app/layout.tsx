import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed's Test Blog",
  description:
    "Created by Ahmed Ramadan, this is a Next JS project which I made to learn about SSG. It's a test blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
