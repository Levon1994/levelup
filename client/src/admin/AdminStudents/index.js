import React from 'react';
import {connect} from "react-redux";

import { LevelUpButton, StudentCard }  from 'components/common';

import {
    fetchStudents,
    addStudents,
    updateStudents,
    deleteStudents,
} from "actions/students-action.js";

import EditForm from './EditForm';

import './style.scss';


const mapStateToProps = ({ students }) => ({ students });

@connect(mapStateToProps, {
    fetchStudents,
    addStudents,
    updateStudents,
    deleteStudents,
})
export default class AdminStudents extends React.PureComponent{

    state = {
        isOpenEditForm : false,
        isChoosen: null,
    };

    toggleEditForm = (event) => this.setState({
        isOpenEditForm: !this.state.isOpenEditForm,
        event,
        isChoosen: event === 'add' ? null : this.state.isChoosen,
    });

    componentDidMount(){
        this.props.fetchStudents();
    }

    onChooseStudent = (student) => {
        this.setState({ isChoosen: student._id, student: student })
    }

    generateStudents = () => (
        this.props.students && this.props.students.payload.data.map((student) => (
            <StudentCard
                key={student._id}
                url={student.imgUrl}
                course={student.course}
                name={student.name}
                onClick={() => this.onChooseStudent(student)}
                className={student._id === this.state.isChoosen ? 'selected' : ''}
            />
        ))
    );

    onEditFormChange = (student) => {
        this.setState({  student })
    };

    onDeleteStudent = () => {
        this.props.deleteStudents(this.state.isChoosen).then((data) => {
            data && this.setState({ isChoosen: null })
        });
    };

    onUpdateStudent = () => {
        this.setState({ isOpenEditForm: false });
        if(this.state.event === 'edit') {
            this.props.updateStudents(this.state.isChoosen, this.state.student).then((data) => {
                data && this.setState({ isChoosen: null })
            });
        } else {
            this.props.addStudents(this.state.student);
        }
    };

    render(){
        return(
            <div className="AdminStudents page-content flexible vertical aCenter grow">
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
                        onClick={() => this.onDeleteStudent()}
                    >Delete</LevelUpButton>
                </div>
                { this.state.isOpenEditForm ? <div className="add-edit-form flexible vertical aCenter">
                    <LevelUpButton
                        color="primary"
                        variant="contained"
                        onClick={()=> this.toggleEditForm()}
                        style={{ margin: '15px' }}
                    >
                        Close {this.state.event} Form
                    </LevelUpButton>
                    <EditForm
                        data={this.state.student}
                        onEditFormChange={this.onEditFormChange}
                        onUpdateMember={this.onUpdateStudent}
                        event={this.state.event}
                    />
                </div> : null }
                <h2 className="header-text flexible vertical">View Students<div className="divider"/></h2>
                <div className="flexible row wrap jAround">
                    {this.generateStudents()}
                </div>
            </div>
        )
    }
}