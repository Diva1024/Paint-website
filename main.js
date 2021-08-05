canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="Empty";
var last_postition_of_x,last_postition_of_y;
var current_postion_of_mousex,current_postition_of_mousey;
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
   current_postion_of_mousex=e.clientX-canvas.offsetLeft;
   current_postion_of_mousey=e.clientY-canvas.offsetTop;
    if (mouseEvent="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last postion of x and y cordinates are:");
        console.log("x= "+last_postition_of_x+ "y= " +last_postition_of_y);
        ctx.moveTo(last_postition_of_x,last_postition_of_y);
        console.log("current postion of x and y cordinates are:");
        console.log("x= "+current_postion_of_mousex+ "y= " +current_postion_of_mousey);
        ctx.lineTo(current_postion_of_mousex,current_postion_of_mousey);
        ctx.stroke();
    }
    last_postition_of_x=current_postion_of_mousex;
    last_postition_of_y=current_postion_of_mousey;

}