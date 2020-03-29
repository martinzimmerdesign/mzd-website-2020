import $ from "jquery";

// Autor: Martin Zimmer - Martin Zimmer Design
$(document).ready(function(){
var interval = null;
var drawImg = true;

$(".input").focus(function(){
  let object = $(this);
  // Immer nur einen Placeholder und einen Haken.
  object.prev("span").remove();
  object.next("img").remove();
  object.before('<span class="label">'+ object.attr('placeholder') +'</span>');
  object.prev("span").animate({opacity: 1, top: "-25px",}, 0);
  object.next("span.error").animate({opacity: 0, top: "0px",}, 0);
  // Testet Eingabe jede halbe Sekunde.
  interval = setInterval(function(){
  checkInputValues(object);
}, 500);
});

// Sobald der Fokus beendet wird.
$(".input").focusout(function() {
    $(this).prev("span").animate({opacity: 0, top: "0px",}, 0);
    checkInputValues($(this));
    // Stoppt den Timer.
    clearInterval(interval);
    drawImg = true;

  });


// Check input values.
function checkInputValues(object) {
  switch (object.attr('id')) {
    case 'email':
      if(object.val().indexOf("@") != -1 && object.val().length > 3 && object.val().indexOf(".") != -1) {
          checkMarkAction(object);
      } else {
          object.next("img").animate({ opacity: 0}, 0);
          object.removeClass("valid");
      }
      break;
    default:
      if(object.val().length > 1) {
          checkMarkAction(object);
      } else {
          object.next("img").animate({ opacity: 0}, 0);
          object.removeClass("valid");
      }
  }
}


// Check mark function.
function checkMarkAction(object) {
  if (drawImg === true) {
    object.after('<img class="check_image">');
    drawImg = false;
  }
  object.next("img").animate({opacity: 1, right: "15px",}, 0);
  object.addClass("valid");
  }

// Toggelt die Checkbox on Click.
$(".checkbox_wrapper").click(function() {
    $(this).find(".checkbox").toggleClass("checkbox_active");
    $(this).find(".checkbox").removeClass("checkbox_hint");
  });

// Sendet die Nachricht ab, falls Validierung erfolgreich.
$(".submit").click(function() {
    var validData = 0;
    var inputs = $(".input").get();

    for (var i = 0; i < inputs.length; i++) {
      $(inputs[i]).next("span.error").remove();
      if($(inputs[i]).hasClass("valid") === true) {
        validData++;
      } else {
        $(inputs[i]).after('<span class="error">Hier stimmt etwas noch nicht.</span>');
        $(inputs[i]).next("span.error").animate({top: "-25px",}, 0);
      }
    }
    if($(".checkbox").hasClass("checkbox_active")) {
        validData++;
    } else {
      $(".checkbox").addClass("checkbox_hint");
    }
    if(validData === 5) {
      console.log('Erfolreich.');
    } else {
      console.log('Verkackt.');
    }
});

});
