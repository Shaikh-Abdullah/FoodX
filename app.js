const pizzaBtn = document.querySelector("#pizzaBtn");

console.log("kkh", pizzaBtn);
// const qty =

pizzaBtn.addEventListener("click", () => {
  // alert('oououo')
  if (localStorage.getItem("pizza")) {
    localStorage.removeItem("pizzaQty");
  }

  localStorage.setItem("pizzaQty", "5");
  localStorage.setItem("test", JSON.stringify(19));
});
