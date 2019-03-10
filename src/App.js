import React, { Component } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo, deleteTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'

import TodoList from './TodoList'
import Input from './Input'
import './App.css'

import config from './aws-exports'
// List todo
// Add todo
// Edit todo
// Delete todo

Amplify.configure(config)

class App extends Component {
  state = {
    name: '',
    description: '',
    todos: []
  }

  async componentDidMount() {
    const { data } = await API.graphql(graphqlOperation(listTodos))
    this.setState({ todos: data.listTodos.items })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = async () => {
    const { name, description } = this.state
    await API.graphql(
      graphqlOperation(createTodo, {
        input: {
          name,
          description
        }
      })
    )

    const { data } = await API.graphql(graphqlOperation(listTodos))
    this.setState({ name: '', description: '', todos: data.listTodos.items })
  }

  handleDelete = async id => {
    await API.graphql(
      graphqlOperation(deleteTodo, {
        input: {
          id
        }
      })
    )

    const { data } = await API.graphql(graphqlOperation(listTodos))
    this.setState({ todos: data.listTodos.items })
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete} />
        <Input
          name={this.state.name}
          description={this.state.description}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App
