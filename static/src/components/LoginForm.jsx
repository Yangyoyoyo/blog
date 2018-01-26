import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Icon, Input, Button, Checkbox, Row} from 'antd';
import App from "../apps/admin";
import styles from '../css/login.less';

const FormItem = Form.Item;

class LoginForm extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        console.log(styles);
        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入你的用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入你的密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox style={{color:'#fff'}} >记住我</Checkbox>
                        )}
                    </FormItem>
                    <FormItem className='loginBtn'>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;