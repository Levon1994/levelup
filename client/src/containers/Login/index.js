import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import ValidatableForm, {
    FormsyText,
} from 'components/sections/ValidatableForm';

import { toggleLogin } from 'actions';

import { Icon, LevelUpButton } from 'components/common';

import './style.scss';

const loginRoot = document.getElementById('login_root');

@connect(null, {toggleLogin})
export default class Login extends PureComponent{

    constructor(props){
        super(props);
        this.el = document.createElement('div');
        this.el.className = 'login-content';

        this.state = {
            isValid: false,
            userInfo: null,
        }
    }

    componentDidMount(){
        loginRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        loginRoot.removeChild(this.el);
    }

    generateAdditionalFooterContent = () => {
      if(true) {
          return <LevelUpButton onClick={() => this.onSubmit()} variant="contained" color="primary">Sign In</LevelUpButton>
      }
    };

    onChange = (userInfo) => {
        if(this.state.isValid){
            this.setState({ userInfo })
        }
    };

    onSubmit = () => {
        if(this.state.isValid){
            console.log(this.state.userInfo)
        }
    };

    render(){
        return ReactDOM.createPortal(
            <div className="Login">
                <Icon name="close" onClick={()=> this.props.toggleLogin(false)}/>
                <ValidatableForm
                    className="bounceInDown ValidatableForm animated image-centering"
                    additionalFooterContent={this.generateAdditionalFooterContent()}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    checkFormValidation={(isValid) => this.setState({ isValid })}
                >
                    <FormsyText
                        required
                        name="username"
                        placeholder="Email"
                        validations="isEmail"
                        validationError="Please enter a valid E-mail address"
                    />
                    <FormsyText
                        required
                        name="password"
                        placeholder="Password"
                        validations="minLength:8"
                        validationError="Please fill, minimum length should be 8"
                    />
                </ValidatableForm>
            </div>,
            this.el,
        )
    }
}