"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath = "/store",
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-10 gap-2 flex-wrap">
      <a
        href={`${basePath}?page=${Math.max(1, currentPage - 1)}`}
        className={`px-4 py-2 rounded-xl font-bold transition-all duration-300 shadow-sm border text-sm sm:text-base ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-blue-700 border-gray-200 hover:bg-blue-50 hover:shadow-md"
        }`}
      >
        {"<"}
      </a>

      {pages.map((p) => (
        <a
          key={p}
          href={`${basePath}?page=${p}`}
          className={`px-4 py-2 rounded-xl font-semibold border transition-all duration-300 shadow-sm text-sm sm:text-base ${
            p === currentPage
              ? "bg-gradient-to-r from-blue-700 to-blue-600 text-white border-blue-700 shadow-md scale-105"
              : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-700"
          }`}
        >
          {p}
        </a>
      ))}

      <a
        href={`${basePath}?page=${Math.min(totalPages, currentPage + 1)}`}
        className={`px-4 py-2 rounded-xl font-bold transition-all duration-300 shadow-sm border text-sm sm:text-base ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-blue-700 border-gray-200 hover:bg-blue-50 hover:shadow-md"
        }`}
      >
        {">"}
      </a>
    </div>
  );
}
