import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import HeaderServer from "@/components/component-layout/header/header-server";
import Footer from "@/components/component-layout/footer";

import "./globals.css";

const beVietnamHeading = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["800"],
  display: "swap",
  preload: true,
  variable: "--font-bev-heading",
});

const beVietnamBody = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  variable: "--font-bev-body",
});

export const metadata: Metadata = {
  title: "LikeFlow",
  description:
    "LikeFlow empowers businesses with AI assistants to automate tasks, improve productivity, and boost growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamHeading.variable} ${beVietnamBody.variable}`}>
      <body>
        <HeaderServer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
