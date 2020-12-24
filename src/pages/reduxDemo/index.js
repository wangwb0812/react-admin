import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'

import { add, reduce } from '../../store/demo/action'

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.props.add}>+</Button>
        <Button type="dashed" onClick={this.props.reduce}>-</Button>
        <p>结果：{this.props.value}</p>
      </div>
    )
  }
}


export default connect(state => ({
  value: state.data.value
}), {
  add, 
  reduce
})(Demo);