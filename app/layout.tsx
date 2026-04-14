import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#011936]">
        <Header />
        {children}
      </body>
    </html>
  );
}
