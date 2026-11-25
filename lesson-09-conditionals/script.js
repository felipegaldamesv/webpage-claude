// ============================================================
// script.js — Lesson 9: CONDITIONALS (making decisions)
// ============================================================

// ---------- PART 1: comparisons ----------
// A comparison asks a question. The answer is always true or false
// (a "boolean" — a new type, after strings and numbers).
//
//   ===   equal to                 5 === 5   -> true
//   !==   not equal to             5 !== 3   -> true
//   >     greater than             5 > 3     -> true
//   <     less than                5 < 3     -> false
//   >=    greater than or equal    5 >= 5    -> true
//   <=    less than or equal       3 <= 5    -> true
//
// WARNING:  =  means "store a value"    (clicks = 0)
//          === means "are they equal?"  (clicks === 0)
// Mixing them up is one of the most common bugs in all of programming.

console.log(10 > 5);      // look in the Console: true
console.log(10 === 5);    // false


// ---------- PART 2: if / else ----------
//   if (question) {
//     ...runs ONLY if the answer is true...
//   } else {
//     ...runs if the answer is false...
//   }

let clicks = 0;

function updateDisplay() {
  document.getElementById("counter").textContent = clicks;
  checkMessage();
}

function checkMessage() {
  const message = document.getElementById("message");

  if (clicks >= 10) {
    message.textContent = "Wow, 10 clicks or more!";
    // classList.add turns ON a CSS class from JavaScript -> JS and CSS working together
    message.classList.add("success");
    message.classList.remove("warning");
  } else {
    message.textContent = "";
    message.classList.remove("success");
    message.classList.remove("warning");
  }
}

function addOne() {
  clicks = clicks + 1;
  updateDisplay();
}

function resetCounter() {
  clicks = 0;
  updateDisplay();
}

document.getElementById("add-button").addEventListener("click", addOne);
document.getElementById("reset-button").addEventListener("click", resetCounter);


// ---------- PART 3: else if (more than 2 options) ----------
//   if (A) { ... } else if (B) { ... } else { ... }
// JavaScript checks from top to bottom and runs ONLY the FIRST one that is true.

function checkAge() {
  // .value = what the user typed in the input.
  // It always arrives as TEXT, so Number() converts it to a number.
  
  const ageMessage = document.getElementById("age-message");
  const ageText = document.getElementById("age-input").value;
  const age = Number(ageText);

  if (ageText === "" || age < 0) {
    ageMessage.textContent = "Please, enter a valid age";
  } else if (age < 18) {
    ageMessage.textContent = "You are under 18.";
  } else if (age >= 18 && age <= 64) {
    ageMessage.textContent = "You are an adult";
  } else {
    ageMessage.textContent = "You are a senior.";
  }
}

document.getElementById("check-button").addEventListener("click", checkAge);


// ============================================================
// YOUR EXERCISES
//
// 1. MINUS BUTTON: write a function subtractOne and connect it to
//    "minus-button". The counter must NEVER go below 0.
//    Hint: only subtract IF clicks is greater than 0.
//
// 2. WARNING: when the user tries to go below 0, show the message
//    "Can't go below zero!" in red (use the "warning" class).
//
// 3. AGE CHECKER: turn checkAge into 3 options using else if:
//      under 18   -> "You are under 18."
//      18 to 64   -> "You are an adult."
//      65 or more -> "You are a senior."
//    Bonus: if the box is empty or the age is negative, show
//    "Please enter a valid age." (hint: check that one FIRST)
// ============================================================

function subtractOne() {
  const message = document.getElementById("message");

  if (clicks > 0) {
    clicks = clicks - 1;
    updateDisplay();

  } else {
    message.textContent = "Can't go below zero";
    message.classList.add("warning");
  }
}

document.getElementById("minus-button").addEventListener("click", subtractOne);