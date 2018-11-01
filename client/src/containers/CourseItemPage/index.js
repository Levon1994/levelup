import React, { PureComponent } from 'react';

import { selectLanguage } from 'translate';

import { MainImageBlock, Icon } from 'components/common';

import descIcon from 'assets/desc-logo.png';

import './style.scss';

export default class CourseItemPage extends PureComponent{

    courseInfo = {
        html_css: {
            path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/html%20css%20cover%20wb.jpg?alt=media&token=85b62e9c-8203-4f1b-9c40-6a483b3a2fc4',
            description: [
                'HTML HOME',
                'HTML Introduction',
                'HTML Elements',
                'HTML Attributes',
                'HTML5 Intro',
                'HTML5 Support',
                'HTML SVG',
                'CSS HOME',
                'CSS Introduction',
                'CSS Syntax',
                'CSS Styles',
                'CSS Advanced',
                'CSS Responsive',
                'Flexbox',
                'Create Mockups',
            ],
            info: {
                duration: '1-2 months',
                effort: '6hours/week',
                price: '40.000 AMD/month',
            },
            trainerInfo: {
                name: 'Arman Ghazaryan',
                position: 'Software Engineer at EPAM System\n',
                path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/CTO.jpeg?alt=media&token=5983ea53-0887-42c6-a10c-70ed61e62671'
            }
        },
        node_js: {
            path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/nodejs.jpg?alt=media&token=fa2964ee-42aa-4e70-b065-e792cfba83ab',
            description: [
                'What does server mean?',
                'What is the role of server and server-side-scripts?',
                'DB, fs, web app',
                'About V8 engine, Node.js',
                'Node module system',
                'Npm (installing types)',
                'Core modules',
                'Caching, Location',
                'Node programming model',
                'Asynchronouns and Synchronouns programming',
                'Callback concepts and hell',
                'Events',
                'Event loop',
                'Sync vs Async tasks',
                'EventEmitter, event handler, listeners',
                'Timers and scheduling, intervals',
                'Command line interface',
                'Arguments(input, output), single events, user enviroment variables',
                'File System, Path, fs modules, Encoding types, flags',
                'Binary Data, Array buffers, Node buffers',
                'Executing code, child_proccess module',
                'Quiz',
            ],
            info: {
                duration: '3-4 months',
                effort: '6hours/week',
                price: '40.000 AMD/month',
            },
            trainerInfo: {
                name: 'Ruben Aprikyan',
                position: 'Software Engineer at Brainstorm Technologies',
                path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/nodejs-mentor.png?alt=media&token=56ce5a20-c29b-4847-a3de-fdbb165aefd9',
            }
        },
        js: {
            path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/Js%20cover%20web.jpg?alt=media&token=3c7a8d26-f37d-4f6e-a7e0-11306e9f3e68',
            description: [
                'Introduction to JavaScript (what is JavaScript)',
                'The basics of JavaScript (variables, data types, conditional construction, loops)',
                'Functional Programming (functions, recursive functions, hoisting, scope, closures)',
                'ES6, ES7, ES8',
                'Built-in Objects (Date, Math)',
                'Regular expressions (syntax, methods)',
                'Object-Oriented Programming (Objects, constructors, prototype, __proto__, encapsulation, inheritance, this keyword, methods bind, call, apply, Classes)',
                'Document Object Model (DOM, finding items, managing elements) ',
                'Browser Object Model (BOM, history, navigator, location, timers)',
                'Events (Event handlers, mouse and keyboard events)',
                'Working with forms (buttons, text fields, select list, flags and switches)',
                'AJAX (sending data, Promise, XMLHttpRequest)',
            ],
            info: {
                duration: '2-3 months',
                effort: '6hours/week',
                price: '40.000 AMD/month',
            },
            trainerInfo: {
                name: 'Arman Ghazaryan',
                position: 'Software Engineer at EPAM System\n',
                path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/CTO.jpeg?alt=media&token=5983ea53-0887-42c6-a10c-70ed61e62671'
            }
        },
        java: {
            path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/Java%20cover.jpg?alt=media&token=85522ec5-e2e7-4962-b997-64086dfba105',
            description: [
                'Java Core - Primitive types, functions, operators',
                'Java Core - OOP',
                'Java Core - Exceptions',
                'Java Core - Algorithms',
                'Java Core - Generics',
                'Java Core - Collections',
                'Java Core - Threads',
                'Java Core - IO',
                'Java Core - Lambda expressions, Streams',
                'DB - Mysql(basics)',
                'Java EE - Servlet',
                'Java EE - Jsp',
                'Java EE - Jstl ',
                'Spring - Boot',
                'Spring - MVC',
                'Spring - DATA',
                'Spring - Security',
                'Spring - REST',
                'Spring - Mailing ',
                'Tools - Maven',
                'Tools - Git',
            ],
            info: {
                duration: '5-6 months',
                effort: '6hours/week',
                price: '50.000 AMD/month',
            },
            trainerInfo: {
                name: 'Levon Aloyan',
                position: 'Software Engineer at EPAM System',
                path: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/17951854_1271342939652426_2607015650935029356_n.jpg?_nc_cat=0&oh=10a335eab5deea7fffc254ccfd10bcea&oe=5C29540B'
            }
        },
        php: {
            path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/Php%20cover.jpg?alt=media&token=e869b88e-60b9-41ad-a6a2-7332574b138a',
            description: [
                'Variables',
                'Constants',
                'Magic Constants',
                'DataTypes',
                'Operators',
                'If Else Statement',
                'Switch Statement',
                'For Loop',
                'While- Do While Loop',
                'Break & Continue Statement',
                'Functions',
                'PHP Parameterized Functions ',
                'Arrays',
                'Associative Array',
                'Multidimensional Array',
                'Sorting Array',
                'GET and POST',
                'Date And Time',
                'Include Files',
                'File Upload',
                'File Download',
                'Cookies',
                'Form handling',
                'Exception Handling',
                'Mysql Database - Introduction',
                'Mysql - Connection',
                'Mysql - Create Database',
                'Mysql - Create Table',
                'Mysql - Insert',
                'Mysql - Prepared',
                'Mysql - Select',
                'Mysql - Where,Limit, OrderBy,Update,Delete Clause',
                'Mysql - Ajax Search',
                'Mysql - Login System',
                'Creat a real project',
                'Interview Questions',
            ],
            info: {
                duration: '3 months',
                effort: '6hours/week',
                price: '40.000 AMD/month',
            },
            trainerInfo: {
                name: 'Lilit Tamrazyan',
                position: 'Web Developer at Academy Of Justice',
                path: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/39167114_1766206993434498_4654911329503543296_n.jpg?_nc_cat=0&oh=577fec387757d5362cc6dfd6f09f3090&oe=5C37A0A3'
            }
        },
        qa_automation: {
            path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/Qa%20automation%20cover.jpg?alt=media&token=55b5268a-626d-4897-8444-fadeaa12dce6',
            description: [
                'QA fundamentals - Who is QE? What is QA?',
                'QA fundamentals -Test types',
                'QA fundamentals -Test levels',
                'QA fundamentals -Processes',
                'QA fundamentals - Test Case',
                'QA fundamentals -Test Plan (IEEE/ISO)',
                'QA fundamentals - Bug tracking tool (JIRA)',
                'Java Core - Primitive types, functions, operators',
                'Java Core - OOP',
                'Java Core - Data structures',
                'Java Core - Annotations',
                'Java Core - Maven/Gradle',
                'Autmation - Unit testing (JUnit/TestNG, Mockito)',
                'Automation - HTML/CSS',
                'Automation - Selectors',
                'Automation - Selenium WebDriver API',
                'Automation - Design patterns (POM, PF),',
                'Automation - API testing',
                'Automation - Postman',
                'Automation - HTTP requests',
            ],
            info: {
                duration: '18 weeks',
                effort: '6hours/week',
                price: '50.000 AMD/month',
            },
            trainerInfo: {
                name: 'Karen Mkhitaryan',
                position: 'Software Test Automation Engineer at EPAM System',
                path: 'https://instagram.fevn1-1.fna.fbcdn.net/vp/1be8c0fa15ba0d7bad2058157f64ca0f/5C38426F/t51.2885-15/e35/28151246_220091888552110_3841051315090227200_n.jpg'
            }
        },
        php_laravel: {
            path: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/php%20laravel%20cover.jpg?alt=media&token=5c7c65b5-7db7-474d-a01a-14f3fb9fb37c',
            description: [
                'Introduction',
                'Composer and Laravel Install',
                'MVC , Application structure , Virtual Host',
                'Routing , Controller , Views ',
                'Database configurations , Migrations',
                'Forms , Requests , composer.json , Vendor , Registration/Login/Logout',
                'Blades , Middleware',
                'DB',
                'Models',
                'Files save',
                'Joins',
                'Cookies and Sessions',
                'Creat a real project',
            ],
            info: {
                duration: '1 months',
                effort: '6hours/week',
                price: '40.000 AMD/month',
            },
            trainerInfo: {
                name: 'Narek Melikyan',
                position: 'Software Engineer at Level Up IT Center',
                path: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/30652674_1683065338449717_4517274356564361216_n.jpg?_nc_cat=0&oh=4cb4d6c5514ea6fb8714e831093255bd&oe=5C32DD7C'
            }
        },
    };

    generateCourseDescription  = () => (
        this.courseInfo[this.props.match.params.courseName].description.map((desc, index) => (
            <div className="desc-line flexible aStart animated fadeInRight" key={index}>
                <span className="image-centering" style={{ backgroundImage: `url(${descIcon})` }}/>
                {desc}
            </div>
        ))
    );

    generateCourseInfo = () => {
        const courseInfo = this.courseInfo[this.props.match.params.courseName].info;
        return Object.keys(courseInfo).map((course, key) => (
            <div className="info flexible aCenter" key={key}>
                <Icon
                    name={course}
                />
                <span>{course} : </span>
                <p>{courseInfo[course]}</p>
            </div>
        ));
    };

    generateTrainerInfo = () => {
        const trainerInfo = this.courseInfo[this.props.match.params.courseName].trainerInfo;

        return <div className="trainer-info flexible vertical aCenter">
                    <div className="image-block">
                        <div className="img image-centering" style={{ backgroundImage: `url(${trainerInfo.path})` }}/>
                    </div>
                    <div className="name">{trainerInfo.name}</div>
                    <div className="position">{trainerInfo.position}</div>
                </div>
    };

    render(){
        if(!Object.keys(this.courseInfo).includes(this.props.match.params.courseName)) {
            this.props.history.push('/am');
            return null;
        } else {
            return (
                <div className="CourseItemPage withStretch flexible vertical">
                    <MainImageBlock
                        path={this.courseInfo[this.props.match.params.courseName].path}
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
