const canvas = document.getElementById("drawing-board");
const toolbar = document.getElementById("toolbar");
const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let satrtX;
let startY;
 
toolbar.addEventListener("click" , e =>{
    if (e.target.id === "clear"){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}); 