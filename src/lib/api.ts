import { Product } from "@/types/products";

// export const fetchProducts = async (): Promise<Product[]> => {
//   const res = await fetch("https://dummyjson.com/products/");
//   if (!res.ok) throw new Error("Failed to fetch products");
//   const data = await res.json();
//   return data.products as Product[];
// };
// lib/api.ts
// import type { Product } from "@/types/products";

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
// جلب جميع الفئات
export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch("https://dummyjson.com/products/category-list");
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data: string[] = await res.json();
  return data;
};

// جلب المنتجات حسب الفئة
export const fetchProducts = async (
  category?: string,
  limit = 10,
  skip = 0
) => {
  console.log(category, "v");

  const res = await fetch(
    category
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) throw new Error("Failed to fetch category products");
  const data = await res.json();
  return { products: data.products as Product[], total: data.total as number };
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data: Product = await res.json();
  return data;
};
