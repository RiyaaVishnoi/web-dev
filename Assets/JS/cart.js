//displaying items from a local

console.log("works");
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartElement = document.getElementById("cart");
console.log(cartElement);
cartItems.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.innerHTML = `
  <div class="cart-items">
    <div class="cart-row">
      <div class="cart-item cart-column">
      
        <span class="cart-item-title">${item.name}</span>
      </div>
      <span class="cart-price cart-column">${item.price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="${item.quantity}" />
        <button class="btn btn-danger" type="button">REMOVE</button>

      </div>
      </div>
  `;
  cartElement.appendChild(itemElement);
});

//---------purchase btn--------------
document
  .getElementsByClassName("btn-purchase")[0]
  .addEventListener("click", purchaseClicked);

function purchaseClicked() {
  alert("Thank you for your purchase");
  window.location.href = "checkoutform.html";
}

//--------remove btn--------------
updateCartTotal();

var removecartItemBtns = document.getElementsByClassName("btn-danger");
for (var i = 0; i < removecartItemBtns.length; i++) {
  //get individual button and add an event listner to them
  var button = removecartItemBtns[i];
  button.addEventListener("click", removeCartItem);
}

function removeCartItem(event) {
  let cartstorage = JSON.parse(localStorage.getItem("cart"));
  console.log(cartstorage);
  //the btn tht we clicked is our target
  var buttonClicked = event.target;

  //get the cart row of the button
  //the remove function will delete the whole row
  buttonClicked.parentElement.parentElement.remove();
  var div = buttonClicked.parentElement.parentElement;
  var title = div.getElementsByClassName("cart-item-title")[0].innerText;
  console.log("title");
  console.log(title);

  for (let i = 0; i < cartstorage.length; i++) {
    console.log(cartstorage[i]);
    console.log(cartstorage[i].name);
    if (cartstorage[i].name === title) {
      // Find the index of the item you want to remove

      let index = cartstorage.indexOf(cartstorage[i]);
      console.log(index);
      // If the item is found, remove it from the array

      if (index > -1) {
        cartstorage.splice(index, 1);
      }

      // Save the modified array back to local storage
      localStorage.setItem("cart", JSON.stringify(cartstorage));
      // if the item whose remove button is clicked do this--
    }
  }

  console.log(buttonClicked.parentElement.parentElement);
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  updateCartTotal();
}

//--------quantity change btn--------------

var quantityInputs = document.getElementsByClassName("cart-quantity-input");
//loop through all the qty inputs and find if any of them changed the value
//console.log(quantityInputs);
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  //if there is a change in the value then
  input.addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
  console.log("changed");
  //get the qty element
  //the target of our event is going to be the actual input that we need
  var input = event.target;
  //check if the value inside of the input is a valid value -- meaning not -ve
  //isnan = is not a number
  //see the cart row

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  //change the value of qty in the local storage first --

  const cartrow = input.parentElement.parentElement;

  var title = cartrow.getElementsByClassName("cart-item-title")[0].innerText;
  var quantity = cartrow.getElementsByClassName("cart-quantity-input")[0].value;
  console.log(quantity);
  // Get the cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Find the index of an item with the name "example"
  let index = -1;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === title) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    // The element was found
    cartItems[index].quantity = quantity;
    console.log("qunatiy changed in LS");
    // Stringify the updated cart items object
    const updatedCartItems = JSON.stringify(cartItems);

    // Save the updated cart items back to local storage
    localStorage.setItem("cart", updatedCartItems);
  } else {
    // The element was not found
    console.log(`The element with name "example" was not found in the cart`);
  }
  console.log(title);
  //const itemIndex = cartItems.findIndex((item) => item.id === itemId);

  updateCartTotal();
}

function updateCartTotal() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  // calculate total price
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].price, cart[i].quantity);
    totalPrice += cart[i].price * cart[i].quantity;
    totalPrice = Math.round(totalPrice * 100) / 100;

    console.log(totalPrice);
  }

  // set total price as a new item in local storage
  localStorage.setItem("total", totalPrice);
  setnewTotal();
}

function setnewTotal() {
  let total = localStorage.getItem("total");

  let spanEl = document.getElementById("my-span");

  if (spanEl) {
    // If the span element exists, update its value
    spanEl.innerText = "Total = $" + total;
  } else {
    // If the span element does not exist, create a new one and set its value
    let spanElement = document.createElement("span");

    spanElement.id = "my-span";
    spanElement.innerText = "Total = $" + total;
    document.body.appendChild(spanElement);

    spanElement.style.color = "#aa4a30";
    spanElement.style.fontweight = 900;
    spanElement.style.fontSize = "30px";
    console.log(spanElement);
  }
}
