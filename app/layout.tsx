import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/stylesheets/globals.css";
import app_title from "./lib/app_title";
import { Navbar, Footer } from "./ui/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: app_title('Home'),
  description: `
    Inventum Health Services offers expert mobile occupational health care,
    corporate wellness services, medical certificates, and workplace safety
    training. Get your free quotation today.
  `,
  keywords: `
    mobile occupational health care, corporate wellness,
    medical certificates, workplace safety training,
    Inventum Health Services, Inventum, Radiology,
    health care, corporate health care
  `
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
