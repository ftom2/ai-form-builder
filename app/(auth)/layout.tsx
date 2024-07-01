import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "AI Form Generator",
  description: "Create forms in seconds instead of hours.",
};

const inter = Inter({ subsets: ["latin"] });
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
