/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Product } from "@/types/products";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* صورة المنتج */}
      <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center">
        <img
          src={product.thumbnail || "/placeholder.png"}
          alt={product.title}
          className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* معلومات المنتج */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <Link
            href={`/store/${product.id}`}
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-green-600 transition-all duration-300"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
}
