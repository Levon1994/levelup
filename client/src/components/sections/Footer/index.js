import React, { PureComponent } from 'react';
import {
    withRouter,
    NavLink,
} from 'react-router-dom';

import Logo from 'assets/level-up-logo.png';


import './style.scss';

@withRouter
export default class Footer extends PureComponent{
    render(){
        return (
            <footer className="Footer flexible aCenter jBetween">
                <div className="logo flexible aCenter">
                    <NavLink to={`/${this.props.lang}`}>
                        <img src={Logo} alt="Level Up IT Center"/>
                    </NavLink>
                </div>
                <div className="footer-text">
                    ©2018 Level Up IT Center
                </div>
            </footer>
        )
    }
}
