import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    //initiated a state
    super();
    this.state={
      names:["First","Second"],
      name:''
    };
  }


  //method to be called if text box changes
  _onNameChanged(event){
    //update the state value of (name)
    this.setState({
      name: event.target.value
    });
  }


  //on form submission
  _onSubmit(event){
    //prevent default behavior
    event.preventDefault();
    this.setState(
      {
        names:this.state.names.concat(this.state.name)
      }
    );

  }

  render(){
    const submitDisabled=!this.state.name;
    return(
      <div>
        <form onSubmit={this._onSubmit.bind(this)}>
          <div>
            <input type="text" placeholder="New Name" onChange={this._onNameChanged.bind(this)}/>
            <button type="submit" disabled={submitDisabled}>Add name</button>
          </div>
        </form>
        <hr/>

        <table>
            <thead>
              <th>NAMES</th>
            </thead>
            <tbody>
              {
                this.state.names.map((name,index)=>(
                  <tr key={index}>
                    <td>{name}</td>
                  </tr>
                )) 
              }
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;
