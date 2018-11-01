import React from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
export default class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if(prevProps.location.pathname !== this.props.location.pathname) {
            window.scrollTo(0,0);
        }
    }

    render() {
        return this.props.children;
    }
}
