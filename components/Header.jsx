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
    // <header className="bg-white dark:bg-gray-900">
    //   <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto shadow-md sm:px-6 lg:px-8">
    //     <Image src="/logo.svg" alt="logo" width={30} height={30} />

    //     <div className="flex items-center justify-end flex-1 md:justify-between">
    //       <nav aria-label="Global" className="hidden md:block">
    //         <ul className="flex items-center gap-6 text-sm">
    //           <li>
    //             <a
    //               className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
    //               href="/"
    //             >
    //               Home
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
    //               href="/api/send"
    //             >
    //               Explore
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
    //               href="/"
    //             >
    //               Projects
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
    //               href="/"
    //             >
    //               About Us
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
    //               href="/"
    //             >
    //               Contact Us
    //             </a>
    //           </li>
    //           <li>
    //             <div class="dropdown">
    //               <button class="dropbtn">
    //                 Dropdown
    //                 <i class="fa fa-caret-down"></i>
    //               </button>
    //               <div class="dropdown-content">
    //                 <a href="#">Link 1</a>
    //                 <a href="#">Link 2</a>
    //                 <a href="#">Link 3</a>
    //               </div>
    //             </div>
    //           </li>
    //         </ul>
    //       </nav>

    //       <div className="flex items-center gap-4">
    //         {!user ? (
    //           <div className="sm:flex sm:gap-4">
    //             <a
    //               className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500 dark:hover:bg-teal-500"
    //               href="/sign-in"
    //             >
    //               Login
    //             </a>

    //             <a
    //               className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-500/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 sm:block"
    //               href="/sign-up"
    //             >
    //               Register
    //             </a>
    //           </div>
    //         ) : (
    //           <div className="flex items-center gap-5">
    //             {/* <h2 className="flex gap-1 cursor-pointer">
    //                 <ShoppingCart onClick={() => setOpenCart(!openCart)} />(
    //                 {cart?.length})
    //               </h2> */}
    //             <UserButton afterSignOutUrl="/" />
    //             {/* {openCart && <Cart />} */}
    //           </div>
    //         )}

    //         <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden">
    //           <span className="sr-only">Toggle menu</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-5 h-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    // <Navbar fluid rounded className="bg-gray-200">
    //   <Navbar.Brand href="https://flowbite-react.com">
    //     {/* <img
    //       src="/favicon.svg"
    //       className="mr-3 h-6 sm:h-9"
    //       alt="Flowbite React Logo"
    //     /> */}
    //     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    //       GNMC platre Ouled Djellal{" "}
    //     </span>
    //   </Navbar.Brand>
    //   <div className="flex md:order-2">
    //     {user ? (
    //       <>
    //         <Navbar.Collapse>
    //           <Navbar.Link href="/sign-in">
    //             {" "}
    //             <Button>{t("Login")} </Button>
    //           </Navbar.Link>
    //           <Navbar.Link href="/sign-in">
    //             <Button>{t("Register")} </Button>{" "}
    //           </Navbar.Link>
    //         </Navbar.Collapse>
    //       </>
    //     ) : (
    //       <div className="flex items-center gap-5">
    //         <UserButton afterSignOutUrl="/" />
    //       </div>
    //     )}
    //     <Navbar.Toggle />
    //   </div>
    //   <Navbar.Collapse>
    //     <Navbar.Link href="/" active>
    //       Home{t("Register")}
    //     </Navbar.Link>
    //     <Navbar.Link href="#">About{t("About")}</Navbar.Link>

    //     <Navbar.Link href="#">Contact{t("Contact")}</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>

    <Navbar fluid rounded className="sticky top-0 z-50 h-19 shadow-md ">
      <NavbarBrand className="flex items-center justify-center" href="/">
        <Image
          src={logoSite}
          className="mr-3 dark:invert"
          alt="GNMC Logo"
          width={30}
          height={30}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold mb-2 sm:mb-0 dark:text-slate-300">
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
          <Link href="/" locale="en">
            <DropdownItem> En</DropdownItem>
          </Link>
          <Link href="/" locale="fr">
            <DropdownItem> Fr</DropdownItem>
          </Link>
          <Link href="/" locale="ar">
            <DropdownItem> Ar</DropdownItem>
          </Link>
        </Dropdown>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href="/"></NavbarLink>
        <NavbarLink href="/" active>
          {t("Home")}
        </NavbarLink>
        <NavbarLink href="#products">{t("Products")}</NavbarLink>
        <NavbarLink href="#">{t("About")}</NavbarLink>
        <NavbarLink href="/contact-us"> {t("Contact")}</NavbarLink>
        <NavbarLink href="/complaints"> {t("ComplaintsDepartment")}</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
