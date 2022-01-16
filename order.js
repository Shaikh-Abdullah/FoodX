console.log("ORDER PAGE");

const pizzaQty = document.querySelector("#pizzaQty");

console.log(pizzaQty);
pizzaQty.innerHTML = localStorage.getItem("pizzaQty");
// pizzaQty.innerHTML = localStorage.getItem("pizzaQty");
