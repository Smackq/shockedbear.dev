
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Quicksand({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: 'shockedbear.dev',
    default: '',
  },
  description: "shockedbear.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`flex flex-col min-h-screen antialiased items-center ${geistSans.variable} font-sans`}>
        <Header />
        { children }
        <Footer />
      </body>
    </html>
  );
}