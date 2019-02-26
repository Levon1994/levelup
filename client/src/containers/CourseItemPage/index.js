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

    state = {
     data: null
    };

    courses = ['html_css','js','node_js','qa_automation','java'];

    componentDidMount(){
        if(this.courses.includes(this.props.match.params.courseName)) {
            this.props.fetchCourseInfo(this.props.match.params.courseName).then((res) => {
                res && this.setState({ data: res.payload.data[0] })
            });
        }
    }

    generateCourseDescription  = () => (
        this.state.data && this.state.data.description.map((desc, index) => (
            <div className="desc-line flexible aStart animated fadeInRight" key={index}>
                <span className="image-centering" style={{ backgroundImage: `url(${descIcon})` }}/>
                {desc}
            </div>
        ))
    );

    generateCourseInfo = () => {
        const courseInfo = this.state.data && this.state.data.info;
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

    generateTrainerInfo = () => (
        this.state.data && this.state.data.trainerInfo.map((item) => (
            <div className="trainer-info flexible vertical aCenter" key={item._id}>
                <div className="image-block">
                    <div className="img image-centering" style={{ backgroundImage: `url(${item.path})` }}/>
                </div>
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
            </div>
        ))
);

    render(){
        console.log("Log ::: this.state.data.name.includes(this.props.match.params.courseName) ::: ", this.state.data && this.state.data.name.includes(this.props.match.params.courseName));
        if(!this.courses.includes(this.props.match.params.courseName)) {
            this.props.history.push('/am');
            return null;
        } else {
            return (
                <div className="CourseItemPage withStretch flexible vertical">
                    <MainImageBlock
                        path={this.state.data && this.state.data.path}
                    />
                    <div className="courses-item-content page-content">
                        <h2 className="header-text">{selectLanguage(this.props.match.params.lang).course_item_trainer} <div className="divider"/></h2>
                        <div className="flexible jCenter wrap">
                            {this.generateTrainerInfo()}
                        </div>
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
