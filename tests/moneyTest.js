import { formatCurrency } from "../scripts/utils/money.js";
// Automated test

console.log("test suite: format currency");

console.log("it converts cents into dollar");
if (formatCurrency(2005) === "20.05") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("it works with 0");

if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("it rounds up with nearest cent");

if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}
