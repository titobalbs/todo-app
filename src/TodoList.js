import React, { Component } from 'react'

import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
      <div>
        TodoList
        {this.props.todos.map(todo => {
          return <Todo todo={todo} handleDelete={this.props.handleDelete} />
        })}
      </div>
    )
  }
}

export default TodoList
