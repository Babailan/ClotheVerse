import { ProductData } from "../../type";
import { subtotal } from "./subtotal";

/**
 * Calculate the total order cost, including tax and shipping.
 *
 * @param {ProductData[]} products - An array of product data.
 * @returns {string} The total order cost formatted as a string.
 */
function ordertotal(products: ProductData[]): string {
  const taxRate = 0.02; // Tax rate of 2%
  const shippingCost = 5; // Fixed shipping cost of 5 USD

  // Calculate the subtotal of the products and apply tax and shipping
  const subtotalValue = parseFloat(subtotal(products));
  const taxAmount = subtotalValue * taxRate;
  const totalWithTax = subtotalValue + taxAmount + shippingCost;

  // Format the total cost as a string with two significant digits
  const formattedTotal = totalWithTax.toFixed(2);

  return formattedTotal;
}

export { ordertotal };
