import React, {Component} from 'react';

export default React.createClass({

    componentDidMount() {
        console.log('List component mount !');
    },
    componentDidUpdate(){
        console.log('List component update !');
    },
    getInitialState(){
        return {};
    },
    render() {
        return (
                <ul>{
                    this.props.items.map(function(instru,index){
                        return <li key={index} >{instru.name} </li>
                    })

                }</ul>


        );
    }
});
