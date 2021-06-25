import './app.css'

import React, { Component } from 'react'

export const body = {
  margin: 0,
  height: '100%',
  display: 'flex',
  justifyContent: 'center'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    Object.assign(document.body.style, body)
  }

  handleChange(state) {
    this.setState({ ...this.state, ...state })
  }

  render() {
    return <div>Hello World!!!</div>
  }
}
export default App
