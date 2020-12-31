import React from 'react'
import { Menu } from 'antd';
import logoImg from '../../../imgs/logo.png'
import { connect } from 'react-redux'
import { collapsChange } from '../../../store/common/action'
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  menuItemClick(item, key, keyPath, domEvent) {
    console.log(item, key, keyPath, domEvent, this.props)
  }

  render() {
    return (
      <div className={`sidebar-container ${this.props.collapsed ? 'isCollapse' : ''}`}>
        <div className="muen-top" onClick={this.props.collapsChange}>
          <div className="muen-top-icon-wrapper">
            <img className="muen-top-icon" src={logoImg} alt="logo" />
          </div>
          <span className="muen-top-title">管理系统</span>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
          onClick={this.menuItemClick}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default connect(state => state.common, { collapsChange })(Sidebar) 