

document.querySelectorAll(".drum").forEach(el => el.addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML
  makeSound(buttonInnerHTML);
}));

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});

function makeSound(key) {
  var crash = new Audio("sounds/balbebek.ogg")
  var kickBass = new Audio("sounds/burnin.ogg")
  var snare = new Audio("sounds/habibi.ogg")
  var tom1 = new Audio("sounds/kalbim.ogg")
  var tom2 = new Audio("sounds/kızım.ogg")
  var tom3 = new Audio("sounds/ily.ogg")
  var tom4 = new Audio("sounds/lightmy.ogg")

  switch (key) {
    case "w":
      tom1.play();
      break;

    case "a":
      tom2.play();
      break;

    case "s":
      tom3.play();
      break;

    case "d":
      tom4.play();
      break;

    case "j":
      snare.play();
      break;

    case "k":
      crash.play();
      break;

    case "l":
      kickBass.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}
