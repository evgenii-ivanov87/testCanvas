import "./index.css"

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isClick = false;
const coords = [];
let x='';
let y='';

function setCoors(e) {
    x = e.clientX;
    y = e.clientY
  
    coords.push([e.clientX,e.clientY])
}


ctx.lineWidth = 1*2

canvas.addEventListener('click', function(e){
    isClick = !isClick
    setCoors(e)   
    
})

canvas.addEventListener('mousedown', function(e){
    if (e.button === 2) {
        
    }  
    
})

canvas.onmousemove= function(e){
    
    if (isClick) {    
       
        ctx.beginPath();
        ctx.lineCap = 'square';
        ctx.moveTo(x,y);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.stroke()
      
       
    }
    
    
}



function paint(item) {
    let c =item.length
    let [x1, y1] = item[0]
    let [x2, y2] = item[1]
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(c)
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    
    ctx.stroke()
}
