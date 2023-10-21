let LivingCreature = require("./LivingCreature");

module.exports = class R0 extends LivingCreature {
    constructor(x,y,index) {
        super(x,y,index)
        this.energy = 10;
        this.directions = [];
    }

    getNewCoordinates(){
        this.directions = [
             [this.x - 1, this.y - 1],
             [this.x    , this.y - 1],
             [this.x + 1, this.y - 1],
             [this.x - 1, this.y    ],
             [this.x + 1, this.y    ],
             [this.x - 1, this.y + 1],
             [this.x    , this.y + 1],
             [this.x + 1, this.y + 1],
             [this.x - 2, this.y - 2],
             [this.x    , this.y - 2],
             [this.x + 2, this.y - 2],
             [this.x - 2, this.y    ],
             [this.x + 2, this.y    ],
             [this.x - 2, this.y + 2],
             [this.x    , this.y + 2],
             [this.x + 2, this.y + 2]
        ];
     }
     
        chooseCell(character1,character2,character3,character4,character5,character6) {
            var found = [];
            this.getNewCoordinates()
            for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
            if (matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3 || matrix[y][x] == character4 || matrix[y][x] == character5 || matrix[y][x] == character6) {
                found.push(this.directions[i]);
            }
        }
        
        } 
        return found;
    }


    move() {
        this.energy--
        let newCell = this.selectRandomCell(0)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.bomb()
            this.die()
        }

    }




bomb () {
    let bombCells = this.chooseCell(1,2,3,4,5,6)
        for (let i in bombCells) {
            let newcell = bombCells[i]
              let x = newcell[0]
              let y = newcell[1]
            matrix[y][x] = 0
            for (let i in grassArr) {
            if (x == grassArr[i].x && y == grassArr[i].y) {
            grassArr.splice(i, 1);
            break;}
            for (let i in grassEaterArr) {
            if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1);
            break;}
            for (let i in predatorArr) {
            if (x == predatorArr[i].x && y == predatorArr[i].y) {
            predatorArr.splice(i, 1);
            break;}
            
                

            } 
          }     
        }
    }
}
die() {
    matrix[this.y][this.x] = 0;

            for (var j in r0Arr) {
    
                if (this.x == r0Arr[j].x && this.y == r0Arr[j].y) {
    
                    r0Arr.splice(j, 1);
    
                    break;
    
                }
    
            }
  } 
}

