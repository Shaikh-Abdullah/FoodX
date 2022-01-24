const pizzaQty = document.querySelector("#pizzaQty");

pizzaQty.innerHTML = localStorage.getItem("pizzaQty");

const bibimbapQty = document.querySelector("#bibimbapQty");

bibimbapQty.innerHTML = localStorage.getItem("bibimbapQty");
