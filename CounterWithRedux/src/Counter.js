import React from 'react';
import {connect} from 'react-redux';


class Counter extends React.Component{

    // custom method to handle incr/decr
    _handleIncrement(){
        // this.props.onIncr();
    }
    _handleDecrement(){
        // this.props.onDecr();
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this._handleIncrement.bind(this)}>Increment(+)</button>
                    <hr />
                        <span>{this.props.count}</span>
                    <hr />    
                    <button onClick={this._handleDecrement.bind(this)}>Decrement(-)</button>
                </div>
            </div>
        );
    }
}

// independent function
// method will be passed the state (from store) object (read-only) as arg
function mapStateToProp(state){
    // return an JS object  containing the props that we want
    return {
        // <props name> : <state fld>
        // assuming count fld in state (store)
        count : state.count
    }
}

// not exposing directly
// export default Counter;

// whenever Counter is rendered, it will rendered connected with store
// exposing through connect method
// need to mention mapping method to be called while connecting to store
// return a wrapped Counter object
export default connect(mapStateToProp)(Counter);

