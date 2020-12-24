import React from 'react'
import { Input, Button } from 'antd';
import { connect } from 'react-redux'
import { addTodo } from '../../store/todo/action'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoVal: ''
    }
  }
  add() {
    if(this.state.todoVal) {
      this.props.addTodo(this.state.todoVal)
      this.setState({
        todoVal: ''
      })
    }
  }
  inputChange(event) {
    this.setState({ todoVal: event.target.value })
  }
  render() {
    return (<div className="todo-list-nav">
      <Input allowClear placeholder="to do something" value={this.state.todoVal} onChange={this.inputChange.bind(this)} />
      <Button type="primary" onClick={this.add.bind(this)}>TODO</Button>
    </div>)
  }
}

export default connect(state => state, {
  addTodo
})(Add);