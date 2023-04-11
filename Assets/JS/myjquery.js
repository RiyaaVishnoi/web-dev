//$ sign indicate that this is a jQuery object
$(document).ready(function () {
  $("#hide").click(function () {
    $("p").hide();
  });

  $("#show").click(function () {
    $("p").show();
  });

  //Fadeout options
  $("#button1").click(function () {
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });

  //Panel slidedown
  $("#flip").click(function () {
    $("#panel").slideDown("slow");
  });

  //Animate
  $("#buttonAnimate").click(function () {
    $("div").animate({ left: "250px" });
  });

  //Validation
  $("#myform").validate({
    rules: {
      //Defining validation rules for each field
      name: {
        required: true,
        minlength: 3,
      },
      dob: {
        required: true,
      },
      address: {
        required: true,
        minlength: 10,
      },
      country: {
        required: true,
        minlength: 3,
      },
      cardNumber: {
        required: true,
        minlength: 5,
      },
      cvv: {
        required: true,
        maxlength: 3,
      },
      email: {
        required: true,
        email: true,
       
      },
    },
    messages: {
      //Defining custom error messeges
      name: {
        minlength: "Name should be at least 3 characters",
      },
    },
  });
});
