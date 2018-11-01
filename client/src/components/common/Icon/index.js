import React, { Component } from 'react';

import { Icons } from './icon';


export default class Icon extends Component{
    render(){
        return(
            <span className={`Icon ${this.props.className || '' }`} onClick={this.props.onClick} style={this.props.style}>
                { this.props.name ? Icons[this.props.name](this.props.width, this.props.height) : '' }
            </span>
        )
    }
}