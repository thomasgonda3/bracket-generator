import '../app.css'

import React, { Component } from 'react'

import Cell from './cell.jsx'

const canvasStyle = {
  backgroundColor: '#FFFBF5',
  marginTop: '400px',
  height: '600px',
  width: '95%'
}

class Bracket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: []
    }
  }

  componentDidMount() {
    const { entrants } = this.props
    let counter = 0
    const cells = new Array(entrants.length - 1).fill('').map((x, index) => {
      const player1 = counter < entrants.length ? entrants[counter] : ''
      counter++
      const player2 = counter < entrants.length ? entrants[counter] : ''
      counter++
      return {
        player1,
        player2,
        winner: '',
        id: index
      }
    })
    this.setState({ cells })
  }

  handleCellChange(cell) {
    const { cells } = this.state
    cells[cell.id] = cell
    this.setState({ cells })
  }

  render() {
    const cellComponents = this.state.cells.map(cell => {
      return (
        <Cell
          key={cell.id}
          onCellChange={cell => this.handleCellChange(cell)}
          cell={cell}
        />
      )
    })
    return <div style={canvasStyle}>{cellComponents}</div>
  }
}
export default Bracket
