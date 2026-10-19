import { Poppins, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
  title: "Square Polytechnic Institute",
  description:
    "Square Polytechnic Institute provides quality technical education and practical skills for students in Bangladesh. Square Polytechnic is a leading educational institution dedicated to providing quality technical education, developing practical skills, and preparing students for successful careers in technology and industry.",
  keywords: [
    "Square Polytechnic Institute",
    "Polytechnic Institute in Bangladesh",
    "Technical Education",
  ],
  authors: [{ name: "Square Polytechnic Institute" }],
  openGraph: {
    title: "Square Polytechnic Institute",
    description: "Learn technical skills and build your future.",
    url: "https://square.edu.bd",
    siteName: "Square Polytechnic Institute",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${poppins.variable} ${notoSansBengali.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <main className="flex-1 bg-background pt-20">{children}</main>

        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
