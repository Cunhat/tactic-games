import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/ui/nav-bar";

// const inter = Inter({ subsets: ["latin"] });

const font = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

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
      <body
        className={cn(
          "min-h-screen bg-background font-satoshi antialiased",
          font.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
