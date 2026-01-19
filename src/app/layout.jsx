import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins(
  {
    weight:["100","200","400","500","600","800"]
  }
)

export const metadata = {
  metadataBase: new URL("https://navique.vercel.app"),

  title: {
    default: "Navique | Discover & Book Amazing Travel Packages",
    template: "%s | Navique",
  },

  description:
    "Navique helps you discover, explore, and book unforgettable travel experiences. Browse curated travel packages, transparent pricing, and hassle-free trips worldwide.",

  keywords: [
    "Navique",
    "travel packages",
    "tour packages",
    "vacation booking",
    "travel website",
    "holiday trips",
    "budget travel",
    "travel planning",
  ],

  authors: [{ name: "Navique Team", url: "https://navique.vercel.app" }],
  creator: "Navique",
  publisher: "Navique",

  alternates: {
    canonical: "https://navique.vercel.app",
  },

  openGraph: {
    title: "Navique | Discover & Book Amazing Travel Packages",
    description:
      "Explore beautiful destinations and book curated travel packages with Navique. Simple, transparent, and inspiring travel planning.",
    url: "https://navique.vercel.app",
    siteName: "Navique",
    images: [
      {
        url: "https://i.ibb.co/4g15PhMc/image.png", // home page preview
        width: 1200,
        height: 630,
        alt: "Navique Travel Website Home Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Navique | Discover & Book Amazing Travel Packages",
    description:
      "Plan your next adventure with Navique. Explore curated travel packages and unforgettable destinations.",
    images: ["https://i.ibb.co/4g15PhMc/image.png"],
    creator: "@navique", // optional, safe to keep even if not registered yet
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "travel",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-301px)]">
        {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
