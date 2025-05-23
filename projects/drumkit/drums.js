
for(let tempo=0; tempo < document.querySelectorAll(".drum").length; tempo++) {
  document.querySelectorAll(".drum")[tempo].addEventListener("click", function() {
    buzzBuzz(this.textContent);
    wiggleWiggle(this.textContent);
  });
};

/* // U N C O M M E N T   T O   E N A B L E   K E Y   L I S T E N E R
  document.addEventListener("keydown", function(event) {
  buzzBuzz(event.key);
  wiggleWiggle(event.key);
});
*/

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

function wiggleWiggle (keyKa) {
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
}

/* Higher Level Function Example: 
function calculator(n1,n2,op) {
return op(n1,n2);
}
function sum(n1,n2) {
return n1 + n2;
}
function sub(n1,n2) {
return n1 - n2;
}
function div(n1,n2) {
return n1 / n2;
}
function mul(n1,n2) {
return n1 * n2;
}
*/