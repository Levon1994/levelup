import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { MainImageBlock, StudentCard } from 'components/common';
import { LevelUpSlider } from 'components/sections';

import { fetchStudents } from "actions/students-action.js";

//import TextField from 'components/sections/ValidatableForm/elements/TextField';

import Slider from 'react-slick';
import { selectLanguage } from 'translate';

import './style.scss';

const mapStateToProps = ({students}) => ({students});

@connect(mapStateToProps, {fetchStudents})
export default class Students extends PureComponent{

    state = {
        isSliderOpen: false,
        key: null,
        arrow: null,
        studentsFilter: null,
    };

    students = [
        'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/IMG-2439.JPG?alt=media&token=56b2d964-ff1b-4ccf-8dfd-fe13c79c2ed0',
    ];

    componentDidMount(){
        this.props.fetchStudents();
    }

    openSlider = (key) => {
        this.setState({ isSliderOpen: true, key }, () => {
            this.checkChevrons();
        });
    };

    checkChevrons = () => {
        if(this.state.key === 0) {
            this.setState({ arrow: 'prev' })
        } else if(this.state.key === this.props.students.payload.data.length - 1){
            this.setState({ arrow: 'next' })
        }
        else {
            this.setState({ arrow: null })
        }
    };

    onClose = () => this.setState({ isSliderOpen: false });

    settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
    };

    generateStudentsImages = () => (
        this.students && this.students.map((item, key) => (
            <MainImageBlock
                key={key}
                path={item}
            />
        ))
    );

    prevSlide = (key) => {
        if(this.state.key > 0 ){
            this.setState({ key: key-1 })
        }
        if(this.state.key === 1) {
            this.setState({ arrow: 'prev' })
        } else {
            this.setState({ arrow: null })
        }
    };

    nextSlide = (key) => {
        if(this.state.key < this.props.students.payload.data.length - 1) {
            this.setState({ key: key+1 })
        }
        if(this.state.key === this.props.students.payload.data.length - 2) {
            this.setState({ arrow: 'next' })
        } else {
            this.setState({ arrow: null })
        }
    };

    generateStudents = () => (
        this.props.students && this.filterData(this.props.students.payload.data).map((student, key) => (
            <StudentCard
                openSlider={()=> this.openSlider(key)}
                url={student.imgUrl}
                course={student.course}
                name={student.name}
                key={key}
            />
        ))
    );

    filterData = (data) => {
        const filteredData = this.state.studentsFilter ? data.filter(item => item.name.toLowerCase().includes(this.state.studentsFilter.toLowerCase())): data;
        return filteredData || [];
    };

    onChange = (event) => this.setState({ studentsFilter: event.target.value })

    render(){
        return(
            <div className="Students">
                <Slider {...this.settings}>
                    {this.generateStudentsImages()}
                </Slider>
                <div className="page-content students-content">
                    <h2 className="header-text">
                        {selectLanguage(this.props.match.params.lang).header_students}
                        <div className="divider"/>
                    </h2>
                    {/*<TextField*/}
                        {/*type="text"*/}
                        {/*placeholder={selectLanguage(this.props.match.params.lang).search}*/}
                        {/*value={this.state.studentsFilter || ''}*/}
                        {/*onChange={this.onChange}*/}
                    {/*/>*/}
                    <div className="studetns-cards flexible jAround wrap">
                        {this.generateStudents()}
                        {
                            this.state.isSliderOpen &&
                            <LevelUpSlider
                                data={this.props.students && this.props.students.payload.data[this.state.key]}
                                onClose={this.onClose}
                                nextSlide={this.nextSlide}
                                prevSlide={this.prevSlide}
                                slideKey={this.state.key}
                                arrow={this.state.arrow}
                                key={this.state.arrow}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}