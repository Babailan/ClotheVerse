import { addProductToCart } from "../../libs/cartHandler";
import { Product } from "../../type";
import { useState } from "react";
function ProductList(product: Product) {
  const cartClicked = () => {
    addProductToCart(product, () => {});
  };
  return (
    <div className="w-full h-full max-w flex flex-auto flex-col cursor-pointer">
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
          <div className="text-sm font-medium capitalize">{product.price}</div>
        </div>
      </div>
      <div
        onClick={cartClicked}
        className="text-sm w-100 duration-200  text-center py-2 border-2 border-gray-50 hover:text-gray-900 hover:bg-white rounded"
      >
        Add to cart
        {/* <span className="">Done</span> */}
      </div>
    </div>
  );
}

export { ProductList };
