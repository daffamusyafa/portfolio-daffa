import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nur Arini - Portfolio",
  description: "Full Stack Developer Portfolio - Nur Arini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Sidebar />

          {/* Main content dengan responsive margin dan padding */}
          <main
            className="
            ml-0 lg:ml-72 
            min-h-screen 
            p-2 lg:p-8
            pt-16 lg:pt-2
            bg-white 
            dark:bg-gray-900
            transition-all 
            duration-300 
            ease-in-out
          "
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
