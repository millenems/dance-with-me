window.onload = function () {
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
        //quadrados em ordem
        //primeiro
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(110, 110, 120, 120);
        //segundo
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(240, 110, 120, 120);
        //terceiro
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(370, 110, 120, 120);
        //quarto 
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(110, 240, 120, 120);
        //quinto
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(240, 240, 120, 120);
        //sexto
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(370, 240, 120, 120);
        //sétimo
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(110, 370, 120, 120);
        //oitavo 
        this.ctx.fillStyle = "salmon";
        this.ctx.fillRect(240, 370, 120, 120);
        //nono
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(370, 370, 120, 120);
    }
    
}

function startGame() {
    let gameCanvas = new squareCanvas();
    console.log(gameCanvas.drawMap());
    // setInterval(() => {
    //     gameCanvas.resetBoard();
    //     gameCanvas.drawMap();
    // }, 20);
    // squareCanvas.drawMap()
}