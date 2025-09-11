import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import HeaderServer from "@/app/components/header-server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LikeFlow",
  description: "LikeFlow empowers businesses with AI assistants to automate tasks, improve productivity, and boost growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderServer />
        {children}
      </body>
    </html>
  );
}
