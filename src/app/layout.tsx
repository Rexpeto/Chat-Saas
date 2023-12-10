import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat SaaS",
  description: "Services for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-w-screen font-sans antialiased grainsy dark:bg-gray-950",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
