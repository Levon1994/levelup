import React from 'react';
import { connect } from 'react-redux';

import {
    fetchTeamMembers,
    updateTeamMembers,
    addTeamMembers,
    deleteTeamMembers,
} from 'actions/teamMembers-action.js';

import { TeamMemberItem, LevelUpButton }  from 'components/common';
import EditForm from './EditForm';

import './style.scss';

const mapStateToProps = ({ teamMembers }) => ({ teamMembers });

@connect(mapStateToProps, {
    fetchTeamMembers,
    updateTeamMembers,
    addTeamMembers,
    deleteTeamMembers,
})
export default class AdminTeamMembers extends React.PureComponent{

    state = {
        isChoosen: null,
        isOpenEditForm: false,
        member: null,
    };

    componentDidMount(){
        this.props.fetchTeamMembers();
    }

    onChooseTeamMember = (member) => {
        this.setState({ isChoosen: member._id, member: member })
    };

    generateTeamMembers = () => {
        return this.props.teamMembers && this.props.teamMembers.payload.data.map((member, index) => (
            <TeamMemberItem
                key={index}
                name={member.name}
                position={member.position}
                facebook={member.facebook}
                linkedin={member.linkedin}
                instagram={member.instagram}
                aboutWork={member.aboutWork}
                imageUrl={member.imageUrl}
                onClick={() => this.onChooseTeamMember(member)}
                className={member._id === this.state.isChoosen ? 'selected' : ''}
            />
        ))
    };

    toggleEditForm = (event) => this.setState({
        isOpenEditForm: !this.state.isOpenEditForm,
        event,
        isChoosen: event === 'add' ? null : this.state.isChoosen,
    });

    onEditFormChange = (member) => {
        this.setState({  member })
    };


    onUpdateMember = () => {
        this.setState({ isOpenEditForm: false });
        if(this.state.event === 'edit') {
            this.props.updateTeamMembers(this.state.isChoosen, this.state.member).then((data) => {
                data && this.setState({ isChoosen: null })
            });;
        } else {
            this.props.addTeamMembers(this.state.member);
        }
    };

    onDeleteTeamMember = () => {
        this.props.deleteTeamMembers(this.state.isChoosen).then((data) => {
            data && this.setState({ isChoosen: null })
        });
    };


    render(){
        return(
            <div className="AdminTeamMembers page-content flexible vertical aCenter grow">
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
                        data={this.state.member}
                        onEditFormChange={this.onEditFormChange}
                        onUpdateMember={this.onUpdateMember}
                        event={this.state.event}
                    />
                </div> : null }
                <h2 className="header-text flexible vertical">View Team Members<div className="divider"/></h2>
                <div className="flexible row wrap jAround">
                    {this.generateTeamMembers()}
                </div>
            </div>
        )
    }
}