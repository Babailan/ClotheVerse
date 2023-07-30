import { useEffect } from "react";

function Page() {
  useEffect(() => {
    // localStorage.setItem("name", JSON.stringify([1, 2, 3, 4]));
  }, []);
  return <div></div>;
}

export default Page;
