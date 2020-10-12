// // alert("hello");
// // $("h1").click(function(){
// //     $("h1").animate({opacity:0.1});});
//
$(document).keydown(startGame);
function startGame(currSequence=[],level=1){
  var buttons=["green","red","yellow","blue"];
    //show level
    $("#level-title").text("Level "+level);
    // alert("working");
    var randomNumber=Math.floor(Math.random()*4);
    //flash that no to see to the user by disaaperaing butto for a 0.1sec
    $("."+buttons[randomNumber]).fadeToggle();
    setTimeout(function(){
      $("."+buttons[randomNumber]).fadeToggle();
    },50);
    currSequence.push(randomNumber);
    for(var i=0;i<level;i++){
      //right button
      var rightButton="."+buttons[currSequence[i]];
      var cont=false;
      $(rightButton).click(function(){
        startGameNextRound(currSequence,level+1);
      });
      //game over
      $("#level-title").text("Game Over....Press any key to start again");
      }
      //check user clicked on the right square from currSequence
      //level++;
      // break;
  }
