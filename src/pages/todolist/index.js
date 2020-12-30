import React from 'react'
import './index.scss'
import { Card, List, Checkbox, Button, Modal } from 'antd'
import { CloseOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import Add from './add'
import { connect } from 'react-redux'
import { toggleTodo, delTodo, finishAll, delAll } from '../../store/todo/action'

class Todo extends React.Component {
  del(item) {
    const that = this
    Modal.confirm({
      title: '删除',
      icon: <ExclamationCircleOutlined />,
      content: `确认要删除"${item.text}"，是否继续？`,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        that.props.delTodo(item.id)
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
  delAll() {
    const that = this
    Modal.confirm({
      title: '删除',
      icon: <ExclamationCircleOutlined />,
      content: `确认要清空所有数据，是否继续？`,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        that.props.delAll()
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
  render() {
    return (<div className="todo-list-wrapper">
      <h1 className="todo-title">今日事，今日毕</h1>
      <Card title={<Add />} style={{ width: '100%' }}>
        <List
          dataSource={this.props.todoList}
          renderItem={item => <List.Item key={item.id}>
            <Checkbox checked={item.finish} onChange={() => this.props.toggleTodo(item.id)}>{item.text}</Checkbox>
            <Button danger shape="circle" size="small" icon={<CloseOutlined />} onClick={this.del.bind(this, item)} />
          </List.Item>}
        />
      </Card>
      <div className="todo-list-btn">
        <Button type="primary" onClick={this.props.finishAll}>全部完成</Button>
        <Button type="danger" onClick={this.delAll.bind(this)}>清空所有</Button>
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