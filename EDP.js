// create a run variable for use when determining loop termination
var _run;
// create integer variables for determining incremental change in the horizontal and vertical plane
var x = 1;
var y = 1;
// create string variables for determining direction of incremental change
var dir_x = 'right';
var dir_y = 'down';

// function to move the image a given number of pixels in the x and y direction within the window
function shiftImg(){
    // initiating conditional to run the loop
    if (_run == true){
        // if direction is going right and is less than +250 px from its original position (0,0) on the horizontal plane,
        // continue moving rightward
        if (dir_x == 'right'){
            if (x < 250){
                x += 3;
            }
            // once 250 pixels from its original position on the horizontal plane, 
            // change the direction the image is moving in to left.
            else{
                dir_x = 'left';
                x -= 3;
            }
        }
        // if direction is going left and is greater than -250 px from its original position (0,0) on the horizontal plane,
        // continue moving leftward
        if (dir_x == 'left'){
            if (x > -250){
                x -= 3;
            }
            // once -250 pixels from its original position on the horizontal plane, 
            // change the direction the image is moving in to right.
            else{
                dir_x = 'right';
                x += 3;
            }
        }

        // if direction is downward and is less than +267 px from its original position (0,0) on the vertical plane,
        // continue moving downward 
        if (dir_y == 'down'){
            if (y < 267){
                y += 2;
            }
            // once +267 pixels from its original position on the vertical plane, 
            // change the direction the image is moving in to up.
            else{
                dir_y = 'up';
                y -= 2;
            }
        }
        // if direction is upward and is greater than 0 px from its original position (0,0) on the vertical plane,
        // continue moving upward
        if (dir_y == 'up'){
            if (y > 0){
                y -= 2;
            }
            // once at its original position on the vertical plane, 
            // change the direction the image is moving in to down.
            else{
                dir_y = 'down';
                y += 2;
            }
        }
        // select the image to move by finding it by its id
        // set translate value to the css for the image
        // translate will move the image by however many (in this case) pixels each time it is called
        // translate(px in horizontal direction, px in vertical direction)
        // the starting position of the img is (0,0)
        // negative integers will move the image left or up, and positive values vice versa
        // the rate of change is determined by the number of pixels to move in each frame
        document.getElementById('keanuImg').style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        // callback the shiftImg function to the window.
        // This will continuously loop the funciton as long as the conditional statement is met
        window.requestAnimationFrame(shiftImg);
    }
}

// function for moving the image on the screen, disabling the start button, and enabling the stop button
function start(){
    // set run to true in order to start the looping sequence in the shiftImg() call
    _run = true;
    // remove disabled attribute from stop button-> enable stop button
    document.getElementById('stop_btn').removeAttribute('disabled');
    // set a disabled attribute to start button -> disable start button
    document.getElementById('start_btn').setAttribute('disabled', '');
    // call the function that moves the image
    shiftImg();
}

// function to stop the image's movement acound the page, disabling the stop button and enabling the start button 
function stop(){
    // remove disabled attribute from start button -> enable start button 
    document.getElementById('start_btn').removeAttribute('disabled');
    // set a disabled attribute to stop button -> disable stop button
    document.getElementById('stop_btn').setAttribute('disabled', '');
    _run = false;
}

