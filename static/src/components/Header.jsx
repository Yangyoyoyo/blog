import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu, Breadcrumb} from 'antd';

const {Header} = Layout;

export default class HeaderNav extends React.Component {

    render(){
        return (
            <Header className="header">
                <div className="logo">
                    <img width="100" height="50" src={require('./../images/timg.jpg')} />
                </div>
            </Header>

        )
    }
}
