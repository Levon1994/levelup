import React, { PureComponent } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from "react-redux";

import {
    Header,
    Footer,
} from 'components/sections';

import {
    Main,
    AboutUs,
    ContactUs,
    Courses,
    CourseItemPage,
    Students,
    Login,
    Quizzes,
} from 'containers';

import { getUserAuth } from 'actions/user-action';

import './App.scss';
import './media.scss';

const mapStateToProps = ({logged}) => ({logged})

@withRouter
@connect(mapStateToProps, { getUserAuth })
export default class App extends PureComponent {

    componentWillMount(){
        if(this.props.location.pathname.split('/').length > 2) {
            this.props.history.push(this.props.location.pathname)
        } else {
            this.props.history.push('/uk');
        }
    };

    generateRoutes = () => (
            <Switch>
                <Route
                    exact
                    path="/:lang"
                    component={Main}
                />
                <Route exact path="/about/:lang" component={AboutUs} />
                <Route exact path="/quzzies/:quiz?/:lang" component={Quizzes} />
                <Route exact path="/contact-us/:lang" component={ContactUs} />
                <Route exact path="/students/:lang" component={Students} />
                <Route exact path="/courses/:lang" component={Courses} />
                <Route exact path="/courses/:courseName/:lang" component={CourseItemPage} />
            </Switch>
    );

    render() {
        return (
            <article>
                <Header lang={this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]} />
                {this.props.logged && <Login/>}
                {this.generateRoutes()}
                <Footer lang={this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]}/>
            </article>
        );
    }
}
