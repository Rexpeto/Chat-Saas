import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib";
import { Navbar, Providers, Theme } from "@/components";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Vyper",
  description: "Services for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(
            "min-w-screen font-sans antialiased grainsy dark:bg-gray-950",
            inter.className,
          )}
        >
          <Theme>
            <Navbar />
            {children}
            <Toaster />
          </Theme>
        </body>
      </Providers>
    </html>
  );
}
