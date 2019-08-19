import React, { Component } from 'react'

export default class User extends Component {
  state = { present: true }

  toggle = () => {
    this.setState({
      present: !this.state.present
    })
  }

  render() {
    return (
      <div>User: <b>{ this.props.name }</b>
        <p> {this.props.name + " is "} <b>{ this.state.present ? 'present' : 'not present' }</b></p>

        <button onClick={this.toggle}>Toggle</button>
      </div>)
  }
}