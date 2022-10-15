import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
 
    // let out = Array.from(Array(32), (_,x) => x);
    // var redArr = out.sort(function(a,b){return 0.5-Math.random()});
    // var greenArr = out.sort(function(a,b){return 0.5-Math.random()});
    // var blueArr = out.sort(function(a,b){return 0.5-Math.random()});
    // var l = 0;
    // for (let i = 0; i<32;i++){
    //   console.log(redArr[i]);
    //   for(let j = 0; j<32;j++){
    //     for(let k = 0 ;k<32;k++){
    //       context.fillStyle = `rgb(${redArr[i]*8},${greenArr[j]*8},${blueArr[k]*8})`;
    //       context.fillRect((l%256)*5, (l/256)*5, 5, 5);
    //       l++;
    //     }
    //   }
    // }    
    let colorArr = Array.from(Array(32768), (_,x) =>x);
    colorArr = colorArr.sort(function(a,b){return 0.5-Math.random()});
    var l = 0;
    while(colorArr.length !==0 ){
      let colorVal = colorArr.pop();
      context.fillStyle = `rgb(${Math.floor(colorVal/(32*32)*8)},${Math.floor(((colorVal/32)%32)*8)},${(colorVal%32)*8})`;
      context.fillRect((l%256)*5, (l/256)*5, 5, 5);
      l++;
    }
  }, []);
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas