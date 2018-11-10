import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import './style.scss';

export default class LevelUpButton extends Component{
    render(){
        return(
            <Button className="LevelUpButton" {...this.props}>{this.props.children}</Button>
        )
    }
}