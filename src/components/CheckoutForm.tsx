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

  const increase = () => setQty((prev) => prev + 1);
  const decrease = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <form
      onSubmit={handleCheckout}
      className="
        flex flex-col gap-4 mt-6 max-w-xs w-full
        sm:mx-0 sm:text-left
        mx-auto text-center
      "
    >
      <label
        className="
          flex flex-col text-sm font-medium text-gray-700
        "
      >
        الكمية
        <div
          className="
            flex items-center justify-between 
            border border-gray-300 rounded-lg mt-1 overflow-hidden
            focus-within:ring-2 focus-within:ring-blue-400 transition
          "
        >
          <button
            type="button"
            onClick={decrease}
            className="
              w-10 h-10 flex items-center justify-center 
              text-lg font-bold text-gray-600 hover:bg-gray-100
              transition
            "
          >
            −
          </button>

          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            className="
              w-full text-center outline-none appearance-none
              text-gray-800 font-medium
            "
            required
          />

          <button
            type="button"
            onClick={increase}
            className="
              w-10 h-10 flex items-center justify-center 
              text-lg font-bold text-gray-600 hover:bg-gray-100
              transition
            "
          >
            +
          </button>
        </div>
      </label>

      <button
        type="submit"
        className="
          bg-gradient-to-r from-green-600 to-green-500 text-white py-2.5 rounded-lg font-medium shadow
          hover:from-green-700 hover:to-green-600 transition-all duration-300
          w-full sm:self-start
        "
      >
        Checkout
      </button>
    </form>
  );
}
