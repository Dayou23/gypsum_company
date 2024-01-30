import { List, ListItem } from "flowbite-react";
import { useTranslations } from "next-intl";
const complaints = () => {
  const t = useTranslations("Index");
  return (
    <section className="relative bg-[url(https://www.speridian.com/wp-content/uploads/2022/02/CRM-for-manufacturing-1080x675.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {t("GNMCPlatre")}
            <strong className="block font-extrabold text-teal-700">
              {" "}
              {t("OuledDjellal")}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">{t("descHero")}</p>
          <p style={{ listStyleType: "square" }}> {t("descHeropro")}</p>
          <List>
            <ListItem>{t("pro1")}</ListItem>
            <ListItem>{t("pro2")}</ListItem>
            <ListItem>{t("pro3")}</ListItem>
            <ListItem>{t("pro4")}</ListItem>
          </List>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#products"
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
            >
              {t("Products")}
            </a>

            {/* <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default complaints;
