import React from 'react'
import './index.scss'
import { Card, List, Checkbox, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import Add from './add'
import { connect } from 'react-redux'
import { toggleTodo, delTodo, finishAll, delAll } from '../../store/todo/action'

class Todo extends React.Component {
  componentDidMount() {
    console.log(process.env, this.props, "ppp")
  }
  render() {
    return (<div className="todo-list-wrapper">
      <h1 className="todo-title">今日事，今日毕</h1>
      <Card title={<Add />} style={{ width: '100%' }}>
        <List
          dataSource={this.props.todoList}
          renderItem={item => <List.Item key={item.id}>
            <Checkbox checked={item.finish} onChange={() => this.props.toggleTodo(item.id)}>{item.text}</Checkbox>
            <Button danger shape="circle" size="small" icon={<CloseOutlined />} onClick={() => this.props.delTodo(item.id)} />
          </List.Item>}
        />
      </Card>
      <div className="todo-list-btn">
        <Button type="primary" onClick={this.props.finishAll}>全部完成</Button>
        <Button type="danger" onClick={this.props.delAll}>清空所有</Button>
      </div>
    </div>)
  }
}


export default connect(state => ({
  todoList: state.todes
}), {
  toggleTodo,
  delTodo,
  finishAll,
  delAll
})(Todo);