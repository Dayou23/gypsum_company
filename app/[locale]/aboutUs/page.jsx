import { useTranslations } from "next-intl";
const aboutUs = () => {
  const t = useTranslations("Index");
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 dark:text-slate-200">
            {t("About")}{" "}
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-slate-300">
            {t("aboutDescription")}
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-auto h-[80vh]"
            src="https://res.cloudinary.com/dhiwfjb94/image/upload/v1706869543/327059933_691596879080400_5750074588808741390_n_38a794047a.jpg"
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
