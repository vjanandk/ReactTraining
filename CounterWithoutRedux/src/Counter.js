import React from 'react';

class Counter extends React.Component{

    // custom method to handle incr/decr
    _handleIncrement(){
        this.props.onIncr();
    }
    _handleDecrement(){
        this.props.onDecr();
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

export default Counter;