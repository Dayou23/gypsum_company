import { useTranslations } from "next-intl";
const ContactUs = () => {
  const t = useTranslations("Index");
  return (
    <section
      id="contact"
      // className="border-y-2  border-gray-200"
      className="relative bg-[url(https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038396.jpg?w=900&t=st=1707336076~exp=1707336676~hmac=ae6bf6dff7b0522068c499c7753814661c1f45833d88369ffe541891de587eb8)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 className="mb-4 text-3xl sm:text-5xl tracking-tight font-extrabold text-center text-gray-900 ">
          {t("ContactUsTextOne")}
        </h1>

        <h2 className="mb-1 lg:mb-2 text-lg sm:text-xl font-bold text-center text-gray-800 ">
          {t("ContactUsTextTwo")}
        </h2>
        <h3 className="mb-4 lg:mb-6 text-lg sm:text-xl font-semibold text-center text-gray-700 ">
          {t("ContactUsTextThree")}
        </h3>
        <h1 className="text-2xl sm:text-3xl mb-3 lg:mb-14 font-bold text-center text-gray-900 ">
          {t("ContactUsTextFour")}
        </h1>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {t("YourEmail")}
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {t("Subject")}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 "
              placeholder={t("SubjectPlaceholder")}
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {t("YourMessage")}
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-teal-500 focus:border-teal-500 "
              placeholder={t("MessagePlaceholder")}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 "
          >
            {t("SendMessageButton")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
