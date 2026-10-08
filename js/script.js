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
// Valid handlers
function showError(input, errorElement, message){
    errorElement.textContent = message;
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
}
function clearError(input, errorElement){
    errorElement.textContent = "";
    input.classList.remove("invalid");
    input.removeAttribute("aria-invalid", "true");
}

// Form Validators
function nameValidation() {
    const nameInput = customerName.value.trim();
    
    if (nameInput === ""){
        showError(customerName, nameError, "Name is required");
        return false;
    }
    if (nameInput.length < 5) {
        showError(customerName, nameError, "Name must at least be 5 characters long. Sorry Alex");
        return false;
    }
    clearError(customerName, nameError);
    return true;
}
function phoneValidation() {
    const phoneInput = customerPhone.value.trim();
    if (phoneInput === ""){
        showError(customerPhone, phoneError, "Phone is required");
        return false;
    }
    if (!PHONE_PATTERN.test(phoneInput)){
        showError(customerPhone, phoneError, "Phone pattern must be ###-###-####");
        return false;
    }
    clearError(customerPhone, phoneError);
    return true;
}
function pizzaValidation() {
    const pizzaInput = pizzaSelector.value.trim();
    
    if (pizzaInput === ""){
        showError(pizzaSelector, pizzaError, "Pizza is required");
        return false;
    }
    clearError(pizzaSelector, pizzaError);
    return true;
}
function quantityValidation() {
    const quantityInput = quantitySelector.value.trim();
    
    if (quantityInput === ""){
        showError(quantitySelector, quantityError, "Quantity is required");
        return false;
    }
    clearError(quantitySelector, quantityError);
    return true;
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
    }
    
    orderForm.submit();
})