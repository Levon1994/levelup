import React, { PureComponent } from 'react';
import {
    withRouter,
    NavLink,
} from 'react-router-dom';
import { connect } from "react-redux";

import { Icon, LevelUpButton } from 'components/common';

import { selectLanguage } from 'translate';

import { DEFAULT_USER_IMAGE } from 'configs';

import Logo from 'assets/level-up-logo.png';

import { toggleLogin } from 'actions';

import './style.scss';

const mapStateToProps = ({ user }) => ({ user });

@withRouter
@connect(mapStateToProps, { toggleLogin })
export default class Header extends PureComponent {

    state = {
        language: 'uk',
        isShadowShown : false,
        headerShown: false,
        isOpenMenu: false,
    };

    componentWillMount(){
        this.setState({ language: this.props.lang })
    }

    componentWillReceiveProps(nextProps){
        this.setState({ language: nextProps.lang })
    }

    onChangeLanguage = (language) => {
        const pathName = this.props.history.location.pathname.split('/');
        pathName.pop();
        const location = pathName.length > 1 ? (pathName.join('/') + '/' + language) : '/' + language;
        this.props.history.push(location);
        this.toggleHeader();
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        if(event.target.scrollingElement.scrollTop > 56) {
            this.setState({ isShadowShown: true })
        } else {
            this.setState({ isShadowShown: false })
        }
    };

    toggleHeader = (key) => {
        if(key === 'login') {
            this.props.toggleLogin(true);
        }
        this.setState({ headerShown: !this.state.headerShown });
    };

    // onToggleProfileMenu = () => this.setState({ isOpenMenu: !this.state.isOpenMenu });
    //
    // onSignOut = () => {
    //   window.localStorage.clear();
    //   this.forceUpdate();
    // };

    adminLogout = () => {
        window.localStorage.clear();
        window.location.reload();
    };

    generateAdminHeader = () => (
      window.localStorage.token ? <LevelUpButton onClick={()=> this.adminLogout()}>Log Out</LevelUpButton> : null
    );

    render() {
        const isAdmin = this.props.history.location.pathname.split('/').includes('admin');
        return (
            <header className={`Header ${this.state.headerShown ? 'headerShown' :''}`}>
                <nav className={`flexible jBetween ${this.state.isShadowShown ? 'isShadowShown' : ''}`}>
                    <div className="logo flexible aCenter">
                        <NavLink to={`/${isAdmin ? 'admin' : this.state.language}`}>
                            <div className="img" style={{ backgroundImage: `url(${Logo})` }}/>
                        </NavLink>
                    </div>
                    <div className="menu-wrapper" onClick={this.toggleHeader}>
                      <div className={`hamburger-menu ${this.state.headerShown ? 'animate' : ''}`}></div>
                    </div>
                    {
                        isAdmin
                            ? this.generateAdminHeader() :
                            <ul className="flexible aCenter">
                                {/*<li className="flexible aCenter">*/}
                                    {/*<NavLink to={`/cv/${this.state.language}`} activeClassName="active" onClick={this.toggleHeader}>{this.state.language && selectLanguage(this.state.language).cv_templates_title}</NavLink>*/}
                                {/*</li>*/}
                                <li className="flexible aCenter">
                                    <NavLink to={`/students/${this.state.language}`} onClick={this.toggleHeader}>{this.state.language && selectLanguage(this.state.language).header_students}</NavLink>
                                </li>
                                <li className="flexible aCenter">
                                    <NavLink to={`/courses/${this.state.language}`} onClick={this.toggleHeader}>{this.state.language && selectLanguage(this.state.language).header_courses}</NavLink>
                                </li>
                                <li className="flexible aCenter">
                                    <NavLink to={`/about/${this.state.language}`} onClick={this.toggleHeader}>{this.state.language && selectLanguage(this.state.language).header_about}</NavLink>
                                </li>
                                <li className="flexible aCenter">
                                    <NavLink to={`/contact-us/${this.state.language}`} onClick={this.toggleHeader}>{this.state.language && selectLanguage(this.state.language).header_contact_us}</NavLink>
                                </li>
                                {/*{*/}
                                  {/*window.localStorage.token ?*/}
                                  {/*<li>*/}
                                    {/*<div className="auth-dropdown">*/}
                                      {/*<div*/}
                                        {/*className="img"*/}
                                        {/*style={{ backgroundImage : `url(${DEFAULT_USER_IMAGE})` }}*/}
                                        {/*alt=""*/}
                                        {/*onClick={() => this.onToggleProfileMenu()}*/}
                                        {/*/>*/}
                                      {/*<div className={`profile-menu flexible vertical ${this.state.isOpenMenu ? 'isOpen' : ''}`}>*/}
                                        {/*<span>My Profile</span>*/}
                                        {/*<span onClick={()=> this.onSignOut()}>Sign Out</span>*/}
                                      {/*</div>*/}
                                    {/*</div>*/}
                                  {/*</li> :*/}
                                  {/*<li className="flexible aCenter">*/}
                                      {/*<a onClick={() => this.toggleHeader('login')}>{this.state.language && selectLanguage(this.state.language).header_login}</a>*/}
                                  {/*</li>*/}
                                {/*}*/}
                                <li className="languages flexible aCenter">
                                    <div className="lang-block flexible aStart">
                                        <Icon
                                            name="armenia"
                                            onClick={() => this.onChangeLanguage('am')}
                                            className={this.state.language === 'am' ? 'selected' : ''}
                                        />
                                        <Icon
                                            name="russia"
                                            onClick={() => this.onChangeLanguage('ru')}
                                            className={this.state.language === 'ru' ? 'selected' : ''}
                                        />
                                        <Icon
                                            name="uk"
                                            onClick={() => this.onChangeLanguage('uk')}
                                            className={this.state.language === 'uk' ? 'selected' : ''}
                                        />
                                    </div>
                                </li>
                            </ul>
                    }
                </nav>
            </header>
        );
    }
}
