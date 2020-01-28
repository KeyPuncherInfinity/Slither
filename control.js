var upField = 1;
var downField = '<div id="down" onmousemove="down()"></div>';
var midField = '<div id="left_right"><div id="left" onmousemove="left()"></div><div id="right" onmousemove="right()"></div></div>';


var direction = 'right';


function setUP(){
        direction = 'up';
}


function setDOWN(){
        direction = 'down';
}


function setLEFT(){
        direction = 'left';
}


function setRIGHT(){
        direction = 'right';
}

function control(){


        switch(direction){
        case 'up':
                console.log('up');
        break;

        case 'down':
                console.log('down');
        break;

        case 'left':
                console.log('left');
        break;

        case 'right':
                console.log('right');
        break;
        }
}