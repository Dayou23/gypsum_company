import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import logoSite from "@/utils/logoSite.png";

const FooterComponent = () => {
  const t = useTranslations("Index");
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between items-center flex-wrap  sm:space-x-2 md:space-x-0 md:flex md:justify-between lg:flex lg:grid-cols-1">
          <FooterBrand href="/">
            <Image
              src={logoSite}
              className="mr-3 dark:invert"
              alt="GNMC Logo"
              width={70}
              height={70}
            />
            <span className=" self-center whitespace-nowrap text-base font-semibold mb-2 sm:mb-0  md:text-2xl xl:text-3xl dark:text-slate-300">
              <div>{t("GNMCPlatre")} </div>
              <div>{t("OuledDjellal")}</div>
            </span>
          </FooterBrand>

          {/* <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">Flowbite</FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div> */}
          <FooterLinkGroup>
            <FooterLink href="/">{t("Home")}</FooterLink>
            <FooterLink href="#products">{t("Products")}</FooterLink>
            <FooterLink href="aboutUs">{t("About")}</FooterLink>
            <FooterLink href="/contact-us">{t("Contact")}</FooterLink>
            <FooterLink href="/complaints">
              {t("ComplaintsDepartment")}
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <div
          className="w-full flex flex-wrap items-center justify-between sm:flex-nowrap"
          dir="ltr"
        >
          <div>
            {" "}
            <div className="flex items-center  dark:text-slate-200">
              <FaPhoneAlt className="mx-1" />
              <span>+213 661 28 56 28</span>
            </div>
            <div className="flex items-center	  dark:text-slate-200">
              <MdEmail className="mx-1" />
              <span>spa.epd@gmail.com</span>
            </div>
          </div>

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <div></div>
            <FooterIcon
              href="https://www.facebook.com/deifelgypse.ouleddjellal"
              icon={BsFacebook}
            />
            <FooterIcon
              href="https://www.instagram.com/gnmc_platre_ouled_djellal/"
              icon={BsInstagram}
            />
            <FooterIcon
              href="https://api.whatsapp.com/send?phone=%2B213661285628"
              icon={BsWhatsapp}
            />
          </div>
        </div>
        <div dir="ltr">
          {" "}
          <FooterCopyright
            href="/"
            by={t("GNMCPlatre")}
            year={2024}
            className="flex  text-center justify-center mt-2"
          />
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
