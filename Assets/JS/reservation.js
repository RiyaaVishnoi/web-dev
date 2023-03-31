function availability() {
  var dateuser = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  const date = new Date();
  let day = date.getDate();
//just check if user entered a date or not
  if (dateuser) {
    alert("Please enter a date!");
  } else {
    alert(
      `Congratulations! We do have availability for ${dateuser} at ${time}`
    );
  }
}

//just for the login name at the top of the screen to work
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
