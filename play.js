var playField = '';
var pixel = {
    p1: '<div class="pixel" id="id',
    p2: '"></div>'
}

var snake = [
    [15, 30],
    [15, 29],
    [15, 28]
]

var direction = 'right';




function initField(){
    for(var indexi = 0; indexi < 30; indexi++){
        for(var indexj = 0; indexj < 88; indexj++){
            playField = playField + pixel.p1 + indexi + '.' + indexj + pixel.p2;
        }
    }

    document.getElementsByClassName('playField')[0].innerHTML = playField;
    setInterval(control,100);
}

function update(){
    for(var bodyPiece = 0; bodyPiece < snake.length; bodyPiece++){
            document.getElementById('id' + snake[bodyPiece][0] + '.' + snake[bodyPiece][1]).style.backgroundColor = "blue";
    }
}