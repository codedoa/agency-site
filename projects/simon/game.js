const buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var clickedPattern = [];
var currentLevel=0;

$(".container").addClass("beforestartgame");

$("#restart").click(function(event) {
  event.preventDefault();
  location.reload();
});

function endGame() {
  $("#level-title").text("Oooupsy... Level " + currentLevel + " was a bit too crunchy! \nBetter Luck next time!");
  $(".container").addClass("endgame");
  $(".btn").addClass("btnhdn");
  $("body").addClass("game-over");
}

function nextSequence() {
  let randomNumber = Math.floor(Math.random()*4);
  livenButton(buttonColors[randomNumber]);
  gamePattern.push(buttonColors[randomNumber]);
  currentLevel++;
  $("#level-title").text("Level " + currentLevel);
  return;
}

function livenButton(color) {
  $("#"+color).fadeOut(100).fadeIn(100);
  switch (color) {
    case "green": 
     var audio = new Audio('./sounds/green.mp3');
    break;
    case "red": 
     var audio = new Audio('./sounds/red.mp3');
    break; 
    case "yellow": 
     var audio = new Audio('./sounds/yellow.mp3');
    break; 
    case "blue": 
      var audio = new Audio('./sounds/blue.mp3');
    break; 
    default:
      return;
  }
  audio.play();
}
  
function iClick(currentColor) {
  let focusColor = $("#"+currentColor);
  $(focusColor[0]).addClass("pressed");
  setTimeout(function () {
    $(focusColor[0]).removeClass("pressed");
  }, 100);
  livenButton(currentColor);
  clickedPattern.push(currentColor);
  checkAnswer(clickedPattern.length);
}

function checkAnswer(currentLevel) {
  for(var i=0; i < currentLevel; i++) {
    if(gamePattern[i] !== clickedPattern[i]) {
      endGame();
      return false;
    }
  }
  if(clickedPattern.length === gamePattern.length) {
    clickedPattern = [];
    setTimeout(nextSequence(),2000);
  }
}

$(".btn").each(function() {
  $(this).on("click", function() {
    iClick($(this).attr("id"));
  })
});

/* // Original implementation waiting on keypress to start the new game
 $(document).on("keydown", function () {
  if(clickedPattern.length === gamePattern.length) {
    nextSequence();
  }
}); 
*/

$("#start").on("click", function () {
  $(this).addClass("btnhdn");
  $("#restart").removeClass("btnhdn");
  $(".btn").removeClass("btnhdn");
  $(".container").removeClass("startgame");
  if(clickedPattern.length === gamePattern.length) {
    nextSequence();
  }
});