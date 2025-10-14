import React from "react";
import { fetchCategories, fetchProducts } from "@/lib/api";
import Pagination from "@/components/lib/pegenation";
import ProductCard from "@/components/products/ProductCard";
import CategoriesSlider from "@/components/products/CategoriesSlider";

// next js router put var in url in props
interface StorePageProps {
  searchParams: { page?: string; category?: string };
}

async function Store({ searchParams }: StorePageProps) {
  const page = Number(searchParams.page || "1");
  const limit = 12;
  const skip = (page - 1) * limit;
  const category = searchParams.category ?? "";
  const { products, total } = await fetchProducts(category, limit, skip);
  const totalPages = Math.ceil(total / limit);
  const categories = await fetchCategories();

  return (
    <div key={searchParams.category} className="container mx-auto py-8 px-4">
      <CategoriesSlider categories={categories} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {total > 12 ? (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/store"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Store;
