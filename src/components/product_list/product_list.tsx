import { useState } from "react";
import { addProductToCart, getCartLength } from "../../libs/cartHandler";
import { Product } from "../../type";
import { useRouter } from "next/router";

interface ProductListProps {
  product: Product;
  setCartItem: Function;
}

function ProductList({ product, setCartItem }: ProductListProps) {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const cartClicked = () => {
    addProductToCart(product).then(async () => {
      try {
        const length = await getCartLength();
        setCartItem(length);
        setClicked(true);
      } catch (e) {
        console.error(e);
      }
    });
  };
  return (
    <div className="w-full h-full max-w flex flex-auto flex-col">
      <div className="flex flex-col group">
        <div className="h-full items-center flex group-hover:opacity-80 duration-200">
          <img
            alt={"ProductList Image"}
            src={product.image_path}
            width={"100%"}
          />
        </div>
        <div className="flex justify-between w-full items-center px-1 py-2">
          <div>
            <div className="text-base capitalize">{product.product_name}</div>
            <div className="text-sm text-gray-500 capitalize">
              {product.type}
            </div>
          </div>
          <div className="text-sm font-medium capitalize">${product.price}</div>
        </div>
      </div>
      <div
        onClick={cartClicked}
        className="relative cursor-pointer flex justify-center items-center group text-sm w-100 duration-200  text-center py-2 border-2 border-gray-50 hover:text-gray-900 hover:bg-white rounded"
      >
        Add to cart
        {clicked && (
          <span
            onClick={() => router.push("/cart")}
            className="absolute h-full text-black w-full justify-center flex items-center bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              fill="#000"
            >
              <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
            </svg>
            Check Out
          </span>
        )}
      </div>
    </div>
  );
}

export { ProductList };
