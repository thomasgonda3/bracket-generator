import '../app.css'

import React from 'react'

const cellStyle = {
  backgroundColor: 'pink',
  marginTop: '10px',
  marginLeft: '10px',
  height: '40px',
  width: '200px'
}

const Cell = props => {
  const { cell, onCellChange } = props
  const setWinner = () => {
    const newCell = {
      ...cell,
      winner: cell.player1
    }
    const winner = document.getElementById(`cell-${cell.id}-1`)
    winner.style.backgroundColor = 'yellow'
    onCellChange(newCell)
  }

  return (
    <div style={cellStyle} onClick={() => setWinner()}>
      <div id={`cell-${cell.id}-1`}>{cell.player1}</div>
      <div id={`cell-${cell.id}-2`}>{cell.player2}</div>
    </div>
  )
}
export default Cell
