import { Poppins, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Square Polytechnic | Home",
  description:
    "Square Polytechnic is a leading educational institution dedicated to providing quality technical education, developing practical skills, and preparing students for successful careers in technology and industry.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${poppins.variable} ${notoSansBengali.variable}`}
    >
      <body className="min-h-screen">
        <Navbar />

        <main className="pt-16 bg-[#F8FAFA]">
          {children}
        </main>
      </body>
    </html>
  );
}