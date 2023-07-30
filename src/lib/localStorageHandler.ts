import { Product } from "../type/product";

function addProduct({ id, product_name, image_path }: Product) {
  const cartProduct = { id, product_name, image_path, quantity: 0 }; // Create a new cart product object

  let cartList = JSON.parse(localStorage.getItem("cart")) || []; // Get the cart list from localStorage or initialize it as an empty array
  console.log(cartList.some((item: any) => item.id === id));

  if (!cartList.some((item: any) => item.id === id)) {
    // Check if the cart list already contains an item with the same id
    cartList.push(cartProduct); // Add the cart product to the cart list
    localStorage.setItem("cart", JSON.stringify(cartList)); // Store the updated cart list in localStorage
  }
}

function removeProduct(id: string) {
  let cartList = JSON.parse(localStorage.getItem("cart")) || [];

  // Find the index of the product with the specified id in the cart list
  const index = cartList.findIndex((item: any) => item.id === id);

  if (index !== -1) {
    cartList.splice(index, 1); // Remove the product from the cart list
    localStorage.setItem("cart", JSON.stringify(cartList)); // Store the updated cart list in localStorage
  }
}

export { addProduct, removeProduct };
