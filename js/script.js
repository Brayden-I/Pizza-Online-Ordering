console.log("script.js loaded");

// Data
const PHONE_PATTERN = /^\d{3}-\d{3}-\d{4}$/;

const pizzaTypes = ["Pepperoni", "Cheese", "Sausage", "Hawaiian", "Alfredo"];

const MAX_QUANTITY = 10;

// elements
const orderForm = document.getElementById("orderForm");
const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const pizzaSelector = document.getElementById("pizzaSelect");
const quantitySelector = document.getElementById("quantitySelect");

// Errors
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const pizzaError = document.getElementById("pizzaError");
const quantityError = document.getElementById("quantityError");

// Populate pizzaSelector with pizzaTypes
pizzaTypes.forEach(pizza => {
    const option = document.createElement("option");
    option.value = pizza;
    option.textContent = pizza;
    pizzaSelector.appendChild(option);
})

// Populate quantitySelect with a for loop
for (i = 0; i < MAX_QUANTITY; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    quantitySelector.appendChild(option);
}

// Form Validators
function nameValidation() {
    const nameInput = customerName.value.trim();
    
    if (nameInput === ""){
        return false;
    }
    if (nameInput.value.length < 5) {
        return false;
    }
    return true;
}
function phoneValidation() {
    const phoneInput = customerPhone.value.trim();
    if (phoneInput === ""){
        return false;
    }
    if (phoneInput.value.length < 10) {
        return false;
    }
    return PHONE_PATTERN.test(phoneInput.value);
}
function pizzaValidation() {
    const pizzaInput = pizzaSelector.value.trim();
    return pizzaInput !== "";
}
function quantityValidation() {
    const quantityInput = quantitySelector.value.trim();
    return quantityInput !== "";
}

// Event listeners
orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const result = [
        nameValidation(),
        phoneValidation(),
        pizzaValidation(),
        quantityValidation()
    ]
    
    const allValid = result.every(Boolean);
    
    if (!allValid) {
        return;
        // TODO: add error messages
    }
    
    orderForm.submit();
})