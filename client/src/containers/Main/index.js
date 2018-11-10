import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchTeamMembers } from 'actions/teamMembers-action.js';
import { fetchVideoCartoons } from 'actions/videoCartoon-action.js';

import { TeamMemberItem, MainVideoBlock }  from 'components/common';

import { selectLanguage } from 'translate';

import './Main.scss';

const mapStateToProps = ({ teamMembers, videoCartoons }) => ({ teamMembers, videoCartoons });

@connect(mapStateToProps, {
    fetchTeamMembers,
    fetchVideoCartoons,
})
export default class Main extends PureComponent {

    generateTeamMembers = () => (
        this.props.teamMembers && this.props.teamMembers.payload.data.map((member, index) => (
            <TeamMemberItem
                key={index}
                name={member.name}
                position={member.position}
                facebook={member.facebook}
                linkedin={member.linkedin}
                instagram={member.instagram}
                aboutWork={member.aboutWork}
                imageUrl={member.imageUrl}
            />
        ))
    );

    componentDidMount(){
        this.props.fetchTeamMembers();
        this.props.fetchVideoCartoons();
    }

    render() {
        return (
            <section className="Main withStretch vertical flexible">
                <MainVideoBlock
                    path={this.props.videoCartoons && this.props.videoCartoons.payload.data[this.props.match.params.lang]}
                    key={this.props.match.params.lang}
                />
                <div className="main-content flexible vertical grow page-content">
                    <h2 className="header-text flexible vertical">{selectLanguage(this.props.match.params.lang).main_title} <div className="divider"/></h2>
                    <div className="members flexible jAround">
                        {this.generateTeamMembers()}
                    </div>
                </div>
            </section>
        );
    }
}
