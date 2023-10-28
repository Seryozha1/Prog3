const socket = io()
let matrix = []
let side = 30;
const sideX = 30;
const sideY = 30;

function setup() {
    createCanvas(sideX * side, sideY * side);
    background('#acacac'); 
 }

function drawgame(matrix) {

    for (var y = 0; y < sideY; y++) {
        for (var x = 0; x < sideX; x++) {
 
            if (matrix[y][x] == 1) {
                fill("green");

                if (r == 1) {
                    fill("lightgreen")
                }
                if(r == 2){
                    fill("orange")
                }
                if(r == 3){
                    fill("white")
                }
                if(r == 4){
                    fill("pink")
                }
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x]==2){
                fill("yellow")
            }
            else if (matrix[y][x]==3){
                fill("red")
            }
            else if (matrix[y][x]==4){
                fill("blue")
            }
            else if (matrix[y][x]==5){
                fill("black")
            }
            else if (matrix[y][x]==6){
                fill("#999900")
            }
         
            rect(x * side, y * side, side, side);
        }
    }  
}

socket.on( "update matrix" , drawgame )

let pauseBtn = document.getElementById("button");

console.log(pauseBtn);

pauseBtn.addEventListener('click',handle);

let pause = false;
function handle (){
    pause = !pause
    console.log("clicked")
    socket.emit("pause game" , pause )
}


let resetBtn = document.getElementById("resetbutton");

resetBtn.addEventListener("click" , reset)

function reset() {
    matrix = []
    socket.emit("resetgame")
}
let grass = document.getElementById("grass")
console.log(grass);

let grasseater = document.getElementById("grasseater")
let predator = document.getElementById("predator")

socket.on("updstats", addstatsobj)

function addstatsobj(statobj) {
    grass.innerHTML = "nuber of grass: " + statobj.grass
    grasseater.innerHTML = "nuber of grasseater: " + statobj.grasseater
    predator.innerHTML = "nuber of predator: " + statobj.predator
}

let exanakBtn = document.getElementById("exanakBtn");
let exanak = document.getElementById("exanak");
exanakBtn.addEventListener("click" , changeEx);
let r = 0;
function changeEx(){
    r++
    if (r >= 5) {
        r = 1
    }
    if(r == 1){
        exanak.innerHTML = "amar"
    }
    if(r == 2){
        exanak.innerHTML = "ashun"
    }
    if(r == 3){
        exanak.innerHTML = "dzmer"
    }
    if (r == 4) {
        exanak.innerHTML = "garun"
    }

    console.log(r);
    socket.emit("exanak" , r)
}

