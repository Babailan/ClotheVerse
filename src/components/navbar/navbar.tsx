import { useRouter } from "next/router";
import NavbarLi from "./sub-component/li";
import Image from "next/image";
function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="w-12 mr-5">
          <img
            alt="Logo"
            src={"/logo.svg"}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="list-none tracking-wider md:flex gap-5 hidden">
          <NavbarLi
            route={"/"}
            onClick={() => {
              router.push("/");
            }}
          >
            Explore
          </NavbarLi>
          <NavbarLi
            route={"/apparel"}
            onClick={() => {
              router.push("/apparel");
            }}
          >
            Apparel
          </NavbarLi>
          <NavbarLi
            route={"/disclaimer"}
            onClick={() => {
              router.push("/disclaimer");
            }}
          >
            Disclaimer
          </NavbarLi>
        </div>
      </div>
      <div className="flex items-center">
        <span className="material-symbols-outlined cursor-pointer text-3xl md:hidden">
          menu
        </span>
        <div className="md:flex hidden duration-100 items-center border-2 px-4 py-1 rounded-md cursor-pointer hover:text-slate-900 hover:bg-white">
          <span className="material-symbols-outlined text-3xl mr-1">
            shopping_cart
          </span>
          <span className="text-sm">Cart</span>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
