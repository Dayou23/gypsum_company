import { Avatar, Dropdown, DropdownHeader, DropdownItem } from "flowbite-react";

import { UserButton } from "@clerk/nextjs";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { auth, currentUser } from "@clerk/nextjs";
import { MdOutlineLanguage } from "react-icons/md";
import logoSite from "@/utils/logoSite.png";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Index");
  const { userId } = auth();
  // console.log(userId);

  return (
    <Navbar fluid rounded className="sticky top-0 z-50 h-19 shadow-md ">
      <NavbarBrand className="flex items-center justify-center" href="/">
        <Image
          src={logoSite}
          className="mr-1 dark:invert"
          alt="GNMC Logo"
          width={30}
          height={30}
        />
        <span className="self-center text-base sm:text-xl font-semibold  dark:text-slate-300">
          {t("GNMCPlatre")}
        </span>
      </NavbarBrand>

      <div className="flex items-center gap-2 md:order-4">
        {/* <NavbarCollapse> */}
        <div></div>

        {!userId ? (
          <>
            <Link href="/sign-in" locale="fr">
              {" "}
              <Button className="bg-teal-600  text-sm font-medium text-slate-100 shadow-md hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto">
                {t("Login")}
              </Button>
            </Link>
            <Link href="/sign-up" locale="fr">
              <Button className="bg-white text-sm font-medium text-teal-600 shadow-md	 hover:text-slate-100 focus:outline-none focus:ring active:text-teal-500 sm:w-auto dark:text-slate-100">
                {t("Register")}{" "}
              </Button>{" "}
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-5">
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
        {/* </NavbarCollapse> */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            // <Avatar
            //   alt="language"
            //   img={(props) => (
            //     <Image
            //       alt=""
            //       height="48"
            //       referrerPolicy="no-referrer"
            //       src="/images/people/profile-picture-5.jpg"
            //       width="48"
            //       {...props}
            //     />
            //   )}
            //   rounded
            //   size="xs"
            // />
            <MdOutlineLanguage size={27} className="dark:text-slate-300" />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">{t("language")}</span>
          </DropdownHeader>
          <Link href="/" locale="en" dir="ltr">
            <DropdownItem>English</DropdownItem>
          </Link>
          <Link href="/" locale="fr" dir="ltr">
            <DropdownItem>French</DropdownItem>
          </Link>
          <Link href="/" locale="ar" dir="rtl">
            <DropdownItem>العربية</DropdownItem>
          </Link>
        </Dropdown>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href="/"></NavbarLink>
        <NavbarLink href="/">{t("Home")}</NavbarLink>
        <NavbarLink href="#products">{t("Products")}</NavbarLink>
        <NavbarLink href="/aboutUs">{t("About")}</NavbarLink>
        <NavbarLink href="#contact"> {t("Contact")}</NavbarLink>
        <NavbarLink href="/CRM"> {t("ComplaintsDepartment")}</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
