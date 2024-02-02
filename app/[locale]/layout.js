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
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DEIFEL GYPSE",
  description: "Generated by create next app",
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
            <FooterComponent />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
