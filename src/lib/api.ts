import { Product } from "@/types/products";

// كلشي منتجات
// export const fetchProducts = async (): Promise<Product[]> => {
//   const res = await fetch("https://dummyjson.com/products/");
//   if (!res.ok) throw new Error("Failed to fetch products");
//   const data = await res.json();
//   return data.products as Product[];
// };
// lib/api.ts
// import type { Product } from "@/types/products";

// البيجينيشن لموقع الداتا يلي كنسلناه
// export const fetchProducts = async (
//   limit = 10,
//   skip = 0
// ): Promise<{ products: Product[]; total: number }> => {
//   const res = await fetch(
//     `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
//   );
//   if (!res.ok) throw new Error("Failed to fetch products");
//   const data = await res.json();
//   console.log(data);
//   return { products: data.products as Product[], total: data.total as number };
// };
const BASE_URL = "https://dummyjson.com/products";

export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/category-list`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data: string[] = await res.json();
  return data;
};

export const fetchProducts = async (
  category?: string,
  limit = 12,
  skip = 0
) => {
  const res = await fetch(
    category
      ? `${BASE_URL}/category/${category}?limit=${limit}&skip=${skip}`
      : `${BASE_URL}?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) throw new Error("Failed to fetch category products");
  const data = await res.json();
  return { products: data.products as Product[], total: data.total as number };
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data: Product = await res.json();
  return data;
};
