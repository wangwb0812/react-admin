import React from 'react'
import { Form, Input, Button } from 'antd';
import './index.scss'
import { login } from '../../api/user'
import { connect } from 'react-redux'
import { setUserInfo } from '../../store/common/action'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  onFinish(values) {
    console.log('Success:', values);
    this.setState({
      loading: true
    })
    login(values).then(res => {
      this.setState({
        loading: false
      })
      console.log(this.props)
      this.props.setUserInfo(res)
      localStorage.setItem('userInfo', JSON.stringify(res))
      this.props.history.push('/todo')
    }).catch(err => {
      this.setState({
        loading: false
      })
    })
  };

  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-form-wrapper">
          <h1 className="login-title">
            用户登录
          </h1>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish.bind(this)}
            onFinishFailed={this.onFinishFailed.bind(this)}
          >
            <Form.Item
              label=""
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            >
              <Input placeholder="用户名" />
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item>
              <Button className="login-btn" type="primary" loading={this.state.loading} htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }

};

export default connect( state=> state.common, {setUserInfo})(Login)