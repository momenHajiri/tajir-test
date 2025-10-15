/* eslint-disable @next/next/no-img-element */
import CheckoutForm from "@/components/CheckoutForm";
import { fetchProductById } from "@/lib/api";
import Link from "next/link";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProductById(params.id);

  return (
    <div className="pt-10 ">
      <Link
        href="/store"
        className="mr-5 font-bold bg-gradient-to-r from-blue-600 to-green-500 text-white text-sm px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-green-600 transition-all duration-300"
      >
        {"<"}
      </Link>
      <section className="container mx-auto py-12 px-4 pb-20 ">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-2xl p-6 shadow-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-contain w-full h-[400px] rounded-xl"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
                {product.title}
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                {product.description}
              </p>
              <p className="text-3xl font-bold text-blue-600 mb-6">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <CheckoutForm product={product} />
          </div>
        </div>
      </section>
    </div>
  );
}
