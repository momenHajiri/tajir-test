import type { Metadata } from "next";
import "./globals.css";
import { CheckoutProvider } from "@/contexts/CheckoutContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Tajir Test",
  description: "simple e-commerce created by MomenAlajiri using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body data-theme="light" className="">
        <CheckoutProvider>{children}</CheckoutProvider>
      </body>
    </html>
  );
}
