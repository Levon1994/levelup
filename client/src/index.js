import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import ScrollToTop from './ScrollToTop';

import store from 'stores';

import registerServiceWorker from 'registerServiceWorker';

console.log('%c Hi My Dear, Welcome to Level Up Console! ', 'color: #5c2be3; font-size: 30px; font-weight: bold; text-align: center; text-shadow: 2px 2px 4px #000000',);
console.log('%c       ', 'font-size: 150px; background: url(https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/level%20up%20cover%20700%20px.jpg?alt=media&token=a8c09644-d1d8-428a-841b-32e6c3d5fcff) no-repeat; background-size: 50%; background-position: center center; margin-bottom: 20px');

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
