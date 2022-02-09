window.addEventListener("load",() =>{
    const canvas =  document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //options
     const color = document.querySelector("#colorpicker");
     const penSize = document.querySelector("#penSize");
     

     
    //resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //event
    canvas.addEventListener("mousedown" , start);
    canvas.addEventListener("mousemove" , draw);
    canvas.addEventListener("mouseup" , end);
 //drawing functions
    let drawing = false;
    function start(){
     drawing = true;
}

function end(){
    drawing = false;
    ctx.beginPath();
}
    function draw(e){
      if(!drawing) return ;
      ctx.lineWidth = 12;
      ctx.lineCap = "round";
      ctx.lineTo(e.clientX ,e.clientY);
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.moveTo(e.clientX,e.clientY);
}

});

