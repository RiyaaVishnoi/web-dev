function loginaccess() {
  var username = "reye";
  var password = "123";

  var user = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  if (user == username && pass == password) {
    location.assign("INDEX.html");
  }
}

function redirecthome() {
  location.assign("MENU.html");
}
