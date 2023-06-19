'use client'

import React from 'react'
import { Card, Form, Button, Input } from 'antd'

const LoginPage = () => {
  return (
    <div className="login-form pt-20">
      <Card title="Mimo管理后台">
        <Form
          labelCol={{ span: 3 }}
          onFinish={(v) => {
            console.log(v)
          }}>
          <Form.Item name="userName" label="用户名">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
