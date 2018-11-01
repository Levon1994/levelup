import React, { PureComponent } from 'react';

import { MainImageBlock, Icon } from 'components/common';

import { selectLanguage } from 'translate';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Slider from 'react-slick';

import './style.scss';

class ContactUs extends PureComponent{

    contactUsImages = [
        'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33763722_10156415795532552_6450518945576255488_n.jpg?_nc_cat=0&oh=161292d08e8fbbf1abd1de60664d4e4c&oe=5C2B0914',
        'http://www.eliteplaza.am/wp-content/gallery/global-gallery/elite-plaza-2.jpg',
        'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33692021_10156415794522552_7456713990710755328_n.jpg?_nc_cat=0&oh=f1c9a2a9b2d7350cc4f0ec1fa1d05b97&oe=5C2ED421',
        'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33672892_10156415794512552_274701718795583488_n.jpg?_nc_cat=0&oh=95ea1602387b4539952374598a638d5a&oe=5C2A5181',
    ];

    settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    generateContacUsImages = () => (
        this.contactUsImages.map((item, key) => (
            <MainImageBlock
                key={key}
                path={item}
            />
        ))
    );

    render(){
        return (
            <section className="ContactUs withStretch flexible vertical">
                <Slider {...this.settings}>
                    {this.generateContacUsImages()}
                </Slider>
                <div className="contact-us-content page-content">
                    <h2 className="header-text">{selectLanguage(this.props.match.params.lang).contact_title} <div className="divider"/></h2>
                    <div className="contacts-info">
                        <div className="loaction-icon-block flexible aEnd jCenter">
                            <Icon name="location"/>
                        </div>
                        <div className="contact-info-block flexible vertical jBetween">
                            <h2>{selectLanguage(this.props.match.params.lang).contact_address}</h2>
                            <div className="info-icons flexible jAround">
                                <div className="message-icon in-ico flexible vertical aCenter">
                                    <div><span>{selectLanguage(this.props.match.params.lang).contact_email}:</span> leveluparmenia@gmail.com</div>
                                    <Icon name="mail"/>
                                </div>
                                <div className="phone-icon in-ico flexible vertical aCenter">
                                    <div><span>{selectLanguage(this.props.match.params.lang).contact_phone}:</span> +374 (99) 91 36 90</div>
                                    <Icon name="phone"/>
                                </div>
                                <div className="site-icon in-ico flexible vertical aCenter">
                                    <div><span>{selectLanguage(this.props.match.params.lang).contact_website}:</span> levelup.am</div>
                                    <Icon name="website"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="google-map">
                    <Map
                        google={this.props.google}
                        zoom={15}
                        initialCenter={{
                            lat: 40.175103,
                            lng: 44.510011
                        }}
                    >
                        <Marker name={'Current location'} />
                    </Map>
                </div>
            </section>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCWVQYXw3-0uPgC7OKp87AxvolgGSMgzb8')
})(ContactUs)
