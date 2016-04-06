$(document).ready(function() {

  //When the page is loaded, fade in the contents slowly.
  $("#container").fadeIn("slow");

  //Give each paragraph a yellow background only when the mouse is over it.
  $("p").hover(function() {
    $(this).css("background-color", "yellow");
  }, function() {
    $(this).css("background-color", "");
  });

  //Set up a click event on every <h2> element that simultaneously fades it to
  //25 percent opacity while growing its left-hand margin to 20px. Then, when
  //this animation is complete, fade the speech text to 50 percent opacity.
  $(document).on("click", "h2", function() {
    $(this).animate({
      "opacity": 0.25,
      "margin-left": "+=20px"},
      function() {
        $(".speech").fadeTo("slow", .50);
      })
    })

  //Reset to default font size
  $(document).on("click", "#switcher-default", function() {
    $(".speech").css("font-size", "");
  });

  //Increase font size by 1px each click
  $(document).on("click", "#switcher-large", function() {
    $(".speech").css("font-size", "+=1px");
  });

  //Decrease font size by 1px each click
  $(document).on("click", "#switcher-small", function() {
    $(".speech").css("font-size", "-=1px");
  });


  //React to presses of the arrow keys by smoothly moving the switcher box
  //20 pixels in the corresponding direction. The key codes for the arrow
  //keys are: 37 (left), 38 (up), 39 (right), and 40 (down).
  $("html").keydown(function(event) {
    switch(event.keyCode) {
      case 37:
        $("#switcher").animate({"marginLeft": "-=20px"});
        break;
      case 38:
        $("#switcher").animate({"marginTop": "-=20px"});
        break;
      case 39:
        $("#switcher").animate({"marginLeft": "+=20px"});
        break;
      case 40:
        $("#switcher").animate({"marginTop": "+=20px"});
        break;
    }
  });





});
