import React from 'react';
import ReactDOM from 'react-dom';

import ValidatableForm, {
    FormsyText,
} from 'components/sections/ValidatableForm';

import Logo from 'assets/level-up-logo.png';

import {
    js,
    java,
    qa_automation,
    html_css,
} from 'assets/courses';

import { selectLanguage } from '../../translate';

import { Icon, LevelUpButton } from 'components/common';

const applyRoot = document.getElementById('slider_root');

export default class ApplyNow extends React.PureComponent{

    constructor(props){
        super(props);
        this.el = document.createElement('div');
        this.el.className = 'apply-content';

        this.state = {
            courseIsChoosen: null,
        }
    }

    componentDidMount(){
        applyRoot.appendChild(this.el);

    }

    componentWillUnmount() {
        applyRoot.removeChild(this.el);
    }

    coursesImages = [
        { url: html_css, name: 'html_css' },
        { url: js, name: 'js' },
        { url: java, name: 'java' },
        { url: qa_automation, name: 'qa_automation' }
    ];

    onChooseCourse = (course) => this.setState({ courseIsChoosen: course });

    generateCoursesForApply = () => (
        <div className="courses-for-apply">
            {this.coursesImages.map(item => (
                <div
                    style={{ backgroundImage: `url(${item.url})` }}
                    onClick={() => this.onChooseCourse(item.name)}
                    className={(this.state.courseIsChoosen && this.state.courseIsChoosen !== item.name) ? 'choosen' : ''}
                />
            ))}
        </div>
    );

    render(){
        return ReactDOM.createPortal(
            <div className="ApplyNow">
                <Icon name="close" onClick={()=> this.props.onClose()}/>
                <div className="apply-body animated bounceInDown flexible vertical jBetween">
                    <span>{selectLanguage(this.props.lang).apply_now}</span>
                    { this.generateCoursesForApply() }
                    {
                        this.state.courseIsChoosen &&
                        <ValidatableForm
                            className=" ValidatableForm "
                            onChange={this.onSignInChange}
                            onSubmit={this.onSignIn}
                            checkFormValidation={(isSignInValid) => this.setState({ isSignInValid })}
                        >
                            <FormsyText
                                required
                                name="name"
                                placeholder="Name"
                                validationError="Please enter a valid E-mail address"
                            />
                            <FormsyText
                                required
                                name="surname"
                                placeholder="Surname"
                                validationError="Please enter a valid E-mail address"
                            />
                            <FormsyText
                                required
                                name="email"
                                placeholder="Email"
                                validations="isEmail"
                                validationError="Please enter a valid E-mail address"
                            />
                        </ValidatableForm>
                    }
                    <div className="img" style={{ backgroundImage: `url(${Logo})` }}/>
                </div>
            </div>,
            this.el
        )
    }
}