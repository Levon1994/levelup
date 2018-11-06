import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import ScrollToTop from './ScrollToTop';

import store from 'stores';

import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
