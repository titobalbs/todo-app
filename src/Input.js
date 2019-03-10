import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="name"
          value={this.props.name}
          name="name"
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={this.props.description}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleClick}>Add Todo</button>
      </div>
    )
  }
}

export default Input
