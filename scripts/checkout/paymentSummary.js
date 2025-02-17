import { cart } from "../../data/cart.js";

export function renderPaymentSummary() {
  cart.forEach((product) => {
    console.log(product);
  });
} 
