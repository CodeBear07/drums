

document.querySelectorAll(".drum").forEach(el => el.addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}));

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  var crash = new Audio("sounds/crash.mp3")
  var kickBass = new Audio("sounds/kick-bass.mp3")
  var snare = new Audio("sounds/snare.mp3")
  var tom1 = new Audio("sounds/tom-1.mp3")
  var tom2 = new Audio("sounds/tom-2.mp3")
  var tom3 = new Audio("sounds/tom-3.mp3")
  var tom4 = new Audio("sounds/tom-4.mp3")

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

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed"); }, 100);
}
