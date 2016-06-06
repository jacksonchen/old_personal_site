var Globalcolor = Math.floor(Math.random()*8);

function getRandomColor() {
  if (Globalcolor == 1) {
    var red = Math.floor(Math.random() * 40)+10,
        green = Math.floor(Math.random() * 50)+206,
        blue = Math.floor(Math.random() * 40)+10;
  }
  else if (Globalcolor == 2) {
    var red = Math.floor(Math.random() * 50)+206,
        green = Math.floor(Math.random() * 40)+10,
        blue = Math.floor(Math.random() * 40)+10;
  }
  else if (Globalcolor == 3) {
    var red = Math.floor(Math.random() * 50)+206,
        green = red,
        blue = red;
  }
  else if (Globalcolor == 4) {
    var red = Math.floor(Math.random() * 50)+206,
        green = Math.floor(Math.random() * 40)+10,
        blue = Math.floor(Math.random() * 30)+226;
  }
  else if (Globalcolor == 5) {
    var red = Math.floor(Math.random() * 40)+10,
        green = Math.floor(Math.random() * 30)+226,
        blue = Math.floor(Math.random() * 30)+226;
  }
  else if (Globalcolor == 6) {
    var red = Math.floor(Math.random() * 30)+226,
        green = Math.floor(Math.random() * 30)+226,
        blue = Math.floor(Math.random() * 40)+10;
  }
  else if (Globalcolor == 7) {
    var red = Math.floor(Math.random() * 40)+10,
        green = Math.floor(Math.random() * 40)+10,
        blue = Math.floor(Math.random() * 50)+206;
  }
  else {
    var red = Math.floor(Math.random() * 40)+10,
        green = red,
        blue = red;
  }

  return rgbToHex(red, green, blue);
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function addDiv(element) {
  element.clone().hide().appendTo( document.body ).fadeIn(1000);
}


window.setInterval(function(){
  $('.square').each(function() {
    $(this).animate({backgroundColor: getRandomColor()}, 200);
  });
}, 2000);



$(document).ready(function() {
  $("div#links").hide()
  $('.square').hide();
  var divElements = Math.round(($(window).height()/35) * ($(window).width()/35));
  for (i = 0; i < divElements; i++) {
    addDiv($("div.square").first());
  }
  $('.square').css("background-color", getRandomColor);
  $("div#links").delay(500).slideDown(800)

  $("div.profile").mouseover(function() {
    $(this).stop().animate({backgroundColor:'#888888'}, 200);
  });

  $('div.profile').mouseout(function() {
    $(this).stop().animate({backgroundColor:'#222222'}, 200);
  });
});
