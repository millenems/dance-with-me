window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        // setTimeout(startGame, 1);
        startGame();
    };

};

class squareCanvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    
    
    drawMap() {
        //fundo
        this.ctx.fillRect(100, 100, 400, 400);
    }
    
}

class square {
    constructor(x, y, width, height, color){
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
     drawSquare (){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height); 
     }

}

let chooseColor = "";

document.onkeydown = (e) => {
    let scoreNow = document.getElementById('score');
    scoreNow.innerHTML = `Score: ${score}`, '30px Cosmic Sans MS';
    console.log(scoreNow)
    switch(e.keyCode){
      case 84: //primeiro
        chooseColor = "red";
        break;
      case 89: //segundo
        chooseColor = "green";
        break;  
      case 85: //terceiro
        chooseColor = "yellow";
        break;
      case 71: //quarto
        chooseColor = "orange";
        break;
      case 72: //quinto
        chooseColor = "white";
        break;
      case 74: //sexto
        chooseColor = "blue";
        break;
      case 66: //sétimo
        chooseColor = "purple";
        break;
      case 78: //oitavo
        chooseColor = "salmon";
        break;
      case 77: //nono
        chooseColor = "gray";
        break;
    }
  };
    
let oldColor = "";
let interval;
function startGame() {
    let gameCanvas = new squareCanvas();
    gameCanvas.drawMap();
    let newSquares = createSquare();
    newSquares.forEach(e =>{
        e.drawSquare();
    });

    let counter = 0;

    interval = setInterval(()=>{
        counter += 1;
        if(counter === 14){
            clearInterval(interval);
            if(score <= 30){
            alert("YOU JUST DIDN'T LOSE")
            } else if(score <= 50){
                alert("YOU MAY HAVE WON, BUT YOU STILL SUCK")
            } else if(score <= 70){
                alert("YOU WON, BUT YOU AREN'T THE BEST")
            } else {
                alert("CONGRATULATIONS, YOU ARE MY FAVORITE DANCER!")
            }
        }
    let oneSquare = randomSquare(newSquares);
    oldColor = oneSquare.color;
    // console.log('oldColor', oldColor)
      oneSquare.color = "black";
    //   console.log(oneSquare);
      oneSquare.drawSquare();
      setTimeout(() => {
        console.log('oldColor setTimeOut', oldColor)
        oneSquare.color = oldColor;
        oneSquare.drawSquare();
        console.log(chooseColor);
        compare();
        gameOver();
      }, 800)
    }, 2000);


    // console.log(randomSquare(createSquare()));
    // setInterval(() => {
    //     gameCanvas.resetBoard();
    //     gameCanvas.drawMap();
    // }, 20);
    // squareCanvas.drawMap()
}


const createSquare = () => {
    let red = new square(110, 110, 120, 120, 'red');
    let green = new square(240, 110, 120, 120, 'green');
    let yellow = new square(370, 110, 120, 120, 'yellow');
    let orange = new square(110, 240, 120, 120, 'orange');
    let white = new square(240, 240, 120, 120, 'white');
    let blue = new square(370, 240, 120, 120, 'blue');
    let purple = new square(110, 370, 120, 120, 'purple');
    let salmon = new square(240, 370, 120, 120, 'salmon');
    let gray = new square(370, 370, 120, 120, 'gray');
    let arrSquare = [red, green, yellow, orange, white, blue, purple,salmon,gray]
    return arrSquare;    
}

const randomSquare = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)]
}

let score = 0;

function compare(){
    console.log(score);
    if(chooseColor === oldColor){
        score += 10;
    } else {
        score -= 10;
    }
} 

function gameOver(){
    if(score < -30){
        alert("GAME OVER");
        clearInterval(interval);
    }
}