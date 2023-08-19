//alert("add JQuery");
var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
// To start the game this boolean varible get help -> game active or not
var started = false;

// To get level how many time get solve it increase level
var level = 0;

$(document).keypress(function (){
   if(!started){
    $("#level-title").text('level - ' + level);
    nextSequence();
    started = true;
   }
});

$(".btn").click( function (){
    var userChosenColour = this.id;
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(gamePattern);
    console.log(userClickedPattern);
    playSound(userChosenColour); 
   // makeAnimatedFlash(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(gamePattern.length === userClickedPattern.length){
            setTimeout(() => {
                nextSequence();
            }, 500);
        }
    }else{
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 1000);
          $("#level-title").text("Game Over, Press Any Key to Restart");
          startOver();
    }
}

function nextSequence(){
    level++;

    $("#level-title").text('level - '+level);

    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    var randomColourChoose = buttonColours[randomNumber];
    gamePattern.push(randomColourChoose);
    console.log(gamePattern);
    $("#" + randomColourChoose).fadeIn(100).fadeOut(100).fadeIn(100);
    // console.log($("#"+randomColourChoose));
    // $("#"+randomColourChoose)
    playSound(randomColourChoose);  
    makeAnimatedFlash(randomColourChoose);
}

function makeAnimatedFlash(colourChoose){
    var flashButtons = document.getElementById(colourChoose);
    flashButtons.classList.add("pressed")

    setTimeout(()=> {
        flashButtons.classList.remove("pressed")
    }, 100);
}

function playSound(name){
    var audio = new Audio("sounds/"+ name+".mp3");
    audio.play();
}

function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }

// function playSound(colourChoose){

//     switch(colourChoose)
//     {
//         case "red" :
//             var red = new Audio("sounds/red.mp3");
//             red.play();
//             break;
//         case "blue":
//             var blue = new Audio("sounds/blue.mp3");
//             blue.play();
//             break;
//         case "green":
//             var green = new Audio("sounds/green.mp3");
//             green.play();
//             break;
//         case "yellow":
//             var yellow = new Audio("sounds/yellow.mp3");
//             yellow.play();
//             break;
//         default: console.log("Something wend wrong");               
//     }
// }



