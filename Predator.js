let LivingCreature = require("./LivingCreature");
const io = require('./server');

module.exports = class Predator extends LivingCreature {
    constructor(x,y,index) {
        super(x,y,index)
        this.energy = 24;
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
             [this.x + 1, this.y + 1]
        ];
     }
     
     chooseCell(character) {
        this.getNewCoordinates()
    return super.chooseCell(character)
}

    mul() {
        var newCell = this.selectRandomCell(2);
        if (newCell) {
            var newpredator = new Predator(newCell[0], newCell[1], this.index);
            predatorArr.push(newpredator);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 8;

            statobj.predator++
            io.emit("updstats" , statobj)
        }
    }
    eat() {
        let food = this.selectRandomCell(2)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 12) {
                this.mul()
            }
        }
        else {
            this.move();
        }
    }

    move() {
        this.energy--
        let newCell = this.selectRandomCell(0)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0  
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }


    die() {
        matrix[this.y][this.x] = 0;

        for (var i in predatorArr) {

            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {

                predatorArr.splice(i, 1);

                break;

            }

        }

    }
}