import React, { useEffect, useRef } from 'react';

const edge_offset = 10;//pixels

function CanvasVisualization({width, height, rows, cols}) {
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.getContext('2d')
      // do something here with the canvas
      //base square/rect
      ctx.rect(0+edge_offset, 0+edge_offset, width-2*edge_offset, height-2*edge_offset)
      ctx.stroke()

    }
  }, [])

  return (
    <div className="CanvasVisualization" >
      <canvas ref={ref} width={width} height={height}/>
    </div>
  );
}

export default CanvasVisualization;
