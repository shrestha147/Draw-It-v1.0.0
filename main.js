var mouseevent="empty";
var lastX, lastY, currentX, currentY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
width=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
    console.log(mouseevent);   
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
    console.log(mouseevent);
}


canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
    console.log(mouseevent);
    
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("Last position of x and y are: ");
        console.log("x = "+ lastX + " y = "+ lastY);
        ctx.moveTo(lastX, lastY);

        console.log("Current position of x and y are: ");
        console.log("x = "+ currentX + " y = "+ currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    lastX=currentX;
    lastY=currentY;
}