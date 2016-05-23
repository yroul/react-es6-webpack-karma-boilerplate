import React, {Component} from 'react';
import { Link } from 'react-router';
import List from './list';

import EventBus from './event/EventBus'


import { connect } from 'react-redux'

class App extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object,
    }

    constructor(props) {
        super(props);

        this.state = {
            value : ""
        }

        //because this.props.mySuperDispatchMethod is ugly
        this.dispatchInstrumentAction = this.props.mySuperDispatchMethod;


    }



    componentDidMount() {
        console.log('App component mount !');


        EventBus.subscribe('INSTRUMENT_ADDED', function (ev) {
            console.log('instrument added');
            console.log(this.props.instruments)
        }, this)
    }



    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addInstrument(ev) {
        if (this.state.value.length > 0) {
            console.log('add instrument');
            /*this.props.store.dispatch({
                type: "ADD_INSTRUMENT",
                name: this.state.value
            });*/
            this.dispatchInstrumentAction({
                type: "ADD_INSTRUMENT",
                name: this.state.value
            });
            this.setState({value: ""});
        }
    }

    render() {
        //console.log(this.getInitialState());
        return (
            // Add your component markup and other subcomponent references here.
            <div>
                <h1>Hello, World Yoa n!</h1>
                <h1> Response of life: {this.props.myCustomState || this.state.myCustomState}</h1>
                <br/>
                <Link to="/about">/about</Link>
                <br/>
                <input type="text"
                       value={this.state.value}
                       onChange={this.handleChange.bind(this)}
                />
                <input className="button" type="button" value="Add instrument" onClick={this.addInstrument.bind(this)}/>
                <div className="list">
                    <List items={this.props.instruments}/>
                </div>
            </div>

        );
    }
}

App.propTypes = {
    myCustomState : React.PropTypes.string,
    mySuperDispatchMethod: React.PropTypes.func.isRequired
};
App.defaultProps = {
    myCustomState: "unknown"
};


/***
 * each time store change "state.instruments" will be mapped as 'instruments' into App.props
 * @param state
 * @returns {{instruments: *}}
 */
let mapStateToProps  = function(state){
    return {
        instruments : state.instruments
    }
}

/**
 * Make "mySuperDispatchMethod" available in 'App.props'
 * @param dispatch
 * @returns {{mySuperDispatchMethod: mySuperDispatchMethod}}
 */
let mapDispatchToProps  = function(dispatch){
    return {
        mySuperDispatchMethod : function(toDispatch){
            return dispatch(toDispatch)
        }
    }
}

/**
 * If we do not connect 'mapDispatchToProps', 'dispatch' method will be available in App.props
 */
export default connect(mapStateToProps,mapDispatchToProps)(App);
