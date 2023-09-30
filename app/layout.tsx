// Rename your local RootLayout to MainLayout
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Profiles from "./components/Profiles";
import "../styles/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "insta Player",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#000000] text-white ${inter.className}`}>
        <Header />
        <Profiles />
        <Footer />
        {children}
      </body>
    </html>
  );
}
