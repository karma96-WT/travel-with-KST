import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Travel with KST | Bhutan & Beyond",
  description:
    "Discover a more personal way to explore Bhutan. Thoughtful journeys, mountain trails, and living traditions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}