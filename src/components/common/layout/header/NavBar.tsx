"use client";

//Hooks/Packages
import { useCallback, useState, useEffect } from "react";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

// Components
import Image from "next/image";
import NavBarItem from "./NavBarItem";

// Data
import { navbarItems } from "@/constants/navbar";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
const TOP_OFFSET = 66;

const NavBar = () => {
  // ---States---
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  //---Actions---
  //Toggle Menu
  const toggleMobile = useCallback(() => {
    setToggleMenu(prev => !prev);
  }, []);

  //Toggle Menu
  const toggleAccountMenu = useCallback(() => {
    setToggleAccount(prev => !prev);
  }, []);

  // Background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed z-40">
      <nav
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          navbarBg ? "bg-zinc-900 bg-opacity-90" : ""
        }   relative`}
      >
        <figure className="h-4 lg:h-7">
          <Image
            src="/images/logo.png"
            alt="Netflix"
            fill
            className="!static object-contain"
          />
        </figure>
        {/* Lg Screen Menu */}
        <div className="flex-row ms-8 gap-7 hidden lg:flex">
          {navbarItems.map(({ key, label, link }) => (
            <NavBarItem key={key} link={link} label={label} />
          ))}
        </div>
        {/* SM Screen Menu */}
        <button
          className="flex lg:hidden gap-2 items-center ms-8 cursor-pointer relative"
          onClick={toggleMobile}
        >
          <p className="text-white text-sm">Brows</p>
          <BsChevronDown
            className={`text-white transition ${
              toggleMenu ? "rotate-180" : "rotate-0"
            } `}
          />
          <MobileMenu visible={toggleMenu} />
        </button>
        {/* Right Side | Account Menu*/}
        <div className="flex flex-row items-center ms-auto gap-7">
          <button className="text-gray-200 hover:text-gray-300">
            <BsSearch />
          </button>
          <button className="text-gray-200 hover:text-gray-300">
            <BsBell />
          </button>
          <button
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 relative"
          >
            <figure className="w-7 h-7 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                src="/images/default-blue.png"
                alt="Netflix"
                fill
                className="!static object-contain"
              />
            </figure>
            <BsChevronDown
              className={`text-white transition ${
                toggleAccount ? "rotate-180" : "rotate-0"
              } `}
            />
            <AccountMenu visible={toggleAccount} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;