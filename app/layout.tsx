import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bitter = localFont({
  src: [
    {
      path: "../public/assets/fonts/Bitter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Bitter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Bitter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Bitter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bitter",
});

const gilmer = localFont({
  src: [
    {
      path: "../public/assets/fonts/Gilmer Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Gilmer Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Gilmer Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilmer",
});

export const metadata: Metadata = {
  title: "SILA Technologies | Your connection to your future",
  description:
    "SILA Technologies is a forward-thinking software company dedicated to digitizing businesses and empowering organizations with innovative technology solutions. Discover how we can help you transform your operations and achieve your goals.",
  keywords: [
    "SILA Technologies",
    "software company",
    "business digitization",
    "technology solutions",
    "digital transformation",
    "innovation",
    "future-ready",
    "enterprise software",
  ],
  authors: [{ name: "SILA Technologies", url: "https://silatech.co" }],
  openGraph: {
    title: "SILA Technologies | Your connection to your future",
    description:
      "Empowering businesses with cutting-edge software solutions for a digital future.",
    url: "https://silatech.co",
    siteName: "SILA Technologies",
    images: [
      {
        url: "https://silatech.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SILA Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", bitter.variable, gilmer.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#011936] font-bitter">
        <Header />
        {children}
      </body>
    </html>
  );
}
