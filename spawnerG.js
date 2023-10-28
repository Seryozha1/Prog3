const GrassEater = require('./GrassEater');
module.exports = class SpawnerG {

    

    selectRandomCell(character) {
        const cells = this.chooseCell(character);
        const randomIndex = Math.floor(Math.random() * cells.length);
        return cells[randomIndex];
        }


    constructor(x, y, index) {

        this.x = x;
        this.y = y;
        this.spawnenergy = 0;
        this.index = index;
        this.directions = [
          [this.x - 1, this.y - 1],
          [this.x, this.y - 1],
          [this.x + 1, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x - 1, this.y + 1],
          [this.x, this.y + 1],
          [this.x + 1, this.y + 1]

        ];

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

    chooseCell(character,character1,character2,character3) {
        var found = [];
        this.getNewCoordinates()
        for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
        if (matrix[y][x] == character || matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3) {
            found.push(this.directions[i]);
        }
    }
    

    } 
    return found;
}


mul() {
    var newCell = this.selectRandomCell(this.chooseCell(1));
    if (newCell) {
        var newGrassE = new GrassEater(newCell[0], newCell[1], this.index);
        grassEaterArr.push(newGrassE);
        matrix[newCell[1]][newCell[0]] = 2;
    }
}

    wait(){
        if (grassArr.length > 10) {
            this.mul()
        }

    }

}