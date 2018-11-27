import React from 'react';

import { LevelUpButton } from 'components/common';

import './style.scss';

export default class QuizCard extends React.PureComponent{
  render(){

    const { image, onClick } = this.props;

    return (
      <div className="QuizCard animated bounceIn">
        <div className="image-block">
          <div className="img" style={{ backgroundImage: `url(${image})` }}/>
          <div className="hidden-block">
            <LevelUpButton onClick={onClick} variant="contained">Start Quiz</LevelUpButton>
          </div>
        </div>
      </div>
    )
  }
}
