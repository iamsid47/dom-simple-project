var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
  $("#changeText").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  level++;
}

$("button").click(function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});

function playSound(name) {
  if (name === "red") {
    var audioj = new Audio("red.mp3");
    audioj.play();
  } else if (name === "blue") {
    var audioj = new Audio("blue.mp3");
    audioj.play();
  } else if (name === "green") {
    var audioj = new Audio("green.mp3");
    audioj.play();
  } else if (name === "yellow") {
    var audioj = new Audio("yellow.mp3");
    audioj.play();
  } else {
    var lost = new Audio("lost.mp3");
    lost.play();
  }
}

$(document).one("keypress", function (e) {
  nextSequence();
});
