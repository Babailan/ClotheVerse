import Products from "../products.json";
import { ProductList } from "../components/product_list";

function Page({ setCartItem }) {
  return (
    <div className="">
      <div>
        <div className="py-10 text-3xl sm:text-4xl font-bold">
          Featured Products
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Products.map((product) => (
            <ProductList
              product={product}
              setCartItem={setCartItem}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
