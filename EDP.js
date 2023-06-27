//max top = 200px var y
//max left = 255px var x

var _run;
var x = 1;
var y = 1;
var dir_x = 'right';
var dir_y = 'down';

function shiftImg(){
    if (_run == true){
        if (dir_x == 'right'){
            if (x < 250){
                x += 3;
            }
            else{
                dir_x = 'left';
                x -= 3;
            }
        }
        if (dir_x == 'left'){
            if (x > -250){
                x -= 3;
            }
            else{
                dir_x = 'right';
                x += 3;
            }
        }

        if (dir_y == 'down'){
            if (y < 267){
                y += 2;
            }
            else{
                dir_y = 'up';
                y -= 2;
            }
        }
        if (dir_y == 'up'){
            if (y > 0){
                y -= 2;
            }
            else{
                dir_y = 'down';
                y += 2;
            }
        }

        document.getElementById('keanuImg').style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        window.requestAnimationFrame(shiftImg);
    }
}

function start(){
    _run = true;
    document.getElementById('stop_btn').removeAttribute('disabled');
    document.getElementById('start_btn').setAttribute('disabled', '');
    shiftImg();
}

function stop(){
    document.getElementById('start_btn').removeAttribute('disabled');
    document.getElementById('stop_btn').setAttribute('disabled', '');
    _run = false;
}

