import React, { PureComponent } from 'react';

import './style.scss';

export default class MainImageBlock extends PureComponent{
    render(){
        return (
            <div className="MainImageBlock image-centering" style={{ backgroundImage: `url(${this.props.path})` }}/>
        )
    }
}