import React from 'react';

import { MainImageBlock } from 'components/common';

import { selectLanguage } from 'translate';

import './style.scss';

export default class Quizzes extends React.PureComponent{
  render(){
    return (
      <section className="Quizzes withStretch flexible vertical">
        <MainImageBlock
            path="https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/level%20up%20cover%20700%20px.jpg?alt=media&token=a8c09644-d1d8-428a-841b-32e6c3d5fcff"
        />
        <div className="quizzes-content page-content">
            <h2 className="header-text">{selectLanguage(this.props.match.params.lang).quizzes_title} <div className="divider"/></h2>
            quizzes_title
        </div>
      </section>
    )
  }
}
