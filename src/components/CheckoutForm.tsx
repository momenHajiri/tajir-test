"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/types/products";
import { useCheckout } from "@/contexts/CheckoutContext";

interface CheckoutFormProps {
  product: Product;
}

export default function CheckoutForm({ product }: CheckoutFormProps) {
  const { setProduct, setQuantity } = useCheckout();
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setProduct(product);
    setQuantity(qty);
    router.push("/checkout");
  };

  return (
    <form
      onSubmit={handleCheckout}
      className="flex flex-col gap-4 mt-6 max-w-xs w-full"
    >
      <label className="flex flex-col text-sm font-medium text-gray-700">
        الكمية
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
      </label>

      <button
        type="submit"
        className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2.5 rounded-lg font-medium shadow hover:from-green-700 hover:to-green-600 transition-all duration-300"
      >
        Checkout
      </button>
    </form>
  );
}
