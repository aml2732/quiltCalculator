import React, { useEffect, useRef } from 'react';

const edge_offset = 10;//pixels

function CanvasVisualization({width, height, rows, cols}) {
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.getContext('2d')
      // do something here with the canvas
      //clearCanvas
      ctx.clearRect(0, 0, width, height)

      //base square/rect
      const col_top_start = 0+edge_offset
      const row_top_start = 0+edge_offset
      const col_bottom_end = width-edge_offset
      const row_bottom_end = height-edge_offset
      ctx.rect(col_top_start, row_top_start, col_bottom_end-edge_offset, row_bottom_end-edge_offset)
      ctx.stroke()

      //draw row lines
      const cols_space_between = (width - 2*edge_offset)/cols
      const rows_space_between = (height - 2*edge_offset)/rows
      for(let r = 0; r < rows; r++){
        ctx.beginPath()
        ctx.moveTo(col_top_start, row_top_start+(r*rows_space_between));
        ctx.lineTo(col_bottom_end, row_top_start+(r*rows_space_between));
        ctx.stroke();
      }
      for(let c = 0; c < cols; c++){
        ctx.beginPath()
        ctx.moveTo(col_top_start+(c*cols_space_between), row_top_start);
        ctx.lineTo(col_top_start+(c*cols_space_between), row_bottom_end);
        ctx.stroke();
      }

    }
  }, [rows, cols])

  return (
    <div className="CanvasVisualization" >
      <canvas ref={ref} width={width} height={height}/>
    </div>
  );
}

export default CanvasVisualization;
