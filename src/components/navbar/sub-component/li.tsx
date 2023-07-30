import { useRouter } from "next/router";

function NavbarLi({ onClick, children, route }) {
  const router = useRouter();
  return (
    <li
      className={`p-3 cursor-pointer duration-100 ${
        router.pathname == route
          ? "text-gray-50 border-gray-50 border-b-2 font-medium"
          : "text-gray-400 border-gray-50"
      }
      hover:text-gray-50 hover:border-b-2
       hover:border-gray-50 text-sm`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export default NavbarLi;
