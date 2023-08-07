import { ProductData } from "../../type";
import { subtotal } from "./subtotal";

function calculateTax(ProductData: ProductData[]): string {
  return (parseFloat(subtotal(ProductData)) * 0.02).toFixed(2);
}

export { calculateTax };
