
function setUP(){
        if(direction != 'down')
                direction = 'up';
}

function setDOWN(){
        if(direction != 'up')
                direction = 'down';
}

function setLEFT(){
        if(direction != 'right')
                direction = 'left';
}

function setRIGHT(){
        if(direction != 'left')
                direction = 'right';
}


function up(){
        document.getElementById('id' + snake[snake.length - 1][0] + '.' + snake[snake.length - 1][1]).style.backgroundColor = "#0c6121";
        for(var bodyPiece = snake.length-1; bodyPiece > 0; bodyPiece--){
                snake[bodyPiece][0] = snake[bodyPiece-1][0];
                snake[bodyPiece][1] = snake[bodyPiece-1][1];
        }

        if(snake[0][0] == 0){
                snake[bodyPiece][0] = 29;
        }
        else{
                snake[bodyPiece][0] = snake[bodyPiece][0] - 1;
        }
}

function down(){
        document.getElementById('id' + snake[snake.length - 1][0] + '.' + snake[snake.length - 1][1]).style.backgroundColor = "#0c6121";
        for(var bodyPiece = snake.length-1; bodyPiece > 0; bodyPiece--){
                snake[bodyPiece][0] = snake[bodyPiece-1][0];
                snake[bodyPiece][1] = snake[bodyPiece-1][1];
        }

        if(snake[0][0] == 29){
                snake[bodyPiece][0] = 0;
        }
        else{
                snake[bodyPiece][0] = snake[bodyPiece][0] + 1;
        }
}


function left(){
        document.getElementById('id' + snake[snake.length - 1][0] + '.' + snake[snake.length - 1][1]).style.backgroundColor = "#0c6121";
        for(var bodyPiece = snake.length-1; bodyPiece > 0; bodyPiece--){
                snake[bodyPiece][0] = snake[bodyPiece-1][0];
                snake[bodyPiece][1] = snake[bodyPiece-1][1];
        }

        if(snake[0][1] == 0){
                snake[bodyPiece][1] = 87;
        }
        else{
                snake[bodyPiece][1] = snake[bodyPiece][1] - 1;
        }
}


function right(){
        document.getElementById('id' + snake[snake.length - 1][0] + '.' + snake[snake.length - 1][1]).style.backgroundColor = "#0c6121";
        for(var bodyPiece = snake.length-1; bodyPiece > 0; bodyPiece--){
                snake[bodyPiece][0] = snake[bodyPiece-1][0];
                snake[bodyPiece][1] = snake[bodyPiece-1][1];
        }

        if(snake[0][1] == 87){
                snake[bodyPiece][1] = 0;
        }
        else{
                snake[bodyPiece][1] = snake[bodyPiece][1] + 1;
        }
}




function resolveInput(){
        var input = document.getElementById('input').value;

        switch(input){
                case 'w':
                case '8':
                        setUP();
                break;

                case 's':
                case '5':
                        setDOWN();
                break;

                case 'a':
                case '4':
                        setLEFT();
                break;

                case 'd':
                case '6':
                        setRIGHT();
                break;
        }

        document.getElementById('input').value = '';
}







function control(){


        switch(direction){
        case 'up':
                up();
        break;

        case 'down':
                down();
        break;

        case 'left':
                left();
        break;

        case 'right':
                right();
        break;
        }

        
        checkGrow();
        update();
}