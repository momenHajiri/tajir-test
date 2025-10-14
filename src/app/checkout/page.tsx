/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/contexts/CheckoutContext";

function Checkout() {
  const router = useRouter();
  const { product, quantity, userInfo, setUserInfo } = useCheckout();

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-lg font-medium">
        لم يتم اختيار أي منتج.
      </div>
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10 sm:p-12 border border-gray-200">
        <div className="bg-gradient-to-r from-blue-400 to-green-500 rounded-3xl ">
          <h1 className="text-white py-5 text-3xl sm:text-4xl font-extrabold text-center mb-10">
            الطلب
          </h1>
        </div>
        {/* منتج */}
        <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-200 pb-6 mb-8">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-36 h-36 object-contain rounded-xl border border-gray-300 shadow-sm"
          />
          <div className="flex-1 text-center sm:text-start">
            <h2 className="font-semibold text-xl sm:text-2xl text-gray-800">
              {product.title}
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              {quantity} × ${product.price} ={" "}
              <span className="text-blue-600 font-bold">
                ${(product.price * quantity).toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        {/* الفورم */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="الاسم الكامل"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
            />

            <input
              type="tel"
              placeholder="رقم الهاتف"
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo({ ...userInfo, phone: e.target.value })
              }
              required
              className="text-right border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
            />
          </div>

          <input
            type="text"
            placeholder="المدينة"
            value={userInfo.city}
            onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
            required
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
          />

          <textarea
            placeholder="العنوان الكامل"
            value={userInfo.address}
            onChange={(e) =>
              setUserInfo({ ...userInfo, address: e.target.value })
            }
            required
            className="border border-gray-300 rounded-xl p-4 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm resize-none"
          />

          <textarea
            placeholder="ملاحظات إضافية (اختياري)"
            value={userInfo.notes}
            onChange={(e) =>
              setUserInfo({ ...userInfo, notes: e.target.value })
            }
            className="border border-gray-300 rounded-xl p-4 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm resize-none"
          />

          <button
            type="submit"
            className="mt-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
          >
            تأكيد الطلب
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
