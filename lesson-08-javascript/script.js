// ============================================================
// script.js — Lesson 8: your first JavaScript
// Comments in JavaScript start with //   (third syntax: HTML <!-- -->, CSS /* */)
//
// HTML = structure, CSS = looks, JavaScript = BEHAVIOR (what happens when...)
// ============================================================


// ---------- PART 1: talking to the console ----------
// console.log() prints a message in the browser's developer console.
// Developers use it constantly to see what their code is doing.
// To see it in Safari: right-click the page > Inspect > "Console" tab.
console.log("Hello from JavaScript!");


// ---------- PART 2: variables ----------
// A variable is a labeled box that stores a value.
//   const = the value will NEVER change (use this by default)
//   let   = the value WILL change later
const name = "Felipe";        // text is called a "string" (always in quotes)
let clicks = 0;               // numbers have NO quotes

console.log("My name is " + name);   // + joins strings together


// ---------- PART 3: functions ----------
// A function is a reusable block of code with a name.
// You define it once, then "call" it whenever you want.
function sayHi() {
  // document.getElementById finds the ONE element with that id
  const greeting = document.getElementById("greeting");
  // .textContent = the text inside that element. Here we replace it.
  greeting.textContent = "Hi " + name + "! JavaScript changed this text.";
}


// ---------- PART 4: events ----------
// An event is something that happens: a click, a key press, scrolling...
// addEventListener says: "when THIS happens to THIS element, run THAT function"
const greetButton = document.getElementById("greet-button");
greetButton.addEventListener("click", sayHi);
//                             ^event   ^function to run (no parentheses!)


// ---------- PART 5: the counter ----------
function addOne() {
  clicks = clicks + 1;    // this is why clicks uses let: its value changes
  document.getElementById("counter").textContent = clicks;
  console.log("Clicks so far: " + clicks);
}

document.getElementById("add-button").addEventListener("click", addOne);


// ---------- YOUR EXERCISE ----------
// 1. In index.html, add a Reset button (id="reset-button").
// 2. Below, write a function called resetCounter that:
//      - sets clicks back to 0
//      - updates the number shown on the page
// 3. Connect the Reset button's "click" event to resetCounter.

