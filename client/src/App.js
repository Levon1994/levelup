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
} from 'containers';

//import {CvTemplates} from 'elements';

import Admin from './admin';

import './App.scss';
import './media.scss';

const mapStateToProps = ({logged}) => ({logged})

@withRouter
@connect(mapStateToProps, null)
export default class App extends PureComponent {

    componentWillMount(){
        if(this.props.location.pathname.split('/').length > 2) {
            this.props.history.push(this.props.location.pathname)
        } else if (this.props.location.pathname.split('/').includes('admin')){
            this.props.history.push('/admin');
        } else {
            this.props.history.push('/uk');
        }
    };

    generateRoutes = () => (
        this.props.location.pathname.split('/').includes('admin') ?
        <Admin/> :
        <Switch>
            <Route
                exact
                path="/:lang"
                component={Main}
            />
            <Route path="/about/:lang" component={AboutUs} />
            {/*<Route path="/resume/:lang" component={CvTemplates} />*/}
            <Route path="/contact-us/:lang" component={ContactUs} />
            <Route path="/students/:lang" component={Students} />
            <Route exact path="/courses/:lang" component={Courses} />
            <Route path="/courses/:courseName/:lang" component={CourseItemPage} />
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
