import Products from "../products.json";
import { ProductList } from "../components/product_list";

function Page() {
  return (
    <div className="">
      <div>
        <div className="py-10 text-3xl font-bold">Featured Products</div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Products.map(({ image_path, product_name, price, type, id }) => (
            <ProductList
              image_path={image_path}
              product_name={product_name}
              price={price}
              type={type}
              id={id}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
