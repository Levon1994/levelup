import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    withRouter,
    NavLink,
} from 'react-router-dom';

import { fetchTeamMembers } from 'actions/teamMembers-action.js';
import { fetchVideoCartoons } from 'actions/videoCartoon-action.js';

import { TeamMemberItem, MainVideoBlock, QuizCard, LevelUpButton }  from 'components/common';

import { selectLanguage } from 'translate';

import './Main.scss';

const mapStateToProps = ({ teamMembers, videoCartoons }) => ({ teamMembers, videoCartoons });

@withRouter
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

    quizzes = [
      {
        name: 'js',
        image: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/Js%20cover%20web.jpg?alt=media&token=3c7a8d26-f37d-4f6e-a7e0-11306e9f3e68'
      },
      {
        name: 'java',
        image: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/Java%20cover.jpg?alt=media&token=85522ec5-e2e7-4962-b997-64086dfba105',
      },
      {
        name: 'nodejs',
        image: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/nodejs.jpg?alt=media&token=fa2964ee-42aa-4e70-b065-e792cfba83ab',
      },
      {
        name: 'qaautomation',
        image: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/Qa%20automation%20cover.jpg?alt=media&token=55b5268a-626d-4897-8444-fadeaa12dce6',
      },
    ];

    onGoingQuiz = (quiz) => {
      this.props.history.push(`quzzies/${quiz}/${this.props.match.params.lang}`)
    }

    generateQuizzes = () => this.quizzes.map((quiz) => (
      <QuizCard
        name={quiz.name}
        image={quiz.image}
        key={quiz.name}
        onClick={() => this.onGoingQuiz(quiz.name)}
      />
    ))

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
                    <h2 className="header-text">{selectLanguage(this.props.match.params.lang).quizzes_title} <div className="divider"/></h2>
                    <div className="quzzies flexible jAround wrap">
                        {this.generateQuizzes()}
                    </div>
                    <NavLink to={`/quzzies/${this.props.match.params.lang}`}>
                      <LevelUpButton>See More Quzzies</LevelUpButton>
                    </NavLink>
                    <h2 className="header-text flexible vertical">{selectLanguage(this.props.match.params.lang).main_title} <div className="divider"/></h2>
                    <div className="members flexible jAround">
                        {this.generateTeamMembers()}
                    </div>
                </div>
            </section>
        );
    }
}
