// ============================================================
// script.js — Lesson 10: ARRAYS and LOOPS
// ============================================================

// ---------- PART 1: arrays ----------
// An array is ONE variable that holds a LIST of values, in order.
// Square brackets [ ], values separated by commas.
const products = ["Coffee maker", "Headphones", "Backpack"];

// Each value has a position number called an INDEX.
// IMPORTANT: indexes start at 0, not 1!
//     index:     0              1             2
//            "Coffee maker"  "Headphones"  "Backpack"
console.log(products[0]);        // "Coffee maker"
console.log(products[2]);        // "Backpack"
console.log(products.length);    // 3  -> how many items (the last index is length - 1)

// .push() adds an item at the END of the array
products.push("Water bottle");
console.log(products);           // now 4 items

// (Why can a const array change? Same idea as last lesson: the box still holds
//  the SAME array. We changed what's inside the array, not which array it is.)


// ---------- PART 2: loops ----------
// A loop repeats code for every item, so you don't write it 100 times.
//
// The classic "for" loop:
//   for (start; keep going while...; after each round) { ... }
for (let i = 0; i < products.length; i++) {
  // i is 0, then 1, then 2, then 3... (i++ means i = i + 1)
  console.log("Product number " + i + ": " + products[i]);
}

// The modern "for...of" loop: simpler when you don't need the index.
// Read it as: "for each product of the products array..."
for (const product of products) {
  console.log("I sell: " + product);
}


// ---------- PART 3: building HTML from data ----------
// This is how real stores work: the products live in DATA (an array),
// and JavaScript creates the HTML for each one automatically.
function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";   // empty the list first, so items don't get duplicated

  for (const product of products) {
    const item = document.createElement("li");   // create a NEW <li> element
    item.textContent = product;                   // put the product name inside
    list.appendChild(item);                       // attach it to the <ul> on the page
  }

  const message = document.getElementById("product-count");

  if (products.length === 0) {
    message.textContent = "No products yet.";
  } else if (products.length === 1) {
    message.textContent = "We have " + products.length + " product.";
  } else {
    message.textContent = "We have " + products.length + " products.";
  }
}

renderProducts();   // draw the list once when the page loads


// ---------- PART 4: loops with numbers ----------
const prices = [25, 80, 40, 15];   // prices in dollars


function addProduct() {
  const productInput = document.getElementById("product-input");
  const text = productInput.value.trim();

  if (text !== "") {
    products.push(text);
    renderProducts();
    productInput.value = "";
  }
}

document.getElementById("add-product-button").addEventListener("click", addProduct);

let total = 0;
let maxPrice = prices[0];
for (const price of prices){
  total = total + price;

  if (price > maxPrice){
    maxPrice = price;
  }
}
document.getElementById("total").textContent = "The total price is $" + total;
document.getElementById("most-expensive").textContent = "Most Expensive Price is: " + maxPrice;




// ============================================================
// YOUR EXERCISES
//
// 1. PRODUCT COUNT: inside renderProducts, show in #product-count:
//      "We have 4 products."   (use products.length)
//    If the array is empty, show "No products yet." instead.
//
// 2. ADD A PRODUCT: write a function addProduct that:
//      - reads the text in #product-input
//      - if it's empty, does nothing (validation, like last lesson!)
//      - otherwise pushes it into the products array
//      - calls renderProducts() to redraw the list
//      - clears the input box (set its .value to "")
//    Connect it to #add-product-button.
//
// 3. TOTAL: use a loop to add up all the prices and show
//      "Total: $160" in #total.
//    Hint: start with  let total = 0;  then add each price inside the loop.
//
// 4. INTERVIEW-STYLE BONUS: find the MOST EXPENSIVE price with a loop
//    (no shortcuts like Math.max!) and show it in #most-expensive.
//    Hint: keep a variable with "the biggest price seen so far" and
//    use an if to replace it when you find a bigger one.
//    This exact pattern shows up constantly in coding interviews.
// ============================================================

