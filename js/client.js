// 1. Create `textarea` variable
const textArea = document.querySelector("textarea");

// 2. Create `counter` variable
const counter = document.querySelector(".counter");

// 3. Create character `limit` variable
const limit = textArea.getAttribute("maxlength");

// 4. Create event listener to update `counter`
const calculate = function () {
  const count = textArea.value.length;
  
  counter.textContent = `${count}/${limit}`
}

textArea.addEventListener("input", calculate);