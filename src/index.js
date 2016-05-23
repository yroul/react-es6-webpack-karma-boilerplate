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


let store = createStore(Reducer);

var appProps = {
    store: store
};
let AppWrapper = React.createClass({
    render: function () {
        return (
            <App {...appProps} />
        );
    }
});

/*
React.render((
    <Router history={browserHistory}>
             <Route path="/" component={AppWrapper}/>
                <Route path="/about" component={About}>
                <Route path=":id" component={About}/>
            </Route>
     </Router>
),document.body)*/








//works !
/*ReactDOM.render((
 <Provider store = {store}>
 <Test />
 </Provider>
 ), document.getElementById('root'))*/



ReactDOM.render((
 <Provider store = {store}>
     <Router history={browserHistory}>
         <Route path="/" component={App}/>
         <Route path="/about" component={About}>
             <Route path=":id" component={About}/>
         </Route>
     </Router>
 </Provider>
 ), document.getElementById('root'))










