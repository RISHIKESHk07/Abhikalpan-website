import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "AbhiKalapan",
  description: "The official AbhiKalpan Website",
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
        {children}
      </body>
    </html>
  );
}
