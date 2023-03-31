function loginaccess() {
  var username = "user";
  var password = "P@ssw0rd123";

  var user = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

   if (user == username && pass == password) {
    location.assign("pizza.html");
    localStorage.setItem("username", user);
  } else {
    alert("Incorrect Id or Password! Try Again");
  }
}

function redirecthome() {
  location.assign("MENU.html");
}
