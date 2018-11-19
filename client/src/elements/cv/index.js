import React from 'react';

import { MainImageBlock, CvCard } from 'components/common';

import { selectLanguage } from 'translate';

import './style.scss';

export default class CvTemplates extends React.PureComponent{
  render(){
    return(
          <section className="CvTemplates withStretch flexible vertical">
            <MainImageBlock
                path="https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/level%20up%20cover%20700%20px.jpg?alt=media&token=a8c09644-d1d8-428a-841b-32e6c3d5fcff"
            />
            <div className="cv-templates-content page-content">
                <h2 className="header-text">{selectLanguage(this.props.match.params.lang).cv_templates_title} <div className="divider"/></h2>
                <CvCard/>
            </div>
          </section>
    )
  }
}
