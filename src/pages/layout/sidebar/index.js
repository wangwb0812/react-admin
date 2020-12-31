import React from 'react'
import { Menu } from 'antd';
import logoImg from '../../../imgs/logo.png'
import { connect } from 'react-redux'
import { collapsChange } from '../../../store/common/action'
import { PieChartOutlined } from '@ant-design/icons';
import { withRouter } from "react-router";
const { SubMenu } = Menu;
class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuList: [
        {
          name: 'TODO',
          path: '/todo'
        },
        {
          name: 'TODOLIST',
          path: '/todolist'
        },
        {
          name: 'HOOK',
          path: '/hookpage'
        },
        {
          name: 'DEMO',
          path: '/demo',
          children: [
            {
              name: 'REDUXDEMO',
              path: '/demo/redux'
            }
          ]
        }
      ],
      current: []
    }
  }

  menuItemClick(item) {
    this.props.history.push(item.key)
    this.setState({
      current: [item.key]
    });
  }
  
  componentDidUpdate() {
    const { pathname } = this.props.location
    if (this.state.current[0] !== pathname) {
      this.setState({
        current: [pathname]
      });
    }
  }

  componentDidMount() {
    const { pathname } = this.props.location
    this.setState({
      current: [pathname]
    })
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
          selectedKeys={this.state.current}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
          onClick={this.menuItemClick.bind(this)}
        >
          {
            this.state.menuList.map((item, index) => {
              if (item.children) {
                return (
                  <SubMenu key={item.path} icon={<PieChartOutlined />} title={item.name}>
                    {
                      item.children.map(item => {
                        return (
                          <Menu.Item key={item.path} icon={<PieChartOutlined />}>
                            {item.name}
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={item.path} icon={<PieChartOutlined />}>
                    {item.name}
                  </Menu.Item>
                )
              }

            })
          }
        </Menu>
      </div>
    );
  }
}

export default connect(state => state.common, { collapsChange })(withRouter(Sidebar)) 