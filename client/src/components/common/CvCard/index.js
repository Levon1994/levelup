import React from 'react';

import { Icon } from 'components/common';

import './style.scss';

export default class CvCard extends React.PureComponent{
  render(){
    return(
          <div className="CvCard">
            <div className="image-block image-centering" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/SimpleCv.PNG?alt=media&token=eb671710-7e6e-4700-8d4d-9779bf7423c4)' }}/>
            <div className="cv-card-content flexible">
              <div className="create-cv flexible aCenter jBetween">
                  <Icon name="create"/>
                  <span>Create</span>
              </div>
              <div className="view-cv flexible aCenter jBetween">
                  <span>View</span>
                  <Icon name="view"/>
              </div>
            </div>
          </div>
    )
  }
}
