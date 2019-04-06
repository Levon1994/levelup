import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ValidatableForm, {
    FormsyText,
} from 'components/sections/ValidatableForm';

import Logo from 'assets/level-up-logo.png';

import {addApplyer} from 'actions/apply-form';

import {
    js,
    java,
    qa_automation,
    node_js,
    html_css,
    react_redux,
    qa_manual,
    angular,
} from 'assets/courses';

import {
    js_main,
    java_main,
    qa_automation_main,
    node_js_main,
} from '../../assets/coursesMain';

import { selectLanguage } from '../../translate';

import { Icon, LevelUpButton } from 'components/common';

const applyRoot = document.getElementById('slider_root');

const mapStateToProps = ({applyers}) => ({applyers});

@connect(mapStateToProps, {addApplyer})
export default class ApplyNow extends React.PureComponent{

    constructor(props){
        super(props);
        this.el = document.createElement('div');
        this.el.className = 'apply-content';

        this.state = {
            courseIsChoosen: null,
            applyForm: {},
            isLoading: false,
            sended: false,
        }
    }

    componentDidMount(){
        applyRoot.appendChild(this.el);

    }

    componentWillUnmount() {
        applyRoot.removeChild(this.el);
    }

    coursesImages = [
        { url: html_css, name: 'html_css', fulName: 'Web Design' },
        { url: js, name: 'js', fulName: 'Javascript' },
       { url: react_redux, name: 'react_redux_logo', fulName: 'React, Redux' },
       { url: angular, name: 'angular', fulName: 'Angular' },
        { url: node_js, name: 'nodejs', fulName: 'Node JS' },
        { url: java, name: 'java', fulName: 'Java'  },
        { url: qa_automation, name: 'qa_automation', fulName: 'QA Automation'  },
       { url: qa_manual, name: 'qa_manual', fulName: 'QA Manual'  },
    ];

    onChooseCourse = (course) => this.setState({ courseIsChoosen: course });

    generateCoursesForApply = () => (
        <div className="courses-for-apply">
            {this.coursesImages.map((item, index) => (
                <div onClick={() => this.onChooseCourse(item.name)}
                    className={(this.state.courseIsChoosen && this.state.courseIsChoosen !== item.name) ? 'choosen' : ''}
                    key={index}
                    >
                    <div style={{ backgroundImage: `url(${item.url})` }}></div>
                    <h3>{item.fulName}</h3>
                </div>
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
        courseApplyForm.course = this.state.courseIsChoosen;
        this.setState({ isLoading: true})
        this.props.addApplyer(courseApplyForm).then((data) => {
            data && this.setState({ isLoading: !data.payload.send, sended: data.payload.send })
        });
    };

    onApplyFormChange = (applyForm) => this.setState({ applyForm });

    onResetApply = () => this.setState({ courseIsChoosen: null, applyForm: {} });

    courseImages = {
        java:java_main ,
        js: js_main,
        qa_automation: qa_automation_main,
        nodejs: node_js_main,
    };

    generateContent = () => {
        if(this.state.isLoading){
          return (
              <div className="flexible vertical jBetween grow">
                  <div className="loader">
                      <div className="image-block animate fadeInDown" style={{ backgroundImage: `url(${this.courseImages[this.state.courseIsChoosen]})` }}/>
                      <div className="loader-spiner"/>
                  </div>
                  <div className="img" style={{ backgroundImage: `url(${Logo})` }}/>
              </div>
          )
      } else if(this.state.sended){
          return (
              <div className="flexible vertical jBetween grow">
                  <div className="congrats flexible vertical aCenter">
                      <h3>Congratulations</h3>
                      <Icon name="checked" />
                      <p>Your application has been send. Please check your email address.</p>
                  </div>
                  <div className="img" style={{ backgroundImage: `url(${Logo})` }}/>
              </div>
          )
      } else {
          return (
              <div className="flexible vertical jBetween grow withForm">
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
                          />
                          <FormsyText
                              required
                              type="number"
                              name="age"
                              placeholder={selectLanguage(this.props.lang).apply_form_age}
                          />
                          <FormsyText
                              required
                              name="email"
                              placeholder={selectLanguage(this.props.lang).apply_form_email}
                              validations="isEmail"
                              validationError="Please enter a valid E-mail address"
                          />
                          <FormsyText
                              required
                              type="number"
                              name="phone"
                              placeholder={selectLanguage(this.props.lang).apply_form_phone}
                          />
                      </ValidatableForm>
                  }
                  <div className="img" style={{ backgroundImage: `url(${Logo})` }}/>
              </div>
          )
      }
    };

    render(){
        return ReactDOM.createPortal(
            <div className="ApplyNow">
                <div className="overlay" onClick={()=> this.props.onClose()} />
                <Icon name="close" onClick={()=> this.props.onClose()}/>
                <div className="apply-body animated bounceInDown flexible">
                    {this.generateContent()}
                </div>
            </div>,
            this.el
        )
    }
}