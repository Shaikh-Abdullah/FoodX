let userLink = document.getElementById("userlink");
let signoutLink = document.getElementById("signoutlink");
let currentUser = null;


function getUserName() {
  let keeploggedin = localStorage.getItem('keeploggedin')

  if (keeploggedin === 'yes') {
    currentUser = JSON.parse(localStorage.getItem('user'))
  } else {
    currentUser = JSON.parse(sessionStorage.getItem('user'))

  }
}

function signout() {
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keeploggedin');
  window.location = "login.html";
}

window.onload = () => {
  getUserName();
  if (currentUser === null) {
    signoutLink.innerText === "Login";
    signoutLink.href === "login.html";

    userLink.innerText = "Create New Account";
    userLink.href = "register.html";


  } else {

    userLink.innerText = `Welcome ${currentUser.username}!!`;
    userLink.classList.add('text-warning')
    userLink.href = "#";

    signoutLink.innerText === "SignOut";
    signoutLink.href === "javascript:signout()";
  }

}

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

const salmorejoBtn = document.querySelector("#salmorejoBtn");

let salmorejoQty = 0;

const salmorejoDropdown = document.querySelector("#salmorejoQty");

salmorejoDropdown.addEventListener("change", (e) => {
  salmorejoQty = e.target.value;
});

salmorejoBtn.addEventListener("click", () => {
  localStorage.setItem("salmorejoQty", salmorejoQty);
});

const sushiBtn = document.querySelector("#sushiBtn");

let sushiQty = 0;

const sushiDropdown = document.querySelector("#sushiQty");

sushiDropdown.addEventListener("change", (e) => {
  sushiQty = e.target.value;
});

sushiBtn.addEventListener("click", () => {
  localStorage.setItem("sushiQty", sushiQty);
});
