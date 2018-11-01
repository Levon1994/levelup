import React, { PureComponent } from 'react';

//import levelUp from 'assets/level-up.mp4';

import './style.scss';

export default class MainVideoBlock extends PureComponent{

    render(){

        return (
            <div  className="MainVideoBlock">
                <iframe
                    src={this.props.path}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="This is a unique title"
                ></iframe>
            </div>
        )
    }
}