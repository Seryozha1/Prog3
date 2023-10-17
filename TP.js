let LivingCreature = require("./LivingCreature");

module.exports = class Tp extends LivingCreature {
    constructor(x,y,index) {
        super(x,y,index)
        this.energy = 8;
        this.directions = [];
    }
    getNewCoordinates(){
        this.directions = [
             [this.x - 4, this.y - 4],
             [this.x    , this.y - 4],
             [this.x + 4, this.y - 4],
             [this.x - 4, this.y    ],
             [this.x + 4, this.y    ],
             [this.x - 4, this.y + 4],
             [this.x    , this.y + 4],
             [this.x + 4, this.y + 4]
        ];
     }
     
        chooseCell(character,character1,character2) {
            var found = [];
            this.getNewCoordinates()
            for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
            if (matrix[y][x] == character || matrix[y][x] == character1 || matrix[y][x] == character2) {
                found.push(this.directions[i]);
            }
        }
        

        } 
        return found;
    }

    eat() {
        let foods = this.chooseCell(1,2,3)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 4
            this.x = newX
            this.y = newY
            if (this.chooseCell(1)) {
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            if (this.chooseCell(2)) {
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            if (this.chooseCell(3)) {
                for (var i in predatorArr) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
            }




        }
        else {
            this.move();
        }
    }




    move() {
        this.energy++
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY

        }


    }




}

