import React from "react";
import { metadata } from "@/app/layout";
interface LayoutProps {
  children: React.ReactNode;
}

export default async function StoreLayout({ children }: LayoutProps) {
  return (
    <div>
      <header className="text-center mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
          {metadata.title?.toString()}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          {metadata.description?.toString()}
        </p>
      </header>
      <main>{children}</main>
    </div>
  );
}
