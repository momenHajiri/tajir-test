/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/contexts/CheckoutContext";

export default function Success() {
  const router = useRouter();
  const { product, quantity, userInfo, resetCheckout } = useCheckout();

  useEffect(() => {
    if (!product) router.push("/store");
  }, [product, router]);

  if (!product) return null;

  const total = product.price * quantity;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-blue-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-400" />

        <div className="text-center pt-10 pb-8 px-6 border-b border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            تم إرسال طلبك بنجاح
          </h1>
        </div>

        <div className="p-8 sm:p-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
              <span className="h-5 w-1.5 bg-green-500 rounded-full" />
              المعلومات الشخصية
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <InfoItem label="الاسم" value={userInfo.name} />
              <InfoItem label="الهاتف" value={userInfo.phone} />
              <InfoItem label="المدينة" value={userInfo.city} />
              <InfoItem label="العنوان" value={userInfo.address} />
              {userInfo.notes && (
                <InfoItem
                  label="ملاحظات"
                  value={userInfo.notes}
                  className="sm:col-span-2"
                />
              )}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
              <span className="h-5 w-1.5 bg-green-500 rounded-full" />
              تفاصيل الطلب
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex-shrink-0 self-center sm:self-start">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-40 h-40 object-contain rounded-xl border border-gray-200 shadow-sm bg-white"
                />
              </div>

              <div className="flex-1 text-center sm:text-left space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-500">{product.category}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 mt-3">
                  <p className="text-gray-700">
                    الكمية:{" "}
                    <span className="font-semibold text-blue-600">
                      {quantity}
                    </span>
                  </p>
                  <p className="text-gray-700">
                    السعر للوحدة:{" "}
                    <span className="font-medium">${product.price}</span>
                  </p>
                </div>
                <p className="text-xl font-bold text-green-600 mt-3">
                  الإجمالي: ${total.toFixed(2)}
                </p>
              </div>
            </div>
          </section>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                resetCheckout();
                router.push("/store");
              }}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-10 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              العودة إلى المتجر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
  className = "",
}: {
  label: string;
  value?: string | undefined;
  className?: string;
}) {
  return (
    <p
      className={`flex flex-col bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 hover:bg-gray-100 transition-colors duration-200 ${className}`}
    >
      <span className="font-medium text-gray-800 mb-1">{label}</span>
      <span className="text-gray-600">{value}</span>
    </p>
  );
}
