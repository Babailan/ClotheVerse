import { useRouter } from "next/router";

function NavbarLiDesktop({ children, route }) {
  const router = useRouter();
  return (
    <li
      className={`px-3 py-5 cursor-pointer duration-100 list-none ${
        router.pathname == route
          ? "text-gray-50 border-gray-50 border-b-2 font-medium"
          : "text-gray-400 border-gray-50"
      }
      hover:text-gray-50 hover:border-b-2
       hover:border-gray-50 text-sm`}
      onClick={() => {
        router.push(route);
      }}
    >
      {children}
    </li>
  );
}

function NavbarLiMobile({ children, route, setMenu }) {
  const router = useRouter();
  return (
    <li
      className={`list-none px-5 py-3 cursor-pointer relative hover:bg-gray-800 ${
        route == router.pathname ? "text-gray-50 bg-gray-800" : "text-gray-400"
      }`}
      onClick={() => {
        router.push(route);
        setMenu(false);
      }}
    >
      <span
        className={`w-1 bg-zinc-400 absolute h-full left-0 top-0  ${
          route == router.pathname ? "text-gray-50" : "hidden"
        }`}
      ></span>
      {children}
    </li>
  );
}

export { NavbarLiDesktop, NavbarLiMobile };
