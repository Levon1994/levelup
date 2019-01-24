import React, { PureComponent } from 'react';

import { MainImageBlock, CourseItem } from 'components/common';

import { selectLanguage } from 'translate';

import {
    js,
    java,
    qa_automation,
    html_css,
    node_js,
} from 'assets/courses';

import './style.scss';

export default class Courses extends PureComponent{

    courses = [
        { name: 'html_css', path: html_css },
        { name: 'js', path: js },
        { name: 'java', path: java },
        { name: 'qa_automation', path: qa_automation },
        { name: 'node_js', path: node_js },
    ];

    onMoveToCourse = (name) => this.props.history.push(`/courses/${name}/${this.props.match.params.lang}`);

    generateCourses = () => (
        this.courses.map((course, index) => (
            <CourseItem
                key={index}
                name={course.name}
                path={course.path}
                onClick={()=> this.onMoveToCourse(course.name)}
            />
        ))
    );

    render(){
        return (
            <section className="Courses withStretch flexible vertical">
                <MainImageBlock
                    path="https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/level%20up%20cover%20700%20px.jpg?alt=media&token=a8c09644-d1d8-428a-841b-32e6c3d5fcff"
                />
                <div className="courses-content page-content">
                    <h2 className="header-text">{this.props.match.params.lang && selectLanguage(this.props.match.params.lang).courses_title} <div className="divider"/></h2>
                    <div className="courses-block flexible jAround">
                        {this.generateCourses()}
                    </div>
                </div>
            </section>
        )
    }
}