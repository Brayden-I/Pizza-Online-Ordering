console.log("script.js loaded");

const pizzaSelector = document.getElementById("pizzaSelect");
const pizzaTypes = ["Pepperoni", "Cheese", "Sausage", "Hawaiian", "Alfredo"]

const quantitySelector = document.getElementById("quantitySelect");

// Populate pizzaSelector with pizzaTypes
pizzaTypes.forEach(pizza => {
    const option = document.createElement("option");
    option.value = pizza;
    option.textContent = pizza;
    pizzaSelector.appendChild(option);
})

// Populate quantitySelect with a for loop
for (i = 0; i < 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    quantitySelector.appendChild(option);
}

