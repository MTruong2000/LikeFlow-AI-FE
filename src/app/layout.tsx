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
  title: "LikeFlow",
  description:
    "LikeFlow empowers businesses with AI assistants to automate tasks, improve productivity, and boost growth.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LikeFlow",
    description:
      "LikeFlow empowers businesses with AI assistants to automate tasks, improve productivity, and boost growth.",
    url: "https://likeflow.ai",
    siteName: "LikeFlow",
    images: [
      {
        url: "/logo-likeflow.png",
        width: 1200,
        height: 630,
        alt: "LikeFlow Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
      <head>
        {/* Schema Logo cho Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://likeflow.ai",
              logo: "https://likeflow.ai/logo-likeflow.png",
            }),
          }}
        />
      </head>
      <body>
        <HeaderServer />
        {children}
      </body>
    </html>
  );
}
