import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maniyar Cosmetics | Premium Beauty Destination",
  description: "Narayangaon's Trusted Beauty Destination for premium cosmetics, jewellery, bangles and bridal essentials.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#222222] antialiased selection:bg-[#D4A373] selection:text-white">
        <div className="overflow-x-hidden w-full relative flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
