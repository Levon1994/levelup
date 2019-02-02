import React from 'react';
import {
    withRouter,
    NavLink,
} from 'react-router-dom';

import './style.scss';

@withRouter
export default class AdminMain extends React.PureComponent{
    points = [
        { name: 'Students', key: 'students' },
        { name: 'Team Members', key: 'team-members' },
    ];

    generateCards = () => (
      this.points.map((item) => (
          <NavLink
              to={`admin/${item.key}`}
              className="point-card"
              key={item.key}
          >
              {item.name}
          </NavLink>
      ))
    );

    render(){
        return(
            <div className="AdminMain page-content flexible wrap row jCenter">
                { this.generateCards() }
            </div>
        )
    }
}