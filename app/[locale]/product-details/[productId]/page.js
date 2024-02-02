"use client";
import BreadCrumb from "@/components/BreadCrumb";
import ProductApi from "@/utils/ProductApi";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import ProductBanner from "@/components/ProductBanner";
import ProductInfo from "@/components/ProductInfo";

const page = ({ params }) => {
  const [product, setProduct] = useState("");
  const path = usePathname();
  useEffect(() => {
    const getProductById = async () => {
      try {
        const res = await ProductApi.getProductById(params?.productId);
        setProduct(res?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductById();
  }, []);
  const locale = useParams().locale;
  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb path={path} product={product} locale={locale} />
      <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">
        <ProductBanner product={product} />
        <ProductInfo product={product} locale={locale} />
      </div>
      {/* <div>
        <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
        <ProductList productList={productList} />
      </div> */}
    </div>
  );
};

export default page;
