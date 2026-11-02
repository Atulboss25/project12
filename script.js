// Program to calculate Compound Interest

// Declare variables
let P = 10000;  // Principal amount
let r = 5 / 100; // Rate of interest (5%)
let n = 4;       // Compounded 4 times per year
let t = 2;       // Time in years

// Calculate compound amount
let A = P * Math.pow((1 + r / n), (n * t));

// Calculate compound interest
let CI = A - P;

// Display the result
console.log("Principal Amount = " + P);
console.log("Rate of Interest = 5%");
console.log("Time = " + t + " years");
console.log("Compound Amount = " + A.toFixed(2));
console.log("Compound Interest = " + CI.toFixed(2));