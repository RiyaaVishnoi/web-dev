function submitform() {
  alert("Thank you for your purchase :)");
}

const cartData = JSON.parse(localStorage.getItem("cart"));
const cartItemsTable = document.getElementById("cartItemsTable");
let cartTotal = 0;

if (cartData && cartData.length > 0) {
  cartData.forEach((item) => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.innerText = item.name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement("td");
    tdPrice.innerText = item.price;
    tr.appendChild(tdPrice);

    const tdQuantity = document.createElement("td");
    tdQuantity.innerText = item.quantity;
    tr.appendChild(tdQuantity);

    cartItemsTable.appendChild(tr);

    cartTotal += parseFloat(item.price) * item.quantity; // Calculate total price for each item
  });
}

document.getElementById("cartTotal").innerText = cartTotal.toFixed(2);
