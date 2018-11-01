import React, { PureComponent } from 'react';

import { MainImageBlock } from 'components/common';

import { selectLanguage } from 'translate';

import './style.scss';


export default class AboutUs extends PureComponent{

    setData = () => (
        [
            {
                path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/C%2B%2B%20cover.jpg?alt=media&token=5e7aefc4-5a07-47e6-b4b0-141c5e70269a',
                value: selectLanguage(this.props.match.params.lang).about_level_up
            },
            {
                path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/Saas%20cover.jpg?alt=media&token=6879d0f3-da6e-4e43-8eb6-2e770d281364',
                value: selectLanguage(this.props.match.params.lang).about_level_up1
            },
            {
                path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/UI%20ux%20cover.jpg?alt=media&token=01b25374-171c-43e1-8d12-e135add3f860',
                value: selectLanguage(this.props.match.params.lang).about_level_up2
            },
        ]
    );

    generateAboutUsInfo = () => (
        this.setData().map((item, index) => (
            <div className={`about-Info-content flexible jAround aStart ${(index%2) ? 'reverse' : ''}`} key={index}>
                <div className="image-centering" style={{ backgroundImage: `url(${item.path})` }}/>
                <p>{item.value}</p>
            </div>
        ))
    );

    render(){
        return (
            <section className="AboutUs withStretch flexible vertical">
                <MainImageBlock
                    path="https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/level%20up%20cover%20700%20px.jpg?alt=media&token=a8c09644-d1d8-428a-841b-32e6c3d5fcff"
                />
                <div className="about-us-content page-content">
                    <h2 className="header-text">{selectLanguage(this.props.match.params.lang).about_title} <div className="divider"/></h2>
                    {this.generateAboutUsInfo()}
                </div>
            </section>
        )
    }
}