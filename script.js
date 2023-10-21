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
