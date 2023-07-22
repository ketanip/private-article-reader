import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className + " max-w-5xl bg-gray-100 mx-auto"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}