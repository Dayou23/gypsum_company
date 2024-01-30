import Image from "next/image";
import Link from "next/link";
// import { useTranslations } from "next-intl";
const ProductItem = ({ product }) => {
  const title = product?.attributes?.title;
  const image = product?.attributes?.image?.data[0]?.attributes?.url;
  // const t = useTranslations("Index");
  return (
    <div className="p-1 border-teal-400 rounded-lg hover:border hover:shadow-md hover:cursor-pointer">
      <Link href={`/product-details/${product?.id}`}>
        <Image
          src={image}
          alt="banner-card"
          width={400}
          height={350}
          className="rounded-t-lg  object-cover"
        />
        <div className="flex items-center justify-between p-3 rounded-b-lg bg-gray-50">
          <div className="truncate">
            <h2 className="text-[12px] font-medium line-clamp-1">{title}</h2>
            <h2 className="text-[10px] text-gray-400 flex  gap-1 items-center">
              {/* <List className="w-4 h-4" /> {t("informations")} */}
              {/* Products */}
              {product?.attributes?.description[0]?.children[0].text}
            </h2>
          </div>
          {/* <h2>{product?.attributes?.price}</h2> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
