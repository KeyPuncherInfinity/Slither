var playField = '';
var pixel = {
    p1: '<div class="pixel" id="id',
    p2: '"></div>'
}




function initField(){
    for(var indexi = 0; indexi < 88; indexi++){
        for(var indexj = 0; indexj < 30; indexj++){
            playField = playField + pixel.p1 + indexi + '.' + indexj + pixel.p2;
        }
    }

    document.getElementsByClassName('playField')[0].innerHTML = playField;

}