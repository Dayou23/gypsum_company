import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import logoSite from "@/utils/logoSite.png";
import { useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations("Index");
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://res.cloudinary.com/dhiwfjb94/image/upload/v1706375565/351123973_195678656773888_1345559934363404921_n_0412242289.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <Image
                src={logoSite}
                className="mr-3  contrast-200"
                alt="GNMC Logo"
                width={90}
                height={90}
              />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {t("GNMCPlatre")}
            </h2>

            <p className="mb-1 text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
              {t("OuledDjellal")}
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <Image src={logoSite} alt="GNMC Logo" width={50} height={50} />
              </a>

              <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                {t("GNMCPlatre")}
              </h1>

              <p className="my-1 text-base sm:text-lg md:text-xl leading-relaxed text-gray-500">
                {t("OuledDjellal")}
              </p>
            </div>

            <SignUp />
          </div>
        </main>
      </div>
    </section>
  );
}
