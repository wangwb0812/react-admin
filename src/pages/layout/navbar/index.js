import React from 'react'
import { Avatar } from 'antd';
import { Menu, Dropdown } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom'
class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  handleMenuClick(e) {
    console.log('click', e, this);
    if (e.key === '0') {
      localStorage.removeItem('userInfo')
      this.props.history.push('/login')
    }
  }
  render() {
    const menu = (
      <Menu onClick={e => this.handleMenuClick(e)}>
        <Menu.Item key="0">
          <span>
            退出
          </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="navbar">
        <div className="right-menu">
          <Dropdown overlay={menu} trigger="click">
            <Avatar
              style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
              size={40}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
            />
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)