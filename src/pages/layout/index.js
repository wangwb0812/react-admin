import React from 'react'
import Navbar from './navbar/index'
import Appmain from './appmain/index'
import Sidebar from './sidebar/index'
import './index.scss'
import { connect } from 'react-redux'
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="app-wrapper" >
        <Sidebar />
        <div className={`main-container ${this.props.collapsed ? 'isCollapse' : ''}`}>
          <Navbar history={this.props.history} />
          <Appmain />
        </div>
      </div>
    )
  }
}

export default connect(state => state.common)(Layout)