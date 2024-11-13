import { Card, Button, Form, Input } from 'antd'
import type { FormProps } from 'antd';
import loginStyle from './index.module.scss'
import { useNavigate } from 'react-router-dom'

type FieldType = {
    username?: string
    password?: string
}

const Login: React.FC = () => {
    const navigate = useNavigate()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values)
        localStorage.setItem('token', '123')
        navigate('/')
    }
    
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className={loginStyle.login}>
            <Card className={loginStyle['login-content']}>
                <div className={loginStyle['login-text']}>登录</div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    labelCol={{ span: 5 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login