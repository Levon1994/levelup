import React from 'react';

import './style.scss';

export default class CvCard extends React.PureComponent{
  render(){
    return(
          <div className="CvCard">
            <div className="image-block image-centering" style={{ backgroundImage: 'url(http://camnangtienganh.vn/wp-content/uploads/2018/07/cv-bang-tieng-anh-1.jpg)' }}/>
            <div className="cv-card-content flexible aCenter">
              <div className="create-cv flexible vertical aCenter">
                <span>Create</span>
              </div>
              <div className="view-cv flexible vertical aCenter">
                <span>View</span>
              </div>
            </div>
          </div>
    )
  }
}
