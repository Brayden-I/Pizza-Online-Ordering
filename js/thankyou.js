console.log("thankyou.js loaded");

// Data
const params = new URLSearchParams(window.location.search);

const PIZZA_PRICE = 9.49;
const TAX_RATE = .076;

const customerName = params.get("customerName");
const phone = params.get("customerPhone");
const pizza = params.get("pizzaSelect");
const quantity = parseInt(params.get("quantitySelect"));

// Display order
document.getElementById("receiptName").textContent = customerName;
document.getElementById("receiptPhone").textContent = phone;
document.getElementById("receiptPizza").textContent = pizza;
document.getElementById("receiptQuantity").textContent = quantity;

// Calculate totals
const subtotal = quantity * PIZZA_PRICE;
const tax = subtotal * TAX_RATE;
const total = subtotal + tax;

document.getElementById("priceLabel").textContent = `Subtotal price (${quantity} * ${PIZZA_PRICE})`;
document.getElementById("receiptSubtotal").textContent = `$${subtotal.toFixed(2)}`;
document.getElementById("receiptTax").textContent = `$${tax.toFixed(2)}`;
document.getElementById("receiptTotal").textContent = `$${total.toFixed(2)}`;
