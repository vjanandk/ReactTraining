import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends React.Component{

  // constructor
  constructor(){
    super();
    this.state = {
      count : 0
    };
  }

  // custom method to hold logic for incr/decr
  _decrement(){
    this.setState(
      {
        count : this.state.count - 1
      }
    );
  }

  _increment(){
    this.setState(
      {
        count : this.state.count + 1
      }
    );
  }


  render(){
    return(
      <div>
          <Counter count={this.state.count} 
                   onIncr={this._increment.bind(this)}
                   onDecr={this._decrement.bind(this)} />
      </div>
    );
  }
}


export default App;
