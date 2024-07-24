import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rooma Siddiqui | ML Developer",
  description: "",
  authors: [{ name: "Rooma Siddiqui" }],
  keywords: ["portfolio", "rooma siddiqui"],
  creator: "Rooma Siddiqui",
  publisher: "Rooma Siddiqui",
  metadataBase: new URL("https://roomasiddiqui.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
  openGraph: {
    title: "Rooma Siddiqui | Portfolio",
    description: "",
    url: "https://roomasiddiqui.vercel.app/",
    siteName: "Rooma Siddiqui Portfolio",
    images: [
      {
        url: "https://roomasiddiqui.vercel.app/images/Roomi.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    creator: "@rooma_siddiqui",
    images: ["https://roomasiddiqui.vercel.app/images/Roomi.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "",
  applicationName: "",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#5651e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "overflow-x-hidden relative bg-bg ")}
      >
        <Toaster position="top-right" richColors />
        <Header />
        {children}
      </body>
    </html>
  );
}
