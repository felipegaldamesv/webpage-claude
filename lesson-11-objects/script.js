// ============================================================
// script.js — Lesson 11: OBJECTS
// ============================================================

// ---------- PART 1: the problem ----------
// With arrays only, a product's info would be scattered:
//   const names  = ["Coffee maker", "Headphones"];
//   const prices = [25, 80];
// Keeping them in sync is fragile: delete one name and every price shifts.


// ---------- PART 2: objects ----------
// An object groups related information about ONE thing, with LABELS.
// Curly braces { }, pairs of   key: value   separated by commas.
const coffeeMaker = {
  name: "Coffee maker",     // key "name" -> value "Coffee maker"
  price: 25,
  stock: 10,
  imported: true            // values can be any type: string, number, boolean...
};

// Read a value with a DOT:  object.key
console.log(coffeeMaker.name);     // "Coffee maker"
console.log(coffeeMaker.price);    // 25

// Change a value the same way
coffeeMaker.stock = 9;
console.log(coffeeMaker);          // look in the Console: you can expand it

// Arrays vs objects:
//   array  -> a LIST of things, found by POSITION   products[0]
//   object -> ONE thing, details found by NAME      product.price


// ---------- PART 3: an ARRAY of OBJECTS ----------
// This is the most common shape of data in real software:
// a list of users, a list of orders, a list of products...
// (It's also almost exactly what JSON looks like — the format APIs send. More on that later.)
const products = [
  { name: "Coffee maker", price: 25, stock: 10 },
  { name: "Headphones", price: 80, stock: 3 },
  { name: "Backpack", price: 40, stock: 0 },
  { name: "Water bottle", price: 15, stock: 25 }
];

console.log(products[1].name);     // "Headphones" -> position 1, then key "name"


// ---------- PART 4: rendering cards from data ----------
// Same idea as lesson 10, but each item now has several details.
// We reuse the .cards / .card CSS from lesson 6!
function renderStore() {
  const store = document.getElementById("store");
  store.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "$" + product.price;

    const stock = document.createElement("p");
    if (product.stock <= 0) {
      stock.textContent = "Out of stock";
      card.classList.add("out-of-stock");
    } else {
      stock.textContent = "Stock: " + product.stock;
    }

    // put the 3 pieces inside the card, then the card inside the store
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(stock);
    store.appendChild(card);
  }
}

renderStore();

function inventoryValue() {
  let totalInventory = 0;
  for (const product of products) {
    totalInventory = totalInventory + product.price * product.stock;
  }
  const invValue = document.getElementById("inventory-value");
  invValue.textContent = "Inventory value: $" + totalInventory;
}
inventoryValue();

function cheapestProduct() {
  let min = products[0];

  for (const product of products) {
    if (product.price < min.price) {
      min = product;
    }
  }
  document.getElementById("cheapest").textContent = "Cheapest: " + min.name + " ($" + min.price + ")";
}
cheapestProduct();

function addProduct() {
  const name = document.getElementById("name-input");
  const price = document.getElementById("price-input");
  const stock = document.getElementById("stock-input");
  const formMessage = document.getElementById("form-message");

  if (name.value.trim() !== "" && Number(price.value) > 0 && Number(stock.value) >= 0 && stock.value !== "") {

    formMessage.textContent = "";
    const newObject = {
      name: name.value.trim(),
      price: Number(price.value),
      stock: Number(stock.value),
    };
    products.push(newObject);
    renderStore();
    inventoryValue();
    name.value = "";
    price.value = "";
    stock.value = "";
    cheapestProduct();
  } else {
    formMessage.textContent = "Insert correct values!";
  }
}

document.getElementById("add-button").addEventListener("click", addProduct);



// ============================================================
// YOUR EXERCISES
// 3. ADD A PRODUCT: write addProduct for the form. It must:
//      - create a NEW OBJECT with name, price and stock, and push it into products
//      - re-render the store AND the inventory value, then clear the inputs
//
// 4. INTERVIEW-STYLE BONUS: find the CHEAPEST product and show its NAME
//    and price in #cheapest, e.g. "Cheapest: Water bottle ($15)".
//    Same pattern as maxPrice in lesson 10, but now you keep track of the
//    whole OBJECT (the best product so far), not just a number.
// ============================================================

