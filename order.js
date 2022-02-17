const pizzaQty = document.querySelector("#pizzaQty");

pizzaQty.innerHTML = localStorage.getItem("pizzaQty");

const bibimbapQty = document.querySelector("#bibimbapQty");

bibimbapQty.innerHTML = localStorage.getItem("bibimbapQty");

const thalQty = document.querySelector("#thalQty");

thalQty.innerHTML = localStorage.getItem("thalQty");

const burgerQty = document.querySelector("#burgerQty");

burgerQty.innerHTML = localStorage.getItem("burgerQty");

const salmorejoQty = document.querySelector("#salmorejoQty");

salmorejoQty.innerHTML = localStorage.getItem("salmorejoQty");

const sushiQty = document.querySelector("#sushiQty");

sushiQty.innerHTML = localStorage.getItem("sushiQty");

const pizzaPrice = document.querySelector("#pizzaOrder");
const bibimbapPrice = document.querySelector("#bibimbapOrder");
const thalPrice = document.querySelector("#thalOrder");
const burgerPrice = document.querySelector("#burgerOrder");
const salmorejoPrice = document.querySelector("#salmorejoOrder");
const sushiPrice = document.querySelector("#sushiOrder");

function orderedItem() {
  return localStorage.getItem("pizzaQty") * 500;
}
pizzaPrice.innerHTML = orderedItem();

function orderedItemBibim() {
  return localStorage.getItem("bibimbapQty") * 450;
}
bibimbapPrice.innerHTML = orderedItemBibim();

function orderedItemThal() {
  return localStorage.getItem("thalQty") * 1600;
}
thalPrice.innerHTML = orderedItemThal();

function orderedItemBurger() {
  return localStorage.getItem("burgerQty") * 300;
}
burgerPrice.innerHTML = orderedItemBurger();

function orderedItemSalmorejo() {
  return localStorage.getItem("salmorejoQty") * 1000;
}
salmorejoPrice.innerHTML = orderedItemSalmorejo();

function orderedItemSushi() {
  return localStorage.getItem("sushiQty") * 315;
}
sushiPrice.innerHTML = orderedItemSushi();
