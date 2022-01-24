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
