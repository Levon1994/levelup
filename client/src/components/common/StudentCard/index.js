import React, { PureComponent } from 'react';

import { Icon } from 'components/common';

import './style.scss';

export default class StudentCard extends PureComponent {

    render(){
        return(
            <div className="StudentCard">
                <div className="image-block image-centering" style={{ backgroundImage: `url(${this.props.url})` }} >
                    <div className="hidden-block flexible" onClick={this.props.openSlider}>
                        <Icon name="zoom" color="#fff"/>
                    </div>
                </div>
                <div className="info-block flexible vertical aCenter">
                    <h3>{this.props.name}</h3>
                    <p className="course">{this.props.course.toUpperCase()}</p>
                </div>
            </div>
        )
    }
}