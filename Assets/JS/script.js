//ADDING ITEMS FROM PIZZA PAGE TO THE CART

butn = document.getElementById("remove");
const button1 = document.getElementById("add-to-cart-btn1");
const button2 = document.getElementById("add-to-cart-btn2");
const button3 = document.getElementById("add-to-cart-btn3");
const button4 = document.getElementById("add-to-cart-btn4");
const button5 = document.getElementById("add-to-cart-btn5");
const button6 = document.getElementById("add-to-cart-btn6");

console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);
console.log(button5);
console.log(button6);
button1.addEventListener("click", addtocart);
button2.addEventListener("click", addtocart);
button3.addEventListener("click", addtocart);
button4.addEventListener("click", addtocart);
button5.addEventListener("click", addtocart);
button6.addEventListener("click", addtocart);

// Get the pizza size dropdown element and price span element
const sizeDropdown1 = document.getElementById("size");
const sizeDropdown2 = document.getElementById("size2");
const sizeDropdown3 = document.getElementById("size3");
const sizeDropdown4 = document.getElementById("size4");
const sizeDropdown5 = document.getElementById("size5");
const sizeDropdown6 = document.getElementById("size6");

const priceSpan1 = document.getElementById("price");
const priceSpan2 = document.getElementById("price2");
const priceSpan3 = document.getElementById("price3");
const priceSpan4 = document.getElementById("price4");
const priceSpan5 = document.getElementById("price5");
const priceSpan6 = document.getElementById("price6");
const dropdownvariables = [
  sizeDropdown1,
  sizeDropdown2,
  sizeDropdown3,
  sizeDropdown4,
  sizeDropdown5,
  sizeDropdown6,
];
const pricevariables = [
  priceSpan1,
  priceSpan2,
  priceSpan3,
  priceSpan4,
  priceSpan5,
  priceSpan6,
];

// Define the prices for each pizza size
const prices = {
  small: 19.99,
  medium: 25.99,
  large: 30.99,
};
var newPrice;
var selectedSize;
for (let i = 0; i < dropdownvariables.length; i++) {
  // Do something with each variable
  //console.log(dropdownvariables[i]);
  dropdownvariables[i].addEventListener("change", function () {
    //Get the selected size option value
    selectedSize = dropdownvariables[i].value;
    console.log(selectedSize);
    pricevariables[i].innerText = selectedSize;
    newPrice = selectedSize;
    pricevariables[i].setAttribute("data-item-price", newPrice);
  });
}

function addtocart(event) {
  buttonClicked = event.target;
  var itemid = buttonClicked.getAttribute("data-item-id");
  var itemname = buttonClicked.getAttribute("data-item-name");
  var itemqty = buttonClicked.getAttribute("data-item-qty");
  var itemprice = buttonClicked.getAttribute("data-item-price");

  //getting the item price based on the size selected
  itemprice = newPrice;
  console.log(itemprice);

  //const dropdown = document.getElementById("size");
  //const selectedsize = dropdown.value;
  //console.log(selectedsize);
  //console.log(itemid, itemname, itemprice);

  //define items to be added to the cart

  const cartItems = {
    id: itemid,
    name: itemname,
    price: itemprice,
    quantity: parseInt(itemqty),
  };
  console.log(cartItems);

  //retrieve the current contents of the cart or an empty cart
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const matchingItem = cart.find(
    (item) => item.id === itemid && item.price === itemprice
  );

  // If the item is found, do something with it
  if (matchingItem) {
    console.log("Found matching item:", matchingItem);
    matchingItem.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    console.log("No matching item found");
    cart.push(cartItems);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const cartPopup = document.getElementById("cart-popup");
  cartPopup.classList.add("show");
  //automatically calls the closepopup function after 3 milliseconds
  setTimeout(() => {
    closePopup();
  }, 3000);
}

function closePopup() {
  const cartPopup = document.getElementById("cart-popup");
  cartPopup.classList.add("hide");
  //automatically removes the existing class after .5 milli seconds

  setTimeout(() => {
    cartPopup.classList.remove("show", "hide");
  }, 500);
}

var username = localStorage.getItem("username");
if (username) {
  document.getElementById("username").textContent = username;
} else {
  window.location.href = "login.html";
}
function logout() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}
