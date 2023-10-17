const socket = io()
let matrix = []
let side = 30;
const sideX = 30;
const sideY = 30;

// function setup() {
//      for (let i = 0;i < n; i++){
//          matrix.push([])
//          for(let j = 0; j < m; j++){
//              matrix[i].push(0)
//          }
//      }

//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac'); 
//  }

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
