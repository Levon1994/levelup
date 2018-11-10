import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { selectLanguage } from 'translate';

import { fetchCourseInfo } from 'actions/courseInfo-action.js';

import { MainImageBlock, Icon } from 'components/common';

import descIcon from 'assets/desc-logo.png';

import './style.scss';

const mapStateToProps = ({courseInfo}) => ({courseInfo})

@connect(mapStateToProps, {fetchCourseInfo})
export default class CourseItemPage extends PureComponent{

    componentDidMount(){
        this.props.fetchCourseInfo();
    }

    generateCourseDescription  = () => (
        this.props.courseInfo && this.props.courseInfo.payload.data[this.props.match.params.courseName].description.map((desc, index) => (
            <div className="desc-line flexible aStart animated fadeInRight" key={index}>
                <span className="image-centering" style={{ backgroundImage: `url(${descIcon})` }}/>
                {desc}
            </div>
        ))
    );

    generateCourseInfo = () => {
        const courseInfo = this.props.courseInfo && this.props.courseInfo.payload.data[this.props.match.params.courseName].info;
        if(courseInfo){
            return Object.keys(courseInfo).map((course, key) => (
                <div className="info flexible aCenter" key={key}>
                    <Icon
                        name={course}
                    />
                    <span>{course} : </span>
                    <p>{courseInfo[course]}</p>
                </div>
            ));
        }
    };

    generateTrainerInfo = () => {
        const trainerInfo = this.props.courseInfo && this.props.courseInfo.payload.data[this.props.match.params.courseName].trainerInfo;

        if(trainerInfo){
            return <div className="trainer-info flexible vertical aCenter">
                <div className="image-block">
                    <div className="img image-centering" style={{ backgroundImage: `url(${trainerInfo.path})` }}/>
                </div>
                <div className="name">{trainerInfo.name}</div>
                <div className="position">{trainerInfo.position}</div>
            </div>
        }
    };

    render(){
        if(this.props.courseInfo && !Object.keys(this.props.courseInfo.payload.data).includes(this.props.match.params.courseName)) {
            this.props.history.push('/am');
            return null;
        } else {
            return (
                <div className="CourseItemPage withStretch flexible vertical">
                    <MainImageBlock
                        path={this.props.courseInfo && this.props.courseInfo.payload.data[this.props.match.params.courseName].path}
                    />
                    <div className="courses-item-content page-content">
                        <h2 className="header-text">{selectLanguage(this.props.match.params.lang).course_item_trainer} <div className="divider"/></h2>
                        {this.generateTrainerInfo()}
                        <h2 className="header-text">{selectLanguage(this.props.match.params.lang).course_item_description}  <div className="divider"/></h2>
                        <div className="course-item-content-block flexible vertical">
                            {this.generateCourseDescription()}
                        </div>
                        <h2 className="header-text">{selectLanguage(this.props.match.params.lang).course_item_duration_price}<div className="divider"/></h2>
                        <div className="course-info-block flexible vertical">
                            {this.generateCourseInfo()}
                        </div>
                    </div>
                </div>
            )
        }
    }
}
