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
            isSignInValid: false,
            isSignUpValid: true,
            userSignInInfo: null,
            userSignUpInfo: null,
            isLoginContent: true,
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
            <div className={`flexible grow jBetween aCenter login-footer ${this.state.isLoginContent ? '' : 'reverse'}`}>
              <LevelUpButton onClick={() => this.onSignUp()} color="primary" disabled={!this.state.isSignUpValid && !this.state.isLoginContent}>Sign Up</LevelUpButton>
              <LevelUpButton onClick={() => this.onSignIn()} variant="contained" disabled={!this.state.isSignInValid && this.state.isLoginContent} color="primary">Sign In</LevelUpButton>
            </div>
          )
      }
    };

    onSignInChange = (userSignInInfo) => {
        if(this.state.isSignInValid){
            this.setState({ userSignInInfo })
        }
    };

    onSignUpChange = (userSignUpInfo) => {
        if(this.state.isSignUpValid){
            this.setState({ userSignUpInfo })
        }
    };

    onSignIn = () => {
      if(!this.state.isLoginContent) {
        this.setState({ isLoginContent: true, userSignUpInfo: null })
      } else {
        console.log(this.state.userSignInInfo);
      }
    };

    onSignUp = () => {
      if(this.state.isLoginContent) {
        this.setState({ isLoginContent: false, userSignInInfo: null })
      } else {
        console.log(this.state.userSignUpInfo);
      }
    };

    generateForm = () => (
      this.state.isLoginContent ?
      <ValidatableForm
          className=" ValidatableForm "
          additionalFooterContent={this.generateAdditionalFooterContent()}
          onChange={this.onSignInChange}
          onSubmit={this.onSignIn}
          checkFormValidation={(isSignInValid) => this.setState({ isSignInValid })}
      >
          <FormsyText
              required
              name="username"
              placeholder="Email"
              validations="isEmail"
              validationError="Please enter a valid E-mail address"
              value={this.state.userSignInInfo ? this.state.userSignInInfo.username : ''}
          />
          <FormsyText
              required
              name="password"
              placeholder="Password"
              validations="minLength:8"
              validationError="Please fill, minimum length should be 8"
              value={this.state.userSignInInfo ? this.state.userSignInInfo.password : ''}
          />
      </ValidatableForm>:
      <ValidatableForm
          className=" ValidatableForm "
          additionalFooterContent={this.generateAdditionalFooterContent()}
          onChange={this.onSignUpChange}
          onSubmit={this.onSignUp}
          checkFormValidation={(isSignUpValid) => this.setState({ isSignUpValid })}
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
          <FormsyText
              required
              name="repeated_password"
              placeholder="Confirm Password"
              validations="equalsField:password"
              validationError="Please write same password"
          />
      </ValidatableForm>
    )

    render(){
        return ReactDOM.createPortal(
            <div className="Login">
                <Icon name="close" onClick={()=> this.props.toggleLogin(false)}/>
                <div className="login-body animated bounceInDown flexible vertical jBetween">
                  <div className="social-login flexible vertical grow aCenter jCenter">
                    <span>Sign {this.state.isLoginContent ? 'In' : 'Up'} with</span>
                    <div className="flexible">
                      <Icon name="facebook" width={40} height={40}/>
                      <Icon name="gmail" width={45} height={45}/>
                    </div>
                  </div>
                  <div className="divider"/>
                  { this.generateForm() }
                  <div className="img" style={{ backgroundImage: `url(${Logo})` }}/>
                </div>
            </div>,
            this.el,
        )
    }
}
