import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Ian Winston Monsanto - Software Developer | Web & Mobile App Developer",
  description:
    "Ian Winston Monsanto is a software developer based in the Philippines, specializing in building websites and mobile applications. Expert in React, Next.js, TypeScript, and Node.js.",
  keywords:
    "software developer, web developer, mobile app developer, React, Next.js, TypeScript, Node.js, Philippines",
  authors: [{ name: "Ian Winston Monsanto" }],
  creator: "Ian Winston Monsanto",
  publisher: "Ian Winston Monsanto",
  robots: "index, follow",
  openGraph: {
    title: "Ian Winston Monsanto - Software Developer",
    description:
      "Software developer specializing in web and mobile applications. Based in the Philippines.",
    type: "website",
    locale: "en_US",
    siteName: "Ian Winston Monsanto Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Winston Monsanto - Software Developer",
    description:
      "Software developer specializing in web and mobile applications.",
  },
  alternates: {
    canonical: "https://ian-dev.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Loader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
