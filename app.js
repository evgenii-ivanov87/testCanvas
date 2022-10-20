import "./index.css"

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isClick = false;
let coords = {
    pX:0,
    pY:0,
    x:0,
    y:0
};





function prevCoors(e) {
    coords.pX = e.clientX,
    coords.pY = e.clientY
      
}

function nextCoors(e) {
    coords.x = e.clientX
    coords.y = e.clientY     
}

ctx.lineWidth = 1*2

canvas.addEventListener('click', function(e){
    isClick = !isClick
    prevCoors(e)
    ctx.save()  
       
})

canvas.onmousemove= function(e){
        if (isClick) {          
        nextCoors(e)
        paint(coords.pX,coords.pY,coords.x,coords.y)
   }
}

function paint(x1,y1,x2,y2){

     ctx.beginPath();
     ctx.restore()       
     ctx.moveTo(x1,y1);
     ctx.lineTo(x2, y2);  
    //  ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.stroke()  
    
} 