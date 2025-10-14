import type { Metadata } from "next";
import "./globals.css";
import { CheckoutProvider } from "@/contexts/CheckoutContext";

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
