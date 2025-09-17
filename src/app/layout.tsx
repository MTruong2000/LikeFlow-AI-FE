import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";
import HeaderServer from "@/components/component-layout/header/header-server";
import Footer from "@/components/component-layout/footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], // chọn độ đậm cần dùng
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
    <html lang="en"  className={beVietnamPro.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderServer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
