import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { Icon } from 'components/common';

import './style.scss';

const sliderRoot = document.getElementById('slider_root');

export default class LevelUpSlider extends PureComponent{

    constructor(props){
        super(props);
        this.el = document.createElement('div');
        this.el.className = 'slider-content';
    }

    componentDidMount(){
        sliderRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        sliderRoot.removeChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(
            <div className="LevelUpSlider flexible jBetween">
                <div className="flexible jBetween grow">
                    <div className="prev flexible aCenter jCenter">
                        <Icon
                            name="chevronLeft"
                            onClick={()=> this.props.prevSlide(this.props.slideKey)}
                            className={this.props.arrow === 'prev' ? 'hidden' :''}
                        />
                    </div>
                    <div className="content">
                        <div
                            className="image-block image-centering"
                            style={{ backgroundImage: `url(${this.props.data.imgUrl})` }}>
                            <div className="hidden-block">
                                <h3>{this.props.data.name}</h3>
                                <p className="course">{this.props.data.course}</p>
                            </div>
                        </div>
                    </div>
                    <div className="next flexible aCenter jCenter">
                        <Icon
                            name="chevronLeft"
                            onClick={()=> this.props.nextSlide(this.props.slideKey)}
                            className={this.props.arrow === 'next' ? 'hidden' :''}
                        />
                    </div>
                </div>
                <Icon name="close" onClick={this.props.onClose}/>
            </div>,
            this.el,
        )
    }
}
