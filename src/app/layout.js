import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
// import HeroSection from "@/components/homepage/Herosection";
import Footer from "@/components/footer/Footer";
// import PropertyTypesSection from "@/components/homepage/PropertyTypeSec";
// import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Nivesh Sarthi - Real Estate in Real Sense | Premium Properties",
  description: "Nivesh Sarthi offers premium residential, commercial, and industrial properties in Faridabad, Noida, Gurgaon and Delhi. 15+ years of experience with 1000+ properties sold.",
  keywords: "real estate, properties, Faridabad, Noida, Gurgaon, Delhi, buy, sell, residential, commercial",
  openGraph: {
    title: "Nivesh Sarthi - Real Estate Solutions",
    description: "Find your perfect property with Nivesh Sarthi. Premium real estate services with 15+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <>
         <Header/>
         
        
        {children}
        <Footer/>
        </>
       
      </body>
    </html>
  );
}
