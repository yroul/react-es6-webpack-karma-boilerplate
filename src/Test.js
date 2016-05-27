import React from 'react'
import { connect } from 'react-redux'



class Test extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object,
    }
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
            <div>Hello world</div>
        );
    }
    componentDidMount () {
        console.log('Test did mount');
        console.log(this)
    }
}


let connectedTest = connect()(Test);
export default connectedTest;