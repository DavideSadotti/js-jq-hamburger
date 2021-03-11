// PRIMA PROVA CON IF-SHOW-HIDE
var menu = $('header a>i');
var hamburger = $('.hamburger-menu');
var chiuso = true;

menu.click(
  function(){
    if(chiuso == true){
      hamburger.show('slow');
      chiuso = false;
    }else{
      hamburger.hide('slow');
      chiuso = true;
    }
  }
);

// SECONDA PROVA CON SWITCH CASE-FADEIN-FADEOUT
var lista = $('header a>i');
var panino = $('.hamburger-menu');
var aperto = false;

menu.click(
  function(){
    switch (aperto) {
      case false:
        hamburger.fadeIn('slow');
        aperto = true;
        break;
      case true:
        hamburger.fadeOut('slow');
        aperto = false;
        break;
    }
  }
);
