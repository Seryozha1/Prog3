const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);


let Grass = require("./class")
let GrassEater = require("./GrassEater")
let Predator = require("./Predator")
let Tp = require("./TP")
let R0 = require("./R0")

matrix = [];
grassArr = [];
grassEaterArr = []
predatorArr = [];
tpArr = [];
r0Arr = [];

const sideX = 30;
const sideY = 30;
const speed = 300;

function random(min, max) {
    if (min === undefined && max === undefined) {
        return Math.random();
    } else if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}

function kerparner(quantity, char) {
    let initialNumber = 0;
    while (initialNumber < quantity) {
        let x = Math.floor(random(0, sideX));
        let y = Math.floor(random(0, sideY));
        if (matrix[y][x] == 0) {
            matrix[y][x] = char;
        }
        initialNumber++;
    }
}

for (let i = 0; i < sideY; i++) {
    matrix.push([]);
    for (let j = 0; j < sideX; j++) {
        matrix[i].push(0);
    }
}
//...


console.log(matrix);

function initgame() {
    kerparner(150, 1)
    kerparner(7, 2)
    kerparner(5, 3)
    kerparner(7, 4)
    kerparner(15, 5)
    startinterval()
    initArrays()
}



function initArrays() {
    grassArr = [];
    grassEaterArr = []
    predatorArr = [];
    tpArr = [];
    r0Arr = [];
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3)
                predatorArr.push(pre)

            }
            else if (matrix[y][x] == 4) {
                var tp = new Tp(x, y, 4)
                tpArr.push(tp)

            }
            else if (matrix[y][x] == 5) {
                var r0 = new R0(x, y, 5)
                r0Arr.push(r0)

            }
        }
    }

}


let intName;
function startinterval() {
    clearInterval(intName)
    intName = setInterval(function () {
        playGame()
    }, speed)
}

function playGame() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in tpArr) {
        tpArr[i].eat();
    }
    for (var i in r0Arr) {
        r0Arr[i].move();
    }
    io.emit("update matrix" , matrix)
}

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");

});

app.listen(3000, function () {

    console.log("Example is running on port 3000");

});

io.on("connection", function (socket) {
    socket.emit("update matrix", matrix)
    initgame()
})
