import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";
import Hero from "@/components/Hero";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <div>
        <Hero />
      </div>
      {/* <div>
        <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/" locale="fr">
          In arab
        </Link>
        <Link href="/" locale="ar">
          In france
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t("title")}</p>
        <p>{t("subtitle")}</p>
      </div>
      <div>
        <br />
        <AlertMessage message={t("alertMessage")} />
      </div> */}
    </div>
  );
}
