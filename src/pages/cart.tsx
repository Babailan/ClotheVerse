import { useEffect, useState } from "react";
import { getAllCartProducts } from "../libs/cartHandler/getAllCartProducts";
import { ProductData } from "../type";
import Line from "../components/line/line";
import { CartItem } from "../components/cartitem";
import { CartEmpty } from "../components/cartempty";
import { calculateTax, ordertotal, subtotal } from "../libs/ordercalculation";
import { Reminder } from "../components/modal";

function Page({ setCartItem, cartItem }) {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllCartProducts()
      .then((v) => {
        setProducts(v);
      })
      .catch((v) => {
        console.error(v);
      });
  }, [cartItem]);

  return (
    <div className="py-10 relative">
      <div className="text-3xl font-medium">Shopping Cart</div>
      <div className="flex gap-8 flex-col lg:flex-row justify-center">
        <div className="w-full">
          {products.length != 0 ? (
            products.map((v) => {
              return (
                <CartItem
                  setProducts={setProducts}
                  setCartItem={setCartItem}
                  product={v}
                  key={v.id}
                />
              );
            })
          ) : (
            <CartEmpty />
          )}
        </div>
        <div className="bg-zinc-900 rounded px-3 pt-10 flex flex-col gap-7 w-full h-fit">
          <div className="text-lg tracking-wide font-normal">Order Summary</div>
          <div className="flex flex-col gap-2">
            {/* subtotal */}
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Subtotal</span>
                <span>${subtotal(products)}</span>
              </div>
              <Line margin={"my-2"} />
            </div>
            {/* shipping estimate */}
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Shipping estimate</span>
                <span>${products.length && 5}</span>
              </div>
              <Line margin={"my-2"} />
            </div>
            {/* tax estimate */}
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Tax estimate</span>
                <span>${calculateTax(products)}</span>
              </div>
              <Line margin={"my-2"} />
            </div>
            {/* order total */}
            <div className="flex justify-between text-lg">
              <span className="tracking-wide">Order Total</span>
              <span className="tracking-wide mb-3">
                ${products.length != 0 ? ordertotal(products) : 0}
              </span>
            </div>
            {products.length != 0 ? (
              <div
                onClick={() => setShowModal((v) => true)}
                className="text-lg text-center py-2 cursor-pointer border-white border-2 rounded-md mb-3"
              >
                Check out
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {showModal && <Reminder onClick={() => setShowModal((v) => !v)} />}
    </div>
  );
}

export default Page;
