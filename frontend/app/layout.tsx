import { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Footer from "@/components/ui/layout/Footer";
import Dashboard from "@/components/ui/layout/Dashboard";

// Load local fonts
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

// Metadata for SEO and accessibility
export const metadata: Metadata = {
  title: "CNFT Collection Creator",
  description: "Our Compressed NFT Collection Creator empowers you to mint thousands of NFTs at a fraction of the cost. Unleash your creativity and scale your projects like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-poppins font-syne antialiased`}
      >
        {children}
        <Dashboard />
        <Footer />
      </body>
    </html>
  );
}
