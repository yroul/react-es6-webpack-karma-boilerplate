import React, {Component} from 'react';

import EventBus from '../event/EventBus'
export default React.createClass({

    componentDidMount() {
        console.log('About component mount !');
    },
    getInitialProps(){
        return {
            params:{
                id:""
            }
        };
    },
    getInitialState(){
        console.log("getInitialState");
        return {};
    },
    render() {
        console.log(this)
        return (
            <div>
                <h1>About page</h1>
            {this.state.id ? this.state.id : ''}
            </div>
        );
    }
});
