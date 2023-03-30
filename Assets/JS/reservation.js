function availability() {
  var dateuser = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  const date = new Date();
  let day = date.getDate();

  if (dateuser < day) {
    alert("Sorry! You are checking for a day that has already passed by! ");
  } else {
    alert(
      `Congratulations! We do have availability for ${dateuser} at ${time}`
    );
  }
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
