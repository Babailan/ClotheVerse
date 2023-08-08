import { useState } from "react";
import { NavbarLiDesktop, NavbarLiMobile } from "./sub-component/li";
import BottomLine from "../line/bottomline";
import { useRouter } from "next/router";

function Navbar({ cartItem }) {
  const [checkMobileMenus, setMobileMenu] = useState(false);
  const router = useRouter();
  const liDesktop = (
    <div className="tracking-wider sm:flex gap-5 hidden">
      <NavbarLiDesktop route={"/"}>Explore</NavbarLiDesktop>
      <NavbarLiDesktop route={"/disclaimer"}>Disclaimer</NavbarLiDesktop>
    </div>
  );
  const liMobile = (
    <div className="flex flex-col gap-2 font-medium pb-3">
      <NavbarLiMobile setMenu={setMobileMenu} route={"/"}>
        Explore
      </NavbarLiMobile>
      <NavbarLiMobile setMenu={setMobileMenu} route={"/disclaimer"}>
        Disclaimer
      </NavbarLiMobile>
    </div>
  );
  const cart = (
    <div
      onClick={() => router.push("/cart")}
      className="group flex duration-100 items-center border-2 px-3 py-1 sm:py-2 rounded-md cursor-pointer hover:text-slate-900 hover:bg-white gap-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className="fill-white group-hover:fill-slate-950"
      >
        <g>
          <rect fill="none" height="24" width="24" />
          <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
        </g>
      </svg>
      <span className="text-sm">
        <span className="hidden md:inline">Cart </span>
        {cartItem != 0 && cartItem}
      </span>
    </div>
  );
  const logo = (
    <img
      src="/logo.svg"
      width={50}
      height={50}
      className="cursor-pointer"
      onClick={() => router.push("/")}
    ></img>
  );
  const menuMobileIcon = !checkMobileMenus ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
      fill="white"
    >
      <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 -960 960 960"
      width="30"
      fill="white"
    >
      <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
  );

  return (
    <div className="relative">
      <div className="flex justify-between md:px-10 px-5 py-2 sm:py-0">
        <div className="flex items-center gap-5">
          <div
            className="sm:hidden block"
            onClick={() => {
              setMobileMenu((v) => !v);
            }}
          >
            {menuMobileIcon}
          </div>
          {logo}
          {liDesktop}
        </div>
        <div className="flex items-center gap-5">{cart}</div>
      </div>
      {checkMobileMenus && liMobile}
      <BottomLine />
    </div>
  );
}

export { Navbar };
