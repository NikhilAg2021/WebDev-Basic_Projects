//JS code for draggable div

//Declaring and assigning value to variables
var dragItem= document.querySelector('#item');
var container=document.querySelector('#container');

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

//Looking for events and calling the functions related to it
//TouchEvents for smartphones and other touch enabled devices
container.addEventListener('touchstart', dragStart, false);
container.addEventListener('touchend', dragEnd, false);
container.addEventListener('touchmove', drag, false);

//MouseEvents for other devices 
container.addEventListener('mousedown', dragStart, false);
container.addEventListener('mouseup', dragEnd, false);
container.addEventListener('mousemove', drag, false);

//The functions to carry out the command
function dragStart(event)
 {
    if (event.type === 'touchstart')
     {
         //Setting the Initial position for TouchEvents
        initialX = event.touches[0].clientX - xOffset;
        initialY = event.touches[0].clientY - yOffset;
    } 
    else
     {
         //Setting initial position for MouseEvent
        initialX = event.clientX - xOffset;
        initialY = event.clientY - yOffset;
    }

    //Checking if the element clicked on is the element to drag
    if (event.target === dragItem)
    {
        active = true;
    }
}

function dragEnd(event) {
initialX = currentX;
initialY = currentY;

active = false;
}

function drag(event) {
if (active) {

event.preventDefault();

if (event.type === "touchmove") {
currentX = event.touches[0].clientX - initialX;
currentY = event.touches[0].clientY - initialY;
} else {
currentX = event.clientX - initialX;
currentY = event.clientY - initialY;
}

xOffset = currentX;
yOffset = currentY;

setTranslate(currentX, currentY, dragItem);
}
}

function setTranslate(xPos, yPos, el) {
el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}