function add(a, b) {
    return a + b;
}

console.log("12 + 8 =", add(12, 8));

 function subtract(a, b) {
    return a - b;
}

console.log("12 - 8 =", subtract(12, 8));
// Multiplication
function multiply(a, b) {
    return a * b;
}

console.log("12 * 8 =", multiply(12, 8));

// Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }

    return a / b;
}

console.log("12 / 8 =", divide(12, 8));
console.log("-10 / 2 =", divide(-10, 2));
console.log("12 / 0 =", divide(12, 0));

// Modulus
function modulus(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }

    return a % b;
}

console.log("17 % 5 =", modulus(17, 5));
console.log("-10 % 3 =", modulus(-10, 3));
console.log("0 % 5 =", modulus(0, 5));
console.log("10 % 0 =", modulus(10, 0));
// Exponentiation
function power(a, b) {
    return a ** b;
}

console.log("2 ** 3 =", power(2, 3));
console.log("(-2) ** 2 =", power(-2, 2));
console.log("5 ** 0 =", power(5, 0));

// Compute Total with VAT
function computeTotal(price, qty, vatRate) {
    let subtotal = price * qty;

    // Parentheses clarify the order of operations.
    let total = subtotal * (1 + vatRate);

    return Number(total.toFixed(2));
}

console.log("\n===== COMPUTE TOTAL =====");

console.log(
    "Price: 250, Quantity: 3, VAT: 12% =",
    computeTotal(250, 3, 0.12)
);

console.log(
    "Price: 100, Quantity: 2, VAT: 12% =",
    computeTotal(100, 2, 0.12)
);

console.log(
    "Price: 0, Quantity: 5, VAT: 12% =",
    computeTotal(0, 5, 0.12)
);