import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const { todo } = this.props
    return (
      <div>
        <div>
          <span>Name</span> <span>{todo.name}</span>
        </div>
        <div>
          <span>Description</span> <span>{todo.description}</span>
        </div>
        <button onClick={() => this.props.handleDelete(todo.id)}>Delete</button>
      </div>
    )
  }
}

export default Todo
