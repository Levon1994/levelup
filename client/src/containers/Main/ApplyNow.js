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
            applyForm: {},
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
            {this.coursesImages.map((item, index) => (
                <div
                    key={index}
                    style={{ backgroundImage: `url(${item.url})` }}
                    onClick={() => this.onChooseCourse(item.name)}
                    className={(this.state.courseIsChoosen && this.state.courseIsChoosen !== item.name) ? 'choosen' : ''}
                />
            ))}
        </div>
    );

    generateAdditionalFooterContent = () => (
        <LevelUpButton
            onClick={() => this.submitCourseRequest()}
            className={this.state.isValid ? '' : 'disabled'}
        >
            {selectLanguage(this.props.lang).apply}
        </LevelUpButton>
    );

    submitCourseRequest = () => {
        const courseApplyForm = {...this.state.applyForm};
        courseApplyForm.lang = this.props.lang;
    };

    onApplyFormChange = (applyForm) => this.setState({ applyForm });

    onResetApply = () => this.setState({ courseIsChoosen: null, applyForm: {} })

    render(){
        return ReactDOM.createPortal(
            <div className="ApplyNow">
                <div className="overlay" onClick={()=> this.props.onClose()} />
                <Icon name="close" onClick={()=> this.props.onClose()}/>
                <div className="apply-body animated bounceInDown flexible vertical jBetween">
                    <span>
                        {
                            this.state.courseIsChoosen ?
                                <Icon
                                    name="leftArrow"
                                    onClick={()=> this.onResetApply()}
                                />
                                : null
                        }
                        {selectLanguage(this.props.lang).apply_now}
                        </span>
                    { this.generateCoursesForApply() }
                    {
                        this.state.courseIsChoosen &&
                        <ValidatableForm
                            className=" ValidatableForm "
                            onChange={this.onApplyFormChange}
                            checkFormValidation={(isValid) => this.setState({ isValid })}
                            additionalFooterContent={this.generateAdditionalFooterContent()}
                        >
                            <FormsyText
                                required
                                name="name"
                                placeholder={selectLanguage(this.props.lang).apply_form_name}
                                validationError="Please enter a valid E-mail address"
                            />
                            <FormsyText
                                required
                                name="surname"
                                placeholder={selectLanguage(this.props.lang).apply_form_surname}
                                validationError="Please enter a valid E-mail address"
                            />
                            <FormsyText
                                required
                                type="number"
                                name="age"
                                placeholder={selectLanguage(this.props.lang).apply_form_age}
                                validationError="Please enter a valid E-mail address"
                            />
                            <FormsyText
                                required
                                name="email"
                                placeholder={selectLanguage(this.props.lang).apply_form_email}
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