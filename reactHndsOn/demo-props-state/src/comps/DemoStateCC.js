import React, { Component } from 'react'

export default class DemoStateCC extends Component {

  constructor (props){
    super(props);
    this.state = {
        name : "Hrishi Mahure",
        email: "hrishi@gmail.com",
        collegename :"SGBAU"
    }
  } 
  
  changeState = ()=>{
    this.setState({
        name : "Ankit Dixit",
        email: "ankit@gmail.com",
        collegename : "DU"
    })
  }
  render() {
    return (
      <div>
        <p>Name :{this.state.name}</p>
        <p>Email : {this.state.email}</p>
        <p>College Name : {this.state.collegename}</p>
        <button onClick={this.changeState}>Change Info</button>
      </div>
    )
  }
}
