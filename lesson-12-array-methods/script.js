// ============================================================
// script.js — Lesson 12: ARRAY METHODS (the modern way to work with lists)
// ============================================================

const products = [
  { name: "Coffee maker", price: 25, stock: 10 },
  { name: "Headphones", price: 80, stock: 3 },
  { name: "Backpack", price: 40, stock: 0 },
  { name: "Water bottle", price: 15, stock: 25 },
  { name: "Desk lamp", price: 35, stock: 0 },
  { name: "Notebook", price: 8, stock: 50 }
];


// ---------- PART 1: function PARAMETERS ----------
// So far our functions used variables from outside.
// A PARAMETER is an input you give the function when you call it.
function greet(person) {            // person = the parameter (a placeholder name)
  return "Hello " + person + "!";   // return = the function's OUTPUT, sent back
}
console.log(greet("Felipe"));       // "Hello Felipe!"
console.log(greet("Nacha"));        // same function, different input

// Analogy: a function is a machine. Parameters go IN, return comes OUT.


// ---------- PART 2: ARROW FUNCTIONS (short way to write a function) ----------
// These two are the same:
function double(n) {
  return n * 2;
}
const doubleArrow = (n) => n * 2;
// Read "=>" as "becomes": n becomes n * 2.
// When there's one line, the result is returned automatically.
console.log(doubleArrow(5));        // 10


// ---------- PART 3: the 5 array methods ----------
// Each one takes a small function and applies it to EVERY item for you.
// They replace most loops you wrote in lessons 10 and 11.

// filter -> keeps only the items where the function says TRUE
const inStock = products.filter((p) => p.stock > 0);
console.log("In stock:", inStock);          // 4 products

// map -> transforms EVERY item into something else (same length)
const names = products.map((p) => p.name);
console.log("Names:", names);               // ["Coffee maker", "Headphones", ...]

// find -> returns the FIRST item where the function says true (or undefined)
const lamp = products.find((p) => p.name === "Desk lamp");
console.log("Found:", lamp);

// sort -> orders the items. (a, b) => a.price - b.price means "lowest price first".
// WARNING: sort CHANGES the original array, so we copy it first with [...products]
const byPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Cheapest first:", byPrice);

// reduce -> combines ALL items into ONE value (the accumulator from lesson 10!)
//   reduce((total, p) => total + p.price, 0)
//          ^running total  ^current item   ^starting value
const sumOfPrices = products.reduce((total, p) => total + p.price, 0);
console.log("Sum of prices:", sumOfPrices);  // 203

// Compare: in lesson 10 this took 4 lines with a for loop. Now it's 1.


// ---------- PART 4: rendering, now with a PARAMETER ----------
// renderStore now receives WHICH list to draw.
// That's what lets us draw "all", "only in stock", "sorted"... with ONE function.
function renderStore(list) {
  const store = document.getElementById("store");
  store.innerHTML = "";

  for (const product of list) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "$" + product.price;

    const stockText = document.createElement("p");
    if (product.stock === 0) {
      stockText.textContent = "Out of stock";
      card.classList.add("out-of-stock");
    } else {
      stockText.textContent = "Stock: " + product.stock;
    }

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(stockText);
    store.appendChild(card);
  }
}

renderStore(products);   // draw ALL products at the start

// Example: the "All" button is already done for you
document.getElementById("all-button").addEventListener("click", () => {
  renderStore(products);
});
// ^ an arrow function used directly as the click handler (very common)


// ============================================================
// YOUR EXERCISES — use array methods, NOT for loops
//
// 1. "ONLY IN STOCK" button: when clicked, draw only products with stock > 0.
//    (filter + renderStore)

document.getElementById("in-stock-button").addEventListener("click", () => {
  renderStore(products.filter((p) => p.stock > 0));
});
//
// 2. "CHEAPEST FIRST" button: draw the products sorted by price, lowest first.
//    (sort on a COPY + renderStore)
document.getElementById("sort-price-button").addEventListener("click", () => {
  renderStore([...products].sort((a, b) => a.price - b.price));
});
//
// 3. INVENTORY VALUE with reduce: price × stock of every product, added up.
//    Show it in #inventory-value. Compare it with your loop from lesson 11.
const inventory = products.reduce((total, p) => total + p.price * p.stock, 0);
document.getElementById("inventory-value").textContent = "The inventory value is: $" + inventory;



// 4. NAMES: use map to get all product names, then show them in #names
//    separated by commas: "Coffee maker, Headphones, Backpack, ..."
//    Hint: arrays have a .join(", ") method that glues items into one string.
document.getElementById("names").textContent = names.join(", ");


// 5. SEARCH (the most real-world one): when the user types in #search-input,
//    show only products whose name CONTAINS what they typed.
//      - the event is "input" (fires on every key), not "click"
//      - text.includes("abc") -> true if text contains "abc"
//      - make it case-insensitive: "COFFEE" should find "Coffee maker"
//        (hint: .toLowerCase() on both sides)
const input = document.getElementById("search-input");

input.addEventListener("input", () => {
  const text = input.value.toLowerCase();
  renderStore(products.filter((p) => p.name.toLowerCase().includes(text)));
});



//
//
// BONUS: in ONE line, get the names of products that are in stock AND cost
//    less than $30. (Hint: you can CHAIN methods: products.filter(...).map(...))
// ============================================================

const cheapInStock = products.filter((p) => p.stock > 0 && p.price < 30).map((p) => p.name);
console.log(cheapInStock);

