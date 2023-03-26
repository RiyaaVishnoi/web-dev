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
