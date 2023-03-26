const button1 = document.getElementById("add-to-cart-btn7");
const button2 = document.getElementById("add-to-cart-btn8");
const button3 = document.getElementById("add-to-cart-btn9");
const button4 = document.getElementById("add-to-cart-btn10");
const button5 = document.getElementById("add-to-cart-btn11");
const button6 = document.getElementById("add-to-cart-btn12");

console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);
console.log(button5);
console.log(button6);
button1.addEventListener("click", addtocart);
button2.addEventListener("click", addtocart);
button4.addEventListener("click", addtocart);
button6.addEventListener("click", addtocart);

function addtocart(event) {
  buttonClicked = event.target;
  var itemid = buttonClicked.getAttribute("data-item-id");
  var itemname = buttonClicked.getAttribute("data-item-name");
  var itemqty = buttonClicked.getAttribute("data-item-qty");
  var itemprice = buttonClicked.getAttribute("data-item-price");

  console.log(itemid, itemname, itemqty, itemprice);

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
