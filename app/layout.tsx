import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "bluedeed studios | Home",
  description: "Web and Saas Experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-bluedeed_bg font-sans antialiased max-w-7xl mx-auto px-6",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
        <Navbar />
      </body>
    </html>
  );
}
