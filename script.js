var matrix = [];
var n = 30;
var m = 40;

 
 var side = 20;
 var grassArr = [];
 var grassEaterArr = []
 var predatorArr = [];
 var tpArr = [];
 var r0Arr = [];

  function kerparner(qanak, kerpar) {
      var q = 0;
      while (q < qanak) {
          var x = Math.floor(random(0, n))
          var y = Math.floor(random(0, m))
          if(matrix[x][y] == 0){
                matrix[x][y] = kerpar
            }
            q++
      }
     
  }
 function setup() {
     for (let i = 0;i < n; i++){
         matrix.push([])
         for(let j = 0; j < m; j++){
             matrix[i].push(0)
         }
     }
     kerparner(150,1)
     kerparner(7,2)
     kerparner(5,3)
     kerparner(7,4)
     kerparner(15,5)


    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                var gr = new Grass(x,y,1);
                grassArr.push(gr);
            }
            else if(matrix[y][x] == 2){
     var gre = new GrassEater(x,y,2)
     grassEaterArr.push(gre)
            }
            else if(matrix[y][x] == 3){
                var pre = new Predator(x,y,3)
                predatorArr.push(pre)

            }
            else if(matrix[y][x] == 4){
                var tp = new Tp(x,y,4)
                tpArr.push(tp)

            }	
            else if(matrix[y][x] == 5){
                var r0 = new R0(x,y,5)
                r0Arr.push(r0)

            }
        }
     }
     
 }

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 
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
    for(var i in grassArr){
            grassArr[i].mul();
    }
    for(var i in grassEaterArr){
        grassEaterArr[i].eat();   
    }
    for(var i in predatorArr){
        predatorArr[i].eat();  
    }
    for(var i in tpArr){ 
        tpArr[i].eat();      
    }
    for(var i in r0Arr){ 
        r0Arr[i].move();      
    }

    
}
