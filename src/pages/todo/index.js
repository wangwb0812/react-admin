import React from 'react'
import './index.scss'
import { Card, List, Checkbox, Button } from 'antd';
import Add from './add'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        {
          text: '写代码',
          finish: true
        },
        {
          text: '看书',
          finish: false
        }
      ]
    }
  }
  addList(text) {
    if (text) {
      const obj = {
        text,
        finish: false
      }
      this.state.todoList.push(obj)
      this.setState({
        todoList: this.state.todoList
      })
    }
  }
  todeListChange(e, index) {
    const todoList = this.state.todoList
    todoList[index].finish = e.target.checked
    this.setState({
      todoList
    })
  }
  finishAll() {
    const todoList = this.state.todoList
    todoList.forEach(item => {
      item.finish = true
    })
    this.setState({
      todoList
    })
  }
  render() {
    return (<div className="todo-list-wrapper">
      <h1 className="todo-title">今日事，今日毕</h1>
      <Card title={<Add addList={this.addList.bind(this)} />} style={{ width: '100%' }}>
        <List
          dataSource={this.state.todoList}
          renderItem={(item, index) => <List.Item>
            <Checkbox checked={item.finish} onChange={e => this.todeListChange(e, index)}>{item.text}</Checkbox>
          </List.Item>}
        />
      </Card>
      <div className="todo-list-btn">
        <Button type="primary" onClick={this.finishAll.bind(this)}>全部完成</Button>
      </div>
    </div>)
  }
}
export default Todo