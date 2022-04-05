import './app.css'

import React, { Component } from 'react'

import Bracket from './components/bracket.jsx'

const body = {
  margin: 0
}

const root = {
  backgroundColor: '#F5F5F5',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entrants: ['df', 'sdf', 'das']
    }
  }

  componentDidMount() {
    Object.assign(document.body.style, body)
    Object.assign(document.getElementById('root').style, root)
  }

  handleChange(state) {
    this.setState({ ...this.state, ...state })
  }

  render() {
    return <Bracket entrants={this.state.entrants} />
  }
}
export default App
