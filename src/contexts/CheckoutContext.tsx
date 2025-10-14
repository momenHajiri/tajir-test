"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "@/types/products";
import type { UserInfo } from "@/types/user";

interface CheckoutContextType {
  product: Product | null;
  setProduct: (p: Product) => void;
  quantity: number;
  setQuantity: (n: number) => void;
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
  resetCheckout: () => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [product, setProductState] = useState<Product | null>(null);
  const [quantity, setQuantityState] = useState<number>(1);
  const [userInfo, setUserInfoState] = useState<UserInfo>({
    name: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });

  // نقرأ من localStorage بس بعد ما يشتغل الـ client
  useEffect(() => {
    const savedProduct = localStorage.getItem("checkout_product");
    const savedQuantity = localStorage.getItem("checkout_quantity");
    const savedUserInfo = localStorage.getItem("checkout_userInfo");

    if (savedProduct) setProductState(JSON.parse(savedProduct));
    if (savedQuantity) setQuantityState(Number(savedQuantity));
    if (savedUserInfo) setUserInfoState(JSON.parse(savedUserInfo));
  }, []);

  const setProduct = (p: Product) => {
    setProductState(p);
    localStorage.setItem("checkout_product", JSON.stringify(p));
  };

  const setQuantity = (q: number) => {
    setQuantityState(q);
    localStorage.setItem("checkout_quantity", q.toString());
  };

  const setUserInfo = (info: UserInfo) => {
    setUserInfoState(info);
    localStorage.setItem("checkout_userInfo", JSON.stringify(info));
  };

  const resetCheckout = () => {
    setProductState(null);
    setQuantityState(1);
    setUserInfoState({ name: "", phone: "", city: "", address: "", notes: "" });
    localStorage.removeItem("checkout_product");
    localStorage.removeItem("checkout_quantity");
    localStorage.removeItem("checkout_userInfo");
  };

  return (
    <CheckoutContext.Provider
      value={{
        product,
        setProduct,
        quantity,
        setQuantity,
        userInfo,
        setUserInfo,
        resetCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context)
    throw new Error("useCheckout must be used within a CheckoutProvider");
  return context;
};
