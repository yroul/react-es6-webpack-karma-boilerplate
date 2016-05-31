import React from 'react';
import { Link } from 'react-router';
import List from './list';

import EventBus from './event/EventBus';


import { connect } from 'react-redux';

import {FormattedMessage} from 'react-intl';

class App extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            userLocale: 'en'
        };

        //because this.props.mySuperDispatchMethod is ugly
        this.dispatchInstrumentAction = this.props.mySuperDispatchMethod;


    }



    componentDidMount() {
        console.log('App component mount !');


        EventBus.subscribe('INSTRUMENT_ADDED', function () {
            console.log('instrument added');
            console.log(this.props.instruments);
        }, this);


        console.log(this.state)
    }



    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addInstrument() {
        if (this.state.value.length > 0) {
            console.log('add instrument');
            /*this.props.store.dispatch({
                type: "ADD_INSTRUMENT",
                name: this.state.value
            });*/
            this.dispatchInstrumentAction({
                type: 'ADD_INSTRUMENT',
                name: this.state.value
            });
            this.setState({value:''});
        }
    }
    handleLocaleChange (e){
            this.setState({
                userLocale: e.target.value
            });


    }
    setLocale (){
        if(this.state.locale !== ''){
            this.props.mySuperDispatchMethod({
                type: 'SET_LOCALE',
                value: this.state.userLocale
            });
        }
    }

    render() {
        //console.log(this.getInitialState());
        return (
            // Add your component markup and other subcomponent references here.
            <div>
                <FormattedMessage
                    id='GREETING'
                    description='Greeting to welcome the user to the app'
                    defaultMessage='TEST {name}!'
                    values={{
                        name: 'Yoan'
                    }}
                />


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


                <input type="text"
                       value={this.state.userLocale}
                       onChange={this.handleLocaleChange.bind(this)}
                />
                <input className="button" type="button" value="Set locale" onClick={this.setLocale.bind(this)}/>

            </div>

        );
    }
}

App.propTypes = {
    myCustomState : React.PropTypes.string,
    mySuperDispatchMethod: React.PropTypes.func.isRequired,
    instruments: React.PropTypes.array
};
App.defaultProps = {
    myCustomState: 'unknown'
};


/***
 * each time store change "state.instruments" will be mapped as 'instruments' into App.props
 * @param state
 * @returns {{instruments: *}}
 */
let mapStateToProps  = function (state){
    return {
        instruments : state.instruments,
        locale : state.locale
    }
};

/**
 * Make "mySuperDispatchMethod" available in 'App.props'
 * @param dispatch
 * @returns {{mySuperDispatchMethod: mySuperDispatchMethod}}
 */
let mapDispatchToProps  = function (dispatch){
    return {
        mySuperDispatchMethod : function (toDispatch){
            return dispatch(toDispatch)
        }
    }
};

/**
 * If we do not connect 'mapDispatchToProps', 'dispatch' method will be available in App.props
 */
export default connect(mapStateToProps,mapDispatchToProps)(App);
