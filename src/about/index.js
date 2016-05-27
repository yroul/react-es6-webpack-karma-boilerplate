import React from 'react';

import EventBus from '../event/EventBus';

import { Link } from 'react-router';

class About extends React.Component{


   /* static propTypes =  {
        user : React.PropTypes.any
    };
    static defaultProps = {
        user:''
    };*/
    constructor(props) {
        super(props);
    }
    state = {
        user : undefined
    }

    componentWillUpdate (nextProps,nextState){

        if(nextProps.params.user){
            nextState.user = nextProps.params.user;
        }
    }


    render() {
        return (
            <div>
                <h1>About page</h1>

                <ul>
                    <li>
                        <Link to="/about/Yoan">Yoan</Link>
                        </li>
                    <li><Link to="/about/Jean">Jean</Link></li>
                        <li>
                            <Link to="/about/Toto">Toto</Link>
                        </li>
                </ul>
                {this.state.user  ? this.state.user : 'random stranger'}
            </div>
        );
    }
}

export default About;
