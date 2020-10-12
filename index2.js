var buttonColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var newGame = true;
//keypress works only when there is a new game once a new game is under way no
//keypress action occurs until it is game over and then again it starts to work
$(document).keypress(function() {
  if (newGame)
    nextSequence();
});

$(".btn").click(handler);
//when any key is clicked it checks it if it is right provides the voice and animations
//also when game is over it finds out anad resets the gamePattern array since now a new
//game shall begin on another click so it makes newGame true so clicking again starts working

function handler() {
  //this is the most impt line in this code as it gives us the id of the button that is
  //pressed the thing we need the most to take full advantage of the situation you know
  if (!newGame) {
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    if (!newGame) {
      animateIt(userChosenColor);
      playSound(userChosenColor);
    }
    //(userClickedPattern.length-1) is basically the current level of the game
    if (checkAnswer(userClickedPattern.length - 1) === false) {
      //game over bitch
      $("body").addClass("game-over");
      $("#level-title").text("Game Over Bitchhh.....Press any key to restart");
      if (!newGame)
        playSound("wrong");
      newGame = true;
      gamePattern = [];
      level = 0;
      return;
    }
    if (userClickedPattern.length === level) {
      setTimeout(nextSequence, 500);
    }
  }
}
//checks whether the ans given by the user is really correct or not
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    return true;
  else
    return false;
}

function animateIt(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}
//this portion of the code generates the blinking that happens randomly to any of the
//element at the beggining of a new level
//it hence makes the userClickedPattern ti emoty as new values have to be taken for the
//new level of the game genterates the random no we needed and dispays the level and increments setInterval(function () {

function nextSequence() {
  $("body").removeClass("game-over");
  userClickedPattern = [];
  newGame = false;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  level++;
  $("#level-title").text("level " + level);
  $("#" + randomChosenColor).fadeToggle();
  playSound(randomChosenColor);
  setTimeout(function() {
    $("#" + randomChosenColor).fadeToggle();
  }, 50);
}
