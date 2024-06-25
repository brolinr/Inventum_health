import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/stylesheets/globals.css";
import app_title from "./lib/app_title";
import { Navbar, Footer } from "./ui/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: app_title('Home'),
  description: "The official website for Inventum Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
