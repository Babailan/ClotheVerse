import { ProductData } from "../../type";

function subtotal(array: ProductData[]): string {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const n = array[i].price * array[i].order;
    total = total + n;
  }
  return total.toString();
}

export { subtotal };
