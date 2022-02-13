//create canvas and dimensions
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 500;
let context = canvas.getContext("2d");
 context.fillStyle = "white";
 context.fillRect(0,0,canvas.width,canvas.height);

 //variables
 let draw_color = "black";
 let draw_width = "2";
 let is_drawing = false;

//drawing proccedure event listeners
 canvas.addEventListener("touchstart", start,false);
 canvas.addEventListener("touchmove", draw,false);
 canvas.addEventListener("mousedown", start,false);
 canvas.addEventListener("mousemove", draw,false);

 function start(event){
     is_drawing = true;
     context.beginPath();
     context.moveTo(event.clientX - canvas.offsetLeft,
                    event.clientY - canvas.offsetTop);
     event.preventDefault();


 }


 function draw(event){
    if( is_drawing){
        context.lineTo(event.clientX - canvas.offsetLeft,
                       event.clientY - canvas.offsetTop);
                       context.strokeStyle = draw_color;
                       context.lineWidth = draw_width;
                       context.lineCap = "round";
                       context.lineJoin = "round";
                       context.stroke();
    }

 }




 

