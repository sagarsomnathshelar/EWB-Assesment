
console.log("--- Initializing Inventory System ---");

// 1. Initial products
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 2. Take input from user
let name = prompt("Enter product name:");
let price = Number(prompt("Enter product price:"));

// 3. Validate input
if (name === null || name.trim() === "" ||
    price <= 0 || !Number.isFinite(price)) {
    console.log("Invalid product details!");
} else {
    inventory.push({
        name: name.trim(),
        price: price
    });
}

// 4. Function to calculate category
function getCategory(price) {
    if (price < 50) {
        return "Budget";
    } else if (price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}

// 5. Switch statement
function showCategory(category) {
    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

// 6. Display inventory using forEach
console.log("-- Processing Inventory Roster (forEach) --");

inventory.forEach(product => {
    let category = getCategory(product.price);

    console.log(
        "* Item: " + product.name +
        " ($" + product.price + ")" +
        " -> Category: " + showCategory(category)
    );
});

// 7. Calculate total inventory value
const calculateTotal = () => {
    let total = 0;

    inventory.forEach(product => {
        total += product.price;
    });

    return total;
};

console.log("-- Financial Analytics --");
console.log("Total Inventory Value: $" + calculateTotal());

// 8. Filter affordable products
const affordable = inventory.filter(
    product => product.price < 200
);

console.log(
    'Filtered Affordable Items (Under $200):',
    JSON.stringify(affordable.map(product => product.name))
);

// 9. Generate formatted report
const report = inventory.map(
    product => product.name.toUpperCase() +
        ": $" + product.price
);

console.log("Formatted Report List:", JSON.stringify(report));

// 10. Apply tax and discount
const calculateFinalPrice = (price, tax = 0, discount = 0) => {
    return price + (price * tax / 100)
        - (price * discount / 100);
};

console.log(
    "Laptop price with 10% tax and 5% discount: $",
    calculateFinalPrice(800, 10, 5)
);