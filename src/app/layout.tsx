// app/layout.tsx

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
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
      <body className="flex flex-col min-h-screen antialiased items-center">
        <Header />
        <main className="flex-1 w-full">
          <div className="max-w-3xl mx-auto px-4">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

