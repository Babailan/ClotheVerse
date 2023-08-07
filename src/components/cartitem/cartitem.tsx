import {
  getCartLength,
  removeProduct,
  updateProduct,
  getAllCartProducts,
} from "../../libs/cartHandler";
import { ProductData } from "../../type";
import Line from "../line/line";

function CartItem({
  product,
  setCartItem,
  setProducts,
}: {
  product: ProductData;
  setCartItem: Function;
  setProducts: Function;
}) {
  return (
    <div className="">
      <Line />
      <div className="flex">
        <div className="flex gap-5 w-full">
          <img
            className="w-24 h-32 sm:w-40 sm:h-52"
            src={product.image_path}
          ></img>
          <div className="flex flex-col gap-10 sm:flex-row w-full sm:justify-between sm:pr-10">
            <div>
              <div className="text-sm">{product.product_name}</div>
              <div className="text-sm capitalize text-gray-400">
                {product.type}
              </div>
              <div className="text-sm mt-2">${product.price}</div>
            </div>
            <div className="relative w-fit h-fit flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
                fill="#fff"
                className="right-1 absolute pointer-events-none"
              >
                <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
              </svg>
              <select
                defaultValue={product.order}
                onChange={async (e) => {
                  try {
                    e.preventDefault();
                    const value = e.target.value;
                    await updateProduct(product.id, value);
                    const allProducts = await getAllCartProducts();
                    setProducts(allProducts);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                className="bg-transparent text-white text-sm pl-3 py-1 pr-8 border-2 rounded-md appearance-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
                  return <Option value={v} key={v} />;
                })}
              </select>
            </div>
          </div>
        </div>
        <div>
          {/* remove button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            viewBox="0 -960 960 960"
            width="25"
            fill="white"
            className="cursor-pointer"
            onClick={async () => {
              try {
                await removeProduct(product.id);
                const length = await getCartLength();
                setCartItem(length);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
function Option({ value }) {
  return (
    <option value={value} className="text-black">
      {value}
    </option>
  );
}

export { CartItem };
