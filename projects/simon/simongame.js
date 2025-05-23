const buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var clickedPattern = [];
var currentLevel=0;

$(".homebutton").on("click", function() {
  setTimeout(window.location.href="https://codedoa.github.io/agency-site/",1500);
});

$("#restart").on("click", function(event) {
  event.preventDefault();
  location.reload();
});

function endGame() {
  var audio = new Audio('./sounds/wrong.mp3');
  audio.play();
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
  $("#"+color).addClass("pressed").delay(300).removeClass("pressed");
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
  }, 300);
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
    $(".container").addClass("goodgame").delay(2000).removeClass("goodgame");
    clickedPattern = [];
    setTimeout(nextSequence(),1500);
  }
}

$(".btn").each(function() {
  $(this).on("click", function() {
    iClick($(this).attr("id"));
  })
});

$("#start").on("click", function () {
  $(this).addClass("btnhdn");
  $("#restart").removeClass("btnhdn");
  $(".btn").removeClass("btnhdn");
  $(".container").removeClass("startgame");
  if(clickedPattern.length === gamePattern.length) {
    nextSequence();
  }
});