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

var grow = 0;

var food = [15, 50];


function initField(){
    for(var indexi = 0; indexi < 30; indexi++){
        for(var indexj = 0; indexj < 88; indexj++){
            playField = playField + pixel.p1 + indexi + '.' + indexj + pixel.p2;
        }
    }

    //console.log(screen.width + ' and ' + screen.height);

    document.getElementsByClassName('playField')[0].innerHTML = playField;
    setInterval(control,100);
}

function update(){
    for(var bodyPiece = 0; bodyPiece < snake.length; bodyPiece++){
            document.getElementById('id' + snake[bodyPiece][0] + '.' + snake[bodyPiece][1]).style.backgroundColor = "blue";
    }

    document.getElementById('id' + food[0] + '.' + food[1]).style.backgroundColor = "black";
    document.getElementById('middle').innerHTML = '<h1>' + snake.length + '</h1>';
}


function checkGrow(){
    if(snake[0][0] == food[0] && snake[0][1] == food[1]){    
        last = snake.length - 1;
        snake.push([snake[last][0], snake[last][1]]);
        //foodRandomize();
    }   
}