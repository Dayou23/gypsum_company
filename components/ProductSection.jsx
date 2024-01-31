"use client";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import productApi from "@/utils/ProductApi";
// import { ArrowRight } from "lucide-react";

const ProductSection = ({ productsName }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getLatestProducts = async () => {
      try {
        const res = await productApi.getLatesProducts();
        setProductList(res.data.data);
      } catch {}
    };
    getLatestProducts();
  }, []);
  // console.log("productList", productList);
  return (
    <div className="px-10 md:px-20 mb-8" id="products">
      <h2 className="font-bold text-[20px] my-3 dark:text-white">
        {productsName}
        {/* <span
          className="font-normal text-[14px]
         float-right text-primary flex 
         items-center cursor-pointer hover:text-teal-600"
        >
          View All Collection
          <ArrowRight className="h-4" />{" "}
        </span> */}
      </h2>{" "}
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
