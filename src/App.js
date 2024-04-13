import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import QuiltButton from './QuiltButton'
import seam_allow_graphics from './images/seam-allow-emoji.png'


const QUILT_DIMENSIONS = {
  undefined: {
    width_inches: 0,
    height_inches: 0,
  },
  "Twin": {
    width_inches: 38,
    height_inches: 75,
  },
  "Twin XL": {
    width_inches: 38,
    height_inches: 80,
  },
  "Full": {
    width_inches: 54,
    height_inches: 75,
  },
  "Queen": {
    width_inches: 60,
    height_inches: 80,
  },
  "King": {
    width_inches: 76,
    height_inches: 80,
  },
  "California King": {
    width_inches: 72,
    height_inches: 84,
  }
}

const SEAM_ALLOWANCE_NUMBER_MAP = {
  "1/4inch": 0.25,
  "3/8inch": 0.375,
  "1/2inch": 0.5,
  "5/8inch": 0.625,
  "3/4inch": 0.75,
}

function App() {
  const [step, setStep] = useState(0)
  const [size, setSize] = useState(undefined)
  const [seam, setSeam] = useState(undefined)
  const [square, setSquare] = useState(0)
  const [rows, setRows] = useState(0)
  const [cols, setCols] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if(rows && cols) {
      const totalCalculation = rows * cols
      setTotal(totalCalculation)
    }
  }, [rows, cols])

  const onSelectSize = (sizeString) => {
    setSize(sizeString)
    console.log("set size: " + sizeString)
    setStep(1)
  }

  const onSelectSeam = (seamString) => {
    setSeam(seamString)
    console.log("set seam: "+ seamString)
    setStep(2)
  }

  const onChangeSquare = (val) => {
    setSquare(val)
    console.log("set square: "+val)
  }

  const moveToNextStep = () => {
    setStep(3)
    calculateRows()
    calculateColumns()
  }

  const calculateRows = () => {
    const height = QUILT_DIMENSIONS[size].height_inches;
    const rowsCalc = height / (square - 2*SEAM_ALLOWANCE_NUMBER_MAP[seam])
    const rowsRounded = Math.ceil(rowsCalc)
    setRows(rowsRounded)
  }

  const calculateColumns = () => {
    const width = QUILT_DIMENSIONS[size].width_inches;
    const colsCalc = width / (square - 2*SEAM_ALLOWANCE_NUMBER_MAP[seam])
    const colsRounded = Math.ceil(colsCalc)
    setCols(colsRounded)
  }

  return (
    <div className="App">
      <h1 className="page-title">Quilt Calculator</h1>
      <h2>Step 1: Select Quilt Size</h2>
      {!step && <div className="section section-0">
        <div className="bed-selection">
          <QuiltButton title="Twin" onSelect={onSelectSize}/>
          <QuiltButton title="Twin XL" onSelect={onSelectSize}/>
          <QuiltButton title="Full" onSelect={onSelectSize}/>
          <QuiltButton title="Queen" onSelect={onSelectSize}/>
          <QuiltButton title="King" onSelect={onSelectSize}/>
          <QuiltButton title="California King" onSelect={onSelectSize}/>
        </div>
      </div>}
      <h2>Step 2: Select Seam Allowance</h2>
      {step === 1 && <div className="section section-1">
        <div className="seam-selection">
          <QuiltButton title="1/4inch" graphic={seam_allow_graphics} onSelect={onSelectSeam}/>
          <QuiltButton title="3/8inch" graphic={seam_allow_graphics} onSelect={onSelectSeam}/>
          <QuiltButton title="1/2inch" graphic={seam_allow_graphics} onSelect={onSelectSeam}/>
          <QuiltButton title="5/8inch" graphic={seam_allow_graphics} onSelect={onSelectSeam}/>
          <QuiltButton title="3/4inch" graphic={seam_allow_graphics} onSelect={onSelectSeam}/>
        </div>
      </div>}
      <h2>Step 3: Square size</h2>
      {step === 2 && <div className="section section-1">
        <div>
          <input type="number" value={square} onChange={(e)=> {onChangeSquare(e.target.value)}} min={1} max={12}/>
          <button onClick={moveToNextStep}> Confirm </button>
        </div>
      </div>}
      <h2>Results: </h2>
      <div className="results">
        <div className="single-result"><b>Size:</b> {size}</div>
        <div className="single-result"><b>Seam Allowance:</b> {seam}</div>
        <div className="single-result"><b>Square Size:</b> {square}</div>
        <div className="single-result"><b>Dimensions (inches):</b> {QUILT_DIMENSIONS[size].width_inches} x {QUILT_DIMENSIONS[size].height_inches}</div>
        <div className="single-result"><b>Rows needed:</b> {rows}</div>
        <div className="single-result"><b>Columns needed:</b> {cols}</div>
        <div className="single-result"><b>Squares needed:</b> {total}</div>
      </div>

    </div>
  );
}

export default App;
