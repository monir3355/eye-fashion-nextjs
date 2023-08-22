import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import GlobalState from "@/context/GlobalState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EyeFashion",
  description: "Your best online ecommerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </GlobalState>
      </body>
    </html>
  );
}
