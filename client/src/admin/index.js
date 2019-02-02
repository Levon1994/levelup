import React from 'react';
import { connect } from "react-redux";
import {
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';

import ValidatableForm, {
    FormsyText,
} from 'components/sections/ValidatableForm';

import { authorizeUser, getUser } from 'actions/user-action';

import { LevelUpButton } from 'components/common';

import AdminMain from './AdminMain';

import './style.scss';
import AdminTeamMembers from "./AdminTeamMembers";
import AdminStudents from "./AdminStudents";

const mapStateToProps = ({ user }) => ({ user });

@withRouter
@connect(mapStateToProps, {authorizeUser, getUser})
export default class Admin extends React.PureComponent{

    state = {
        isSignInValid: false,
        isLoading: false,
    };

    componentWillMount() {
        if(window.localStorage.length) {
            this.setState({ isLoading: true });
            this.props.getUser({ token: window.localStorage.token }).then((data) => {
                data && this.setState({ isLoading: false })
            })
        } else {
            this.props.history.push('/admin')
        }
    }

    generateAdditionalFooterContent = () => (
        <div className="flexible grow jCenter aCenter login-footer">
            <LevelUpButton
                onClick={() => this.onSignIn()}
                onKeyUp={() => this.onSignIn()}
                variant="contained"
                disabled={!this.state.isSignInValid}
                color="primary">
                Sign In
            </LevelUpButton>
        </div>
    );


    onSignIn() {
        this.setState({ isLoading: true });
        this.props.authorizeUser(this.state.userSignInInfo).then((data) =>{
            if(data) {
                this.setState({ isLoading: false });
                window.localStorage.setItem("token", data.payload.token);
                this.forceUpdate();
            }
        });
    }

    onSignInChange = (userSignInInfo) => this.setState({ userSignInInfo });

    generateAdminMAinPage = () => {
      if(this.state.isLoading) {
          return <div className="Spinner"/>
      } else if (window.localStorage.token && this.props.user && this.props.user.payload.auth) {
          return <Switch>
                      <Route exact path="/admin" component={AdminMain} />
                      <Route path="/admin/team-members" component={AdminTeamMembers}/>
                      <Route path="/admin/students" component={AdminStudents}/>
                  </Switch>
      } else {
          return (
              <div className="signInAdmin">
                  <h1 className="header-text">Welcome to Level Up Admin page</h1>
                  <ValidatableForm
                      className=" ValidatableForm "
                      onChange={this.onSignInChange}
                      additionalFooterContent={this.generateAdditionalFooterContent()}
                      checkFormValidation={(isSignInValid) => this.setState({ isSignInValid })}
                  >
                      <FormsyText
                          required
                          name="email"
                          placeholder="Email"
                          validations="isEmail"
                          validationError="Please enter a valid E-mail address"
                      />
                      <FormsyText
                          required
                          type="password"
                          name="password"
                          placeholder="Password"
                          validations="minLength:6"
                          validationError="Please fill, minimum length should be 6"
                      />
                  </ValidatableForm>
              </div>
          )
      }
    };


    render(){
        return(
            <div className="Admin">
                { this.generateAdminMAinPage() }
            </div>
        )
    }
}