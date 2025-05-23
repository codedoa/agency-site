const allClickableKeys = "wasdjkl";

/* for(let tempo=0; tempo < document.querySelectorAll(".drum").length; tempo++) {
  document.querySelectorAll(".drum")[tempo].addEventListener("click", function() {
    buzzBuzz(this.textContent);
    wiggleWiggle(this.textContent);
  });
}; */

for(let t=0; t < $(".drum").length; t++) {
  $(".drum")[t].on("click", function() {
    buzzBuzz(this.textContent);
    wiggleWiggle(this.textContent);
  });
};

/* document.addEventListener("keydown", function(event) {
  buzzBuzz(event.key);
  wiggleWiggle(event.key);
}); */

$("body").on("keydown", function(event) {
// next lines is a check if key pressed belongs to our mapped keys to avoid exceptions in the console log
  if(allClickableKeys.includes(event.key)) {
    buzzBuzz(event.key);
    wiggleWiggle(event.key);
  }
});

function buzzBuzz(key) {
  switch (key) {
    case "w": 
      var audio = new Audio('./sounds/tom-1.mp3');
    break;
    case "a": 
      var audio = new Audio('./sounds/tom-2.mp3');
    break; 
    case "s": 
      var audio = new Audio('./sounds/tom-3.mp3');
    break; 
    case "d": 
      var audio = new Audio('./sounds/tom-4.mp3');
    break; 
    case "j": 
      var audio = new Audio('./sounds/snare.mp3');
    break; 
    case "k": 
      var audio = new Audio('./sounds/kick-bass.mp3');
    break; 
    case "l": 
      var audio = new Audio('./sounds/crash.mp3');
    break; 
  }
  audio.play();
};

/* function wiggleWiggle (keyKa) {
// next two lines - checking if key pressed belongs to our mapped keys to avoid exceptions in the console log
  const allClickableKeys = "wasdjkl";
  if(allClickableKeys.includes(keyKa)) {
  var activeButt = document.querySelector("."+keyKa);
    activeButt.classList.add("pressed");
    setTimeout(function() {
      activeButt.classList.remove("pressed");
    }
      , 150); 
  }
} */

  function wiggleWiggle (keyKa) {
  let activeButt = $("."+keyKa);
  activeButt.addClass("pressed");
  setTimeout(function() {
    activeButt.removeClass("pressed");
  }, 150);
}