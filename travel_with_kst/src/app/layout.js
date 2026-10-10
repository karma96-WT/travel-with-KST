import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/NavBar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel with KST | Bhutan & Beyond",
  description: "Discover a more personal way to explore Bhutan. Thoughtful journeys, mountain trails, and living traditions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>  
      </body>
      
    </html>
  );
}
