import React from 'react';
import { connect } from 'react-redux';

import { fetchCourseInfo } from 'actions/courseInfo-action.js';

import { LevelUpButton, CourseItem }  from 'components/common';

import EditForm from './EditForm';

import {
    js,
    java,
    qa_automation,
    html_css,
    node_js,
} from 'assets/courses';

import './style.scss';

const mapStateToProps = ({courseInfo}) => ({courseInfo})

@connect(mapStateToProps, {fetchCourseInfo})
export default class AdminCourses extends React.PureComponent{

    state = {
        isChoosen: false,
        isOpenEditForm: false,
        event: null,
        selectedCourse: null,
    };

    courses = [
        { name: 'html_css', path: html_css },
        { name: 'js', path: js },
        { name: 'java', path: java },
        { name: 'qa_automation', path: qa_automation },
        { name: 'node_js', path: node_js },
    ];

    getCourse = (course) => {
        this.props.fetchCourseInfo(course).then((data)=>{
            data && this.setState({ selectedCourse: data.payload.data[0] })
        });
        this.setState({ isChoosen: course })
    };

    generateCourses = () => (
        this.courses.map((course, index) => (
            <CourseItem
                key={index}
                name={course.name}
                path={course.path}
                className={course.name === this.state.isChoosen ? 'selected' : ''}
                onClick={()=> this.getCourse(course.name)}
            />
        ))
    );

    getDescriptions = (data) => {
        const arr = [];
        Object.keys(data).forEach((item) => {
            if(item.includes('desc')) {
                arr.push(data[item])
            }
        });
        return arr;
    };
    
    getTrainerInfo = (data) => {
        const arr = [];
        Object.keys(data).forEach((item) =>{
            if(item.includes('trainer.name') || item.includes('trainer.path') || item.includes('trainer.position')) {
                console.log("Log ::: 002 ::: ", item);

            }
        });
    };

    onEditFormChange = (e) => {
        this.setState({
            selectedCourse: {
                description: this.getDescriptions(e),
                name: e.name,
                path: e.path,
                info: {
                    duration: e.duration,
                    effort: e.effort,
                    price: e.price,
                },
                trainerInfo: []
            }
        })
        this.getTrainerInfo(e);
    };

    onUpdateCourse = () => {

    };

    onDeleteTeamMember = () => {

    };

    toggleEditForm = event => this.setState({
        isOpenEditForm: !this.state.isOpenEditForm,
        event: event ? event : null,
        isChoosen: event === 'add' ? null : this.state.isChoosen,
    });


    render(){
        return (
            <div className="AdminCourses page-content flexible vertical aCenter grow">
                <div className="team-members-buttons flexible jCenter">
                    <LevelUpButton
                        color="primary"
                        variant="contained"
                        onClick={()=> this.toggleEditForm('add')}
                    >ADD</LevelUpButton>
                    <LevelUpButton
                        color="primary"
                        variant="contained"
                        disabled={!this.state.isChoosen}
                        onClick={()=> this.toggleEditForm('edit')}
                    >Edit
                    </LevelUpButton>
                    <LevelUpButton
                        color="secondary"
                        variant="contained"
                        disabled={!this.state.isChoosen}
                        onClick={() => this.onDeleteTeamMember()}
                    >Delete</LevelUpButton>
                </div>
                { this.state.isOpenEditForm ? <div className="add-edit-form grow flexible vertical aCenter">
                    <LevelUpButton
                        color="primary"
                        variant="contained"
                        onClick={()=> this.toggleEditForm()}
                        style={{ margin: '15px' }}
                    >
                        Close {this.state.event} Form
                    </LevelUpButton>
                    <EditForm
                        data={this.props.courseInfo}
                        onEditFormChange={this.onEditFormChange}
                        onUpdateMember={this.onUpdateCourse}
                        event={this.state.event}
                    />
                </div> : null }
                <h2 className="header-text flexible vertical">View Courses<div className="divider"/></h2>
                <div className="flexible jAround wrap">
                    {this.generateCourses()}
                </div>
            </div>
        )
    }
}