"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface CategoriesSliderProps {
  categories: string[];
}

export default function CategoriesSlider({
  categories,
}: CategoriesSliderProps) {
  const params = useSearchParams();
  const selectedCategory = params.get("category") || "";

  return (
    <div
      className="flex overflow-x-auto no-scrollbar
 gap-3 py-4 px-2 "
    >
      <Link
        href={`/store`}
        className={`flex-shrink-0 px-4 py-2 bg-white hover:bg-gray-100 border-gray-300 rounded-full border cursor-pointer whitespace-nowrap
           `}
      >
        All
      </Link>
      {categories.map((cat, index) => (
        <Link
          key={index}
          href={`/store?category=${encodeURIComponent(cat)}`}
          className={`flex-shrink-0 px-4 py-2 rounded-full border cursor-pointer whitespace-nowrap
            ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-gray-100 border-gray-300"
            }`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
