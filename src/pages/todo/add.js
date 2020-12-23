import React from 'react'
import { Input, Button } from 'antd';

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoVal: ''
    }
  }
  add(e) {
    this.props.addList(this.state.todoVal)
    this.setState({ todoVal: '' })
  }
  inputChange(event) {
    this.setState({ todoVal: event.target.value })
  }
  render() {
    return (<div className="todo-list-nav">
      <Input allowClear placeholder="to do something" value={this.state.todoVal} onChange={this.inputChange.bind(this)} />
      <Button type="primary" onClick={e => this.add(e)}>TODO</Button>
    </div>)
  }
}

export default Add