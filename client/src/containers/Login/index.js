import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import { toggleLogin } from 'actions';

import { Icon } from 'components/common';

import './style.scss';

const loginRoot = document.getElementById('login_root');

@connect(null, {toggleLogin})
export default class Login extends PureComponent{

    constructor(props){
        super(props);
        this.el = document.createElement('div');
        this.el.className = 'login-content';
    }

    componentDidMount(){
        loginRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        loginRoot.removeChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(
            <div className="Login">
                <Icon name="close" onClick={()=> this.props.toggleLogin(false)}/>
            </div>,
            this.el,
        )
    }
}