import BackToTop from "./components/BackToTop";
import NavBar from "./components/NavBar";
import NavMobile from "./components/NavBarMobile";
import Footer from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GAnalytics from "./components/GAnalytics";
import GAds from "../components/GAds";
import GTag from "../components/GTag";
import WhatsApp from "./components/WhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lavanderia Mundial",
  description: "Seus estofados limpos e cheirosos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <meta name="p:domain_verify" content="2c0d52876cc1ebd6ac09b2b35053d4ba" />
      <body id="inicio" className="">
        <BackToTop />
        <NavBar />
        <NavMobile />
        {children}
        <Analytics />
        <GAnalytics />
        <GAds />
        <GTag />
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
