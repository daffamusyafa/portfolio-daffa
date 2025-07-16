import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { DarkModeProvider } from "@/components/DarkMode";

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
  title: "Portofolio Nur Arini",
  description: "Portofolio Nur Arini - Freelance Web Developer dari Bandung, Indonesia.",
  metadataBase: new URL("https://nrrarn.my.id"),
  openGraph: {
    title: "Nur Arini | Full Stack Developer",
    description: "Portofolio Nur Arini - Freelance Web Developer dari Bandung, Indonesia.",
    url: "https://nrrarn.my.id",
    siteName: "Nur Arini Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Nur Arini - Portofolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Arini | Full Stack Developer",
    description: "Portofolio Nur Arini - Freelance Web Developer dari Bandung, Indonesia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <DarkModeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Sidebar />
            <main
              className="
            ml-0 lg:ml-72 
            min-h-screen 
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
        </DarkModeProvider>
      </body>
    </html>
  );
}
