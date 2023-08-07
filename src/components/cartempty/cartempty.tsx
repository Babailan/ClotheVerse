import { useRouter } from "next/router";
import Line from "../line/line";

function CartEmpty() {
  const router = useRouter();
  return (
    <div>
      <Line />
      <div className="text-gray-400 py-24 text-center">
        Your cart is empty.{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => router.push("/")}
        >
          Go to order.
        </span>
      </div>
    </div>
  );
}

export { CartEmpty };
