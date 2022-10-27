import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  {
    name: "Platform",
    linkUrl: "/platform",
  },
  {
    name: "Solutions",
    linkUrl: "/solutions",
  },
  {
    name: "Customers",
    linkUrl: "/customers",
  },
  {
    name: "Resources",
    linkUrl: "/resources",
  },
  {
    name: "Company",
    linkUrl: "/company",
  },
];

const TopNavigation = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const showNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="topnavigation">
      <div
        className={`topnavigation__container bg-black-500 py-3.5 px-4 md:px-8 shadow-md ${
          isOpen ? "md:rounded-t-[10px]" : "md:rounded-[10px]"
        }`}
      >
        <div className="topnavigation__left">
          <Link href="/">LOGO</Link>
          {navLinks.map((item, index) => (
            <Link href={`${item.linkUrl}`} key={index} passHref>
              <span
                className={` hover:!text-primary xl:mx-1 ${
                  router.pathname === item.linkUrl
                    ? "!text-primary"
                    : "!text-white"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="topnavigation__right">
          <Link
            href="/login"
            id="login"
            className="!text-white hover:!text-primary"
          >
            Login
          </Link>
          <Link href="/register" id="register">
            Create an account
          </Link>
        </div>
        {/* Mobile navigation */}
        <div className="topnavigation__right__mobile">
          {!isOpen && (
            <GiHamburgerMenu
              style={{ cursor: "pointer", color: "white" }}
              onClick={showNav}
              size={20}
            />
          )}
          {isOpen && (
            <AiOutlineClose
              style={{ cursor: "pointer", color: "white" }}
              onClick={showNav}
              size={20}
            />
          )}
        </div>
      </div>
      <div
        className={`flex flex-col space-y-3 py-4
          ${
            isOpen
              ? "topnavigation__container__mobile--links !bg-black-500 !mt-0 rounded-b-[10px]"
              : "topnavigation__container__mobile--links--none"
          }
        `}
      >
        {navLinks.map((item, index) => (
          <div className="mobile__nav__links" key={index} passHref>
            <Link href={`${item.linkUrl}`}>
              <span
                onClick={() => setIsOpen(false)}
                className={`mobile--links ${
                  router.pathname === item.linkUrl
                    ? "!text-primary"
                    : "text-white"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </div>
        ))}
        <Link href="/login" id="login-mobile">
          Login
        </Link>
        <Link href="/register" id="register-mobile">
          Create an account
        </Link>
      </div>
    </header>
  );
};

export default TopNavigation;
