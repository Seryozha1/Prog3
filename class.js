let LivingCreature = require("./LivingCreature");
const io = require('./server');

module.exports = class Grass extends LivingCreature {
    mul() {
        this.multiply++;
        var newCell = this.selectRandomCell(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;

            statobj.grass++
            io.emit("updstats" , statobj)
        }
    }
}