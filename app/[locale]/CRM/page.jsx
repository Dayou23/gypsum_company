import { useTranslations } from "next-intl";
const CRM = () => {
  const t = useTranslations("Index");
  return (
    <section className="relative bg-[url(https://www.blink-it.pt/wp-content/uploads/2022/03/103_CRM.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 className="mb-4 text-3xl sm:text-5xl tracking-tight font-extrabold text-center text-gray-900 ">
          {t("VIPCustomers")}
        </h1>

        <h2 className="mb-2 lg:mb-6 text-lg sm:text-2xl font-extrabold text-center text-gray-800 ">
          {t("VIPCustomersDecs")}
        </h2>

        <ol className="relative border-s border-teal-900 dark:border-gray-700">
          <li className="mb-16 ms-5">
            <div className="absolute w-5 h-5 bg-teal-900 rounded-full  -start-2.5 border border-black  dark:border-gray-900 dark:bg-gray-700"></div>
            {/* <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </div> */}
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              {t("customer1")}
            </h3>
            <p className="mb-4 text-base font-bold text-gray-800 dark:text-gray-400">
              {t("customer2")}
            </p>
            <p className="mb-4 text-base font-bold text-gray-800 dark:text-gray-400">
              {t("customer3")}
            </p>
            <p className="mb-4 text-base font-bold text-gray-800 dark:text-gray-400">
              {t("customer4")}
            </p>
          </li>

          <li className="ms-5">
            <div className="absolute w-5 h-5 bg-teal-900 rounded-full  -start-2.5 border border-black dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              {t("customer5")}
            </h3>
            <p className="mb-4 text-base font-bold text-gray-800 dark:text-gray-400">
              {t("customer6")}
            </p>
            <p className="mb-4 text-base font-bold text-gray-800 dark:text-gray-400">
              {t("customer7")}
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default CRM;
