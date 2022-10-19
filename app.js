import "./index.css"

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isClick = false;
const coords = [];
let x='';
let y='';

ctx.lineWidth = 1*2

canvas.addEventListener('click', function(e){
    isClick = !isClick
    ctx.beginPath()
    // save(coords)
    // coords.push([e.clientX,e.clientY])
    // console.log(coords)
  
        x=e.clientX;
        y=e.clientY
        console.log(x)
        console.log(y)
    
    
})


canvas.onmousemove = function(e){
   
    if(isClick){
       
        

        // coords.push([e.clientX,e.clientY])
        // ctx.lineTo(e.clientX,e.clientY)
        // ctx.stroke()
    
        // ctx.beginPath();
        // ctx.arc(e.clientX,e.clientY,1,0,Math.PI*2);
        // ctx.fill();
    
        // ctx.beginPath();
        // ctx.moveTo(e.clientX,e.clientY); 
        // ctx.closePath()

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke()
       
        
        
    }
    
    
}

function save(items){
    localStorage.setItem('coords', JSON.stringify(items))
}