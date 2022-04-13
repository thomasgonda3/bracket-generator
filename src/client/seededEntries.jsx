import React, { Component } from 'react'
import './inputFields.css'
import App from './app.jsx'




class SeededEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrants: []
    };

   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
    
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //split entries by newline in to state 
    this.state.value=this.state.value.split(/\r?\n/);
    { console.log(this.state.value)}
    
  }

  render() {
    return (
      
      <form  onSubmit={this.handleSubmit}>
        <label>
        
          <textarea placeholder='Please enter one entry per line, ordered by seed, best to worst' className="textarea"  value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        
        
      </form>
      
      
      
      
    );
  }
}
export default SeededEntries