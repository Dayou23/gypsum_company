import "./globals.css";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import useTextDirection from "@/components/useTextDirection";
import { useTranslations } from "next-intl";
import FooterComponent from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import Map from "@/components/Map";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DEIFEL GYPSE",
  description:
    "DEIFEL Corporation for the manufacture of gypsum and its derivatives is one of the important institutions in the field of gypsum production in Algeria, as it meets the needs of a large number of the country’s states for gypsum, starting from the state of Setif and the Haute Plateau region, all the way to the state of El Oued in the south-east and its environs. The matter was not limited only here, as In recent years, the company has begun exporting its products outside the country to African countries, including Benin, Togo, Senegal, and Negro Côte d'Ivoire.",
};

export default function RootLayout({ children, params }) {
  const t = useTranslations("Index");
  const locale = useLocale();
  const direction = useTextDirection(locale);
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <ClerkProvider>
      <html lang={locale} dir={direction}>
        <body className={inter.className}>
          {" "}
          <div className="dark:bg-[#1F2937]">
            <Header />
            {children}
            <ProductSection productsName={t("productsName")} locale={locale} />
            <ContactUs />
            <Map />

            <FooterComponent />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
