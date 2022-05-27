import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
  const submit = () => {
    console.log('submit')
  }
  return (
    <Form
    onFinish={submit}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[ rules.required('Пожалуйста введите имя пользователя!') ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[ rules.required('Пожалуйста введите пароль!') ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Авторизироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;