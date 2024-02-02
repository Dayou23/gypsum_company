import Image from "next/image";
// import { Lightbox, initTE } from "tw-elements";

// initTE({ Lightbox });

function ProductBanner({ product }) {
  const path = product?.attributes?.image;

  return (
    <>
      {path ? (
        <div
          // data-te-lightbox-init
          className="flex flex-col space-y-5 px-5 lg:flex-row lg:space-x-5 lg:space-y-0  "
        >
          <div className="flex h-full w-full flex-1 flex-col">
            <Image
              src={path?.data[0]?.attributes?.url}
              alt="product-details-banner"
              width={400}
              height={400}
              // data-te-img={path?.data[0]?.attributes?.url}
              className="mb-5 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
          <div class="flex h-full w-full flex-1 flex-col">
            <Image
              src={path?.data[1]?.attributes?.url}
              // data-te-img={path.data[1]?.attributes?.url}
              alt="product-details-banner"
              width={400}
              height={400}
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
        </div>
      ) : (
        <div className="w-[55vw] h-[55vh] bg-slate-200 rounded-lg animate-pulse sm:w-[35vw] sm:h-[35vh] xl:w-[40vw] md:h-[40vh]"></div>
      )}
    </>
    // <div>
    //   {path?.data.map((item) => {
    //     <Image
    //       src={`${item?.attributes?.url}`}
    //       alt={item?.attributes?.name}
    //       width={400}
    //       height={400}
    //       className="rounded-lg"
    //     />;

    //     {
    //       console.log("item", item?.attributes?.url);
    //     }
    //   })}
    // </div>
  );
}

export default ProductBanner;
