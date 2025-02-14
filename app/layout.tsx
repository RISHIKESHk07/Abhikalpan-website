import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Genos = localFont({
  src: "../public/fonts/Genos/Genos-VariableFont_wght.ttf",
  variable: "--font-genos",
  weight: "100 900",
});

const Aporo = localFont({
  src: "../public/fonts/Aboro.ttf",
  variable: "--font-aporo",
  weight: "100 900",
});

const hellvitica = localFont({
  src:"../public/fonts/helvetica-light-587ebe5a59211.ttf",
  variable: "--font-hellvitica",
  weight: "100 900",
});

const edwardian = localFont({
  src:"../public/fonts/Edwardian.ttf",
  variable: "--font-edwardian",
  weight: "100 900",
});

export const metadata : Metadata = {
  title: "Abhikalpan: The TechFest of IIITDM Jabalpur",
  description:
    "Abhikalpan'25 celebrates the transformative journey of technology and design, bridging the past, present, and future. From AI and quantum computing to sustainable design and smart cities, innovation is reshaping industries and our world. This year's fest honors visionary thinkers across eras, reflecting on past wisdom and future possibilities to craft a better tomorrow. Join us in celebrating the journey of innovation that shapes the future!",
  metadataBase: new URL("https://www.abhikalpan.live"),
  alternates: {
    canonical: "https://www.abhikalpan.live",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Genos.variable} ${hellvitica.variable} ${Aporo.variable} ${edwardian.variable} antialiased`}
      >
         <Toaster />
        {children}
      </body>
    </html>
  );
}
