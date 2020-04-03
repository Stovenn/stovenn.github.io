var squares = document.querySelectorAll(".square");
var rbgDisplay = document.querySelector(".rgb");
var newGameBtn = document.querySelector("#newGame");
var messageDisplay = document.querySelector("#message");
var difficulty = "hard";
var difficultyHard = document.querySelector("#hardD");
var difficultyEasy = document.querySelector("#easyD");

newGame();

newGameBtn.addEventListener("click", function(){ 
  newGame();
});

difficultyHard.addEventListener( "click", function(){
  if(difficulty = "easy"){
    difficultyHard.classList.add("selected")
    difficultyEasy.classList.remove("selected")
    difficulty = "hard"
    for(var i = 3; i < squares.length; i ++){
      squares[i].style.visibility = "visible";
    }
    newGame();
  }
  
})

difficultyEasy.addEventListener("click", function () {
  if(difficulty = "hard"){
    difficultyEasy.classList.add("selected")
    difficultyHard.classList.remove("selected")
    difficulty = "easy"
    for(var i = 3; i < squares.length; i ++){
      squares[i].style.visibility = "hidden";
    }
    newGame();
  }
})


function gameOverDisplay(answer){
  squares.forEach( s => {
  s.style.backgroundColor = answer;
  });
  newGameBtn.textContent = "TRY AGAIN?"
}

function rgbBuilder(){
  var r = Math.ceil(Math.random() * 255);
  var g = Math.ceil(Math.random() * 255);
  var b = Math.ceil(Math.random() * 255);
  var rgbcode = "rgb" + "(" + r + ", " + g + ", " + b + ")"
  return rgbcode;
}

function colorArr(num){
  var arr = [];
  for (let i = 0; i < num; i++){
    arr.push(rgbBuilder());
  }
  return arr
}

function newGame() {
  newGameBtn.textContent = "NEW COLORS"
  colors = [];
  messageDisplay.textContent = "";
  var gameOver = false;
  if(difficulty === "hard"){
    colors = colorArr(6)
  }else if(difficulty === "easy"){
    colors = colorArr(3)
  }
  answer =  colors[Math.floor(Math.random() * colors.length)];
  rbgDisplay.textContent = answer.toUpperCase();
  
  for(i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  
    squares[i].addEventListener("click", function(){
      if(!gameOver){
        if (this.style.backgroundColor !== answer){
          this.style.backgroundColor = "#1b1b1b";
          messageDisplay.textContent = "Wrong pick, try again..."
          messageDisplay.style.color = "red"
        }else {
          messageDisplay.textContent = "You did it !"
          messageDisplay.style.color = "green"
          gameOver = true;
          gameOverDisplay(answer);
        }
      }
    });
  } 
}
