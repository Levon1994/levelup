import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import ValidatableForm, {
    FormsyText,
} from 'components/sections/ValidatableForm';

import { toggleLogin } from 'actions';

import Logo from 'assets/level-up-logo.png';

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
          return (
            <div className="flexible grow jBetween aCenter login-footer">
              <LevelUpButton onClick={() => this.onSubmit()} color="primary">Sign Up</LevelUpButton>
              <LevelUpButton onClick={() => this.onSubmit()} variant="contained" disabled={!this.state.isValid} color="primary">Sign In</LevelUpButton>
            </div>
          )
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
                <div className="login-body animated bounceInDown flexible vertical jBetween">
                  <div className="social-login flexible vertical grow aCenter jCenter">
                    <span>Sign In with</span>
                    <div className="flexible">
                      <Icon name="facebook" width={40} height={40}/>
                      <Icon name="gmail" width={45} height={45}/>
                    </div>
                  </div>
                  <div className="divider"/>
                  <ValidatableForm
                      className=" ValidatableForm "
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
                  <div className="img" style={{ backgroundImage: `url(${Logo})` }}/>
                </div>
            </div>,
            this.el,
        )
    }
}
