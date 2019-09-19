let chooseColor = "";
let oldKey = "";
let oldColor = "";
let myMusic;
let interval;
let counter = 0;
let score = 0;

window.onload = function () {
    document.getElementById("lets").style.display="none";
    document.getElementById("tryAgain-button").style.display="none";
    dance();
    document.getElementById("start-button").onclick = function () {
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
  document.onkeydown = (e) => {
    let scoreNow = document.getElementById('score');
    scoreNow.innerHTML = `Score: ${score}`;
    if(oldKey === e.keyCode){
      document.getElementById("newvideo-9").load();
      document.getElementById("newvideo-8").load();
      document.getElementById("newvideo-7").load();
      document.getElementById("newvideo-6").load();
      document.getElementById("newvideo-5").load();
      document.getElementById("newvideo-4").load();
      document.getElementById("newvideo-3").load();
      document.getElementById("newvideo-1").load();
      document.getElementById("newvideo").load();
      dance();  
    }
    // console.log(scoreNow)
    switch(e.keyCode){
      case 84: //primeiro t
      chooseColor = "red";
      dance();
      const video6 = document.getElementById("newvideo-6");
      video6.style.display="block";
      video6.play();
      break;
      case 89: //segundo y
      chooseColor = "green";
      dance();
      const video5 = document.getElementById("newvideo-5");
      video5.style.display="block";
      video5.play()
      break;  
      case 85: //terceiro u
      chooseColor = "yellow";
      dance();
      const video3 = document.getElementById("newvideo-3");
      video3.style.display="block";
      video3.play();
      break;
      case 71: //quarto g
      chooseColor = "orange";
      dance();
      const video = document.getElementById("newvideo");
      video.style.display="block";
      video.play();
      break;
      case 72: //quinto h
      chooseColor = "white";
      dance();
      const video4 = document.getElementById("newvideo-4");
      video4.style.display="block";
      video4.play();
      break;
      case 74: //sexto j
      chooseColor = "blue";
      dance();
      const video1 = document.getElementById("newvideo-1");
      video1.style.display="block";
      video1.play();
      break;
      case 66: //sétimo b
      chooseColor = "purple";
      dance();
      const video8 = document.getElementById("newvideo-8");
      video8.style.display="block";
      video8.play();
      break;
      case 78: //oitavo n
      chooseColor = "salmon";
      dance();
      const video7 = document.getElementById("newvideo-7");
      video7.style.display="block";
      video7.play();
      break;
      case 77: //nono m
      chooseColor = "gray";
      dance();
      const video9 = document.getElementById("newvideo-9");
      video9.style.display="block";
      video9.play();
      break;
    }    
  };

myMusic = new Audio();
myMusic.src = "./song/Cut-despacito.mp3";

function startGame() {
    let gameCanvas = new squareCanvas();
    gameCanvas.drawMap();  
    let newSquares = createSquare();
    newSquares.forEach(e =>{
      e.drawSquare();
    myMusic.play();
    document.getElementById("start-button").style.display="none";
    document.getElementById("lets").style.display="block";
    document.getElementById("commands").style.display="none";
    document.getElementById("newvideo-11").style.display="none";
    });

  
  interval = setInterval(()=>{
    counter += 1;
    if(counter === 14){
      clearInterval(interval);
      if(score <= 30){
        myMusic.pause();
        dance();
        const video10 = document.getElementById("newvideo-10")
        video10.style.display="block";
        video10.play();
        alert("YOU JUST DIDN'T LOSE");
        startAgain();
      } else if(score <= 50){
        myMusic.pause();
        dance();
        const video10 = document.getElementById("newvideo-10")
        video10.style.display="block";
        video10.play();
        alert("YOU MAY HAVE WON, BUT YOU STILL SUCK");
        startAgain();
      } else if(score <= 70){
        myMusic.pause();
        dance();
        const video10 = document.getElementById("newvideo-10")
        video10.style.display="block";
        video10.play();
        alert("YOU WON, BUT YOU AREN'T THE BEST");
        startAgain();
      } else {
        myMusic.pause();
        dance();
        const video10 = document.getElementById("newvideo-10")
        video10.style.display="block";
        video10.play();
        alert("CONGRATULATIONS, YOU ARE MY FAVORITE DANCER!");
        startAgain();
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
  
function compare() {
    if(chooseColor === oldColor){
      score += 10;
    } else {
      score -= 10;
      dance();
      const video2 = document.getElementById("newvideo-2")
      video2.style.display="block";
      video2.play();
    }
    console.log(score);
  } 
  
function gameOver() {
    if(score < -30){
      myMusic.pause();
      dance();
      alert("GAME OVER");
      const video10 = document.getElementById("newvideo-10")
      video10.style.display="block";
      video10.play();
      clearInterval(interval);
      startAgain();
    }
  }
  
function startAgain() {
    document.getElementById("tryAgain-button").style.display="block";
    document.getElementById("tryAgain-button").onclick = function () {
      document.location.reload(true);
    };
}  

//et dançando
function dance() {
  document.getElementById("newvideo").style.display="none";
  document.getElementById("newvideo-1").style.display="none";
  document.getElementById("newvideo-2").style.display="none";
  document.getElementById("newvideo-3").style.display="none";
  document.getElementById("newvideo-4").style.display="none";
  document.getElementById("newvideo-5").style.display="none";
  document.getElementById("newvideo-6").style.display="none";
  document.getElementById("newvideo-7").style.display="none";
  document.getElementById("newvideo-8").style.display="none";
  document.getElementById("newvideo-9").style.display="none";
  document.getElementById("newvideo-10").style.display="none";
}

function stop() {
  document.getElementById("newvideo").currentTime = 0;
  document.getElementById("newvideo-1").currentTime = 0;
  document.getElementById("newvideo-2").currentTime = 0;
  document.getElementById("newvideo-3").currentTime = 0;
  document.getElementById("newvideo-4").currentTime = 0;
  document.getElementById("newvideo-5").currentTime = 0;
  document.getElementById("newvideo-6").currentTime = 0;
  document.getElementById("newvideo-7").currentTime = 0;
  document.getElementById("newvideo-8").currentTime = 0;
  document.getElementById("newvideo-9").currentTime = 0;
  document.getElementById("newvideo-10").currentTime = 0;
}

let myVar = setInterval(setColor, 500);
 
function setColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "rgb(221, 161, 153)" ? "rgb(249, 230, 215)" : "rgb(221, 161, 153)";
}
