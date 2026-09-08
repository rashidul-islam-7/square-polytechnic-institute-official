import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Square Polytechnic | Home",
  description: "Square Polytechnic is a leading educational institution dedicated to providing high-quality technical education and fostering innovation in the field of polytechnic studies. Our mission is to empower students with the skills and knowledge needed to excel in their careers and contribute to the advancement of technology and industry.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar />

          <div className="pt-16 bg-sky-100/50">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
