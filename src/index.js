import React from 'react';
import { Router, Route, Link,browserHistory, RouteHandler,DefaultRoute } from 'react-router';
import App from './App';
import About from './about/index.js';
import Repos from './repos/repos.js';
import Reducer from './reducer/index';
import { createStore } from 'redux'

import { Provider } from 'react-redux';

import { connect } from 'react-redux'

import EventBus from './event/EventBus'

import ReactDOM from 'react-dom';

import Test from './Test';

import {IntlProvider} from 'react-intl';





import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';


addLocaleData([...en, ...fr,...es]);








let store = createStore(Reducer);

let translationsForUsersLocale = {
    en: {
        GREETING: 'Hello {name}'
    },
    fr: {
        GREETING: 'Bonjour {name}'
    },
    es: {
        GREETING: 'Hola {name}'
    }
};

//It looks very difficult to allow "hot locale switching"
//Let's go with a easier way.
let language = localStorage['dev-locale'] || window.navigator.userLanguage || window.navigator.language;
let locale = language.split('-')[0];


/*globals DEBUG */
if(DEBUG){
    console.log('debug mode');
}
else
    console.log('PRODUCTION MODE');

ReactDOM.render((
    <IntlProvider locale={locale}  messages={translationsForUsersLocale[locale]}>
         <Provider store = {store}>
             <Router history={browserHistory}>
                 <Route path="/" component={App}/>
                 <Route path="/about" component={About}>
                     <Route path=":user" component={About}/>
                 </Route>
             </Router>
         </Provider>
    </IntlProvider>
 ), document.getElementById('root'));










