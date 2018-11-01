import React, { PureComponent } from 'react';

import { MainImageBlock, StudentCard } from 'components/common';
import { LevelUpSlider } from 'components/sections';

import Slider from 'react-slick';
import { selectLanguage } from 'translate';

import './style.scss';

export default class Students extends PureComponent{

    state = {
        isSliderOpen: false,
        key: null,
        arrow: null,
    };

    openSlider = (key) => {
        this.setState({ isSliderOpen: true, key }, () => {
            this.checkChevrons();
        });
    };

    checkChevrons = () => {
        if(this.state.key === 0) {
            this.setState({ arrow: 'prev' })
        } else if(this.state.key === this.studentsData.length - 1){
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

    contactUsImages = [
        'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33763722_10156415795532552_6450518945576255488_n.jpg?_nc_cat=0&oh=161292d08e8fbbf1abd1de60664d4e4c&oe=5C2B0914',
        'http://www.eliteplaza.am/wp-content/gallery/global-gallery/elite-plaza-2.jpg',
        'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33692021_10156415794522552_7456713990710755328_n.jpg?_nc_cat=0&oh=f1c9a2a9b2d7350cc4f0ec1fa1d05b97&oe=5C2ED421',
        'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33672892_10156415794512552_274701718795583488_n.jpg?_nc_cat=0&oh=95ea1602387b4539952374598a638d5a&oe=5C2A5181',
    ];

    generateStudentsImages = () => (
        this.contactUsImages.map((item, key) => (
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
        if(this.state.key < this.studentsData.length - 1) {
            this.setState({ key: key+1 })
        }
        if(this.state.key === this.studentsData.length - 2) {
            this.setState({ arrow: 'next' })
        } else {
            this.setState({ arrow: null })
        }
    };

    studentsData = [
        {
            name: 'Levon Azizyan',
            course: 'Web',
            imgUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/39585392_1935113263247213_3492294344247869440_n.jpg?_nc_cat=0&oh=0bf38bea245e52b1a44e815e8c0ed6b1&oe=5C04D15B',
        },
        {
            name: 'Levon Azizyan1',
            course: 'Web',
            imgUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/42813397_1989441697814369_6568079480437342208_n.jpg?_nc_cat=104&_nc_ht=scontent.fevn1-1.fna&oh=8950c04091a6894017e155fd94c44c13&oe=5C801AB2',
        },
        {
            name: 'Levon Azizyan2',
            course: 'Web',
            imgUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/39001882_1923449831080223_3349358146169602048_n.jpg?_nc_cat=110&_nc_ht=scontent.fevn1-1.fna&oh=24624f803e56137d87314db277db18a0&oe=5C3CF9F7',
        },
    ];

    generateStudents = () => (
        this.studentsData.map((student, key) => (
            <StudentCard
                openSlider={()=> this.openSlider(key)}
                url={student.imgUrl}
                course={student.course}
                name={student.name}
                key={key}
            />
        ))
    );

    render(){
        return(
            <div className="Students">
                <Slider {...this.settings}>
                    {this.generateStudentsImages()}
                </Slider>
                <div className="page-content students-content">
                    <h2 className="header-text">{selectLanguage(this.props.match.params.lang).header_students} <div className="divider"/></h2>
                    <div className="studetns-cards flexible jAround wrap">
                        {this.generateStudents()}
                        {
                            this.state.isSliderOpen &&
                            <LevelUpSlider
                                data={this.studentsData[this.state.key]}
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