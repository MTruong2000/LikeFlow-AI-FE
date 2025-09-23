import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import HeaderServer from "@/components/component-layout/header/header-server";

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
  title: {
    default:
      "LikeFlow | AI Assistants to Automate Tasks and Boost Productivity",
    template:
      "%s | LikeFlow | AI Assistants to Automate Tasks and Boost Productivity",
  },
  description:
    "Boost efficiency and growth with LikeFlow AI assistants. Automate repetitive tasks, improve productivity and empower your business to scale smarter.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${beVietnamHeading.variable} ${beVietnamBody.variable}`}
    >
      <body>
        <HeaderServer />
        {children}
      </body>
    </html>
  );
}
