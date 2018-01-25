import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

import LoginForm from './../components/Login';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class App extends React.Component {
    render () {
        return (
            <Layout>
                <Layout>
                    <LoginForm />
                </Layout>
            </Layout>
        )
    }
}
export default App;