import React from 'react';
import { connect } from 'react-redux';

import { MainImageBlock, CvCard } from 'components/common';

import { selectLanguage } from 'translate';

import { getUser } from 'actions/user-action';

import  Uploader  from 'components/sections/ValidatableForm/elements/Uploader';

import './style.scss';

const mapStateToProps = ({ user }) => ({ user });

@connect(mapStateToProps, {
    getUser,
})
export default class CvTemplates extends React.PureComponent{

    componentWillMount(){
        if(!(this.props.user && this.props.user.payload.auth)) {
            this.props.history.goBack();
        }
    }

  render(){
    return(
          <section className="CvTemplates withStretch flexible vertical">
            <MainImageBlock
                path="https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/level%20up%20cover%20700%20px.jpg?alt=media&token=a8c09644-d1d8-428a-841b-32e6c3d5fcff"
            />
            <div className="cv-templates-content page-content">
                <h2 className="header-text">{selectLanguage(this.props.match.params.lang).cv_templates_title} <div className="divider"/></h2>
                <CvCard/>
                <Uploader/>
            </div>
          </section>
    )
  }
}
