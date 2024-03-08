import BackToTop from "./components/BackToTop";
import NavBar from "./components/NavBar";
import NavMobile from "./components/NavBarMobile";
import Footer from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
// import GAnalytics from "./components/GAnalytics";
// import GAds from "./components/GAds";
// import GTag from "./components/GTag";
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

      <script
        dangerouslySetInnerHTML={{
          __html: `
        <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P7JLH4K8');</script>
      <!-- End Google Tag Manager -->`,
        }}
      />

      <body id="inicio" className="">

        <script
          dangerouslySetInnerHTML={{
            __html: `
          <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7JLH4K8"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->`,
          }}
        />

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
