import React, { PureComponent } from 'react';

import { Icon }  from 'components/common';

import './style.scss';

export default class TeamMemberItem extends PureComponent{
    render(){
        const { imageUrl, name, position, facebook, linkedin, instagram,  aboutWork } = this.props;

        return (
            <div className="TeamMemberItem animated fadeInUp">
                <div className="team-member-item-block">
                    <div className="image-block" style={{ backgroundImage: `url(${imageUrl})` }}/>
                    <div className="text-block">
                        <h3>{name}</h3>
                        <p className="position">{position}</p>
                        <p className="aboutWork">{aboutWork}</p>
                        <div className="divider"/>
                        <div className="social flexible jAround aCenter">
                            {facebook && <a href={facebook} target="_blank"><Icon name="facebook"/></a>}
                            {linkedin && <a href={linkedin} target="_blank"><Icon name="linkedin"/></a>}
                            {instagram && <a href={instagram} target="_blank"><Icon name="instagram"/></a>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}