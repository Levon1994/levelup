import React, { PureComponent } from 'react';

import './style.scss';

export default class CourseItem extends PureComponent{
    render() {
        return (
            <div
                className={`CourseItem image-centering animated fadeInUp ${this.props.className || ''}`}
                style={{ backgroundImage: `url()` }}
                onClick={this.props.onClick}
            >
                <img src={this.props.path} alt={this.props.name}/>
            </div>
        )
    }
}