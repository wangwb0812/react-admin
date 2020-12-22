import React from 'react'
import Navbar from './navbar/index'
import Appmain from './appmain/index'
import Sidebar from './sidebar/index'
import './index.scss'
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="app-wrapper">
        <Sidebar />
        <div className="main-container">
          <Navbar />
          <Appmain />
        </div>
      </div>
    )
  }
}

export default Layout