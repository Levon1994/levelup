import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import ScrollToTop from './ScrollToTop';

//import { detectPage } from './detectPage';

//import store from 'stores';

import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render((
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
