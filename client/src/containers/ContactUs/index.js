import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { MainImageBlock, Icon } from 'components/common';

import { fetchContacts } from 'actions/contacts-action.js';

import { selectLanguage } from 'translate';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Slider from 'react-slick';

import './style.scss';

const mapStateToProps = ({contacts}) => ({contacts})

@connect(mapStateToProps, {fetchContacts})
class ContactUs extends PureComponent{

    settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    componentDidMount(){
        this.props.fetchContacts();
    }

    generateContacUsImages = () => (
        this.props.contacts && this.props.contacts.payload.data.map((item, key) => (
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
