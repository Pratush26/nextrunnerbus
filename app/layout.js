import { Geist, Geist_Mono, Underdog } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const underdog = Underdog({
  variable: "--font-underdog",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "NextRunner",
  description: "It is NextRunner bus companies websites. It is an little introduction about the bus company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${underdog.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
