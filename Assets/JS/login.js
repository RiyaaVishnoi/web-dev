function loginaccess() {
  var username = "reye";
  var password = "123";

  var user = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  if (user == username && pass == password) {
    location.assign("INDEX.html");
  }
  else {
    alert("Incorrect Id or Password! Try Again");
  }
}

function redirecthome() {
  location.assign("MENU.html");
}
