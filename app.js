const pizzaBtn = document.querySelector("#pizzaBtn");

let pizzaQty = 0;

const pizzaDropdown = document.querySelector("#pizzaQty");

pizzaDropdown.addEventListener("change", (e) => {
  pizzaQty = e.target.value;
});

pizzaBtn.addEventListener("click", () => {
  localStorage.setItem("pizzaQty", pizzaQty);
});

const bibimbapBtn = document.querySelector("#bibimbapBtn");

let bibimbapQty = 0;

const bibimbapDropdown = document.querySelector("#bibimbapQty");

bibimbapDropdown.addEventListener("change", (e) => {
  bibimbapQty = e.target.value;
});

bibimbapBtn.addEventListener("click", () => {
  localStorage.setItem("bibimbapQty", bibimbapQty);
});

const thalBtn = document.querySelector("#thalBtn");

let thalQty = 0;

const thalDropdown = document.querySelector("#thalQty");

thalDropdown.addEventListener("change", (e) => {
  thalQty = e.target.value;
});

thalBtn.addEventListener("click", () => {
  localStorage.setItem("thalQty", thalQty);
});

const burgerBtn = document.querySelector("#burgerBtn");

let burgerQty = 0;

const burgerDropdown = document.querySelector("#burgerQty");

burgerDropdown.addEventListener("change", (e) => {
  burgerQty = e.target.value;
});

burgerBtn.addEventListener("click", () => {
  localStorage.setItem("burgerQty", burgerQty);
});
