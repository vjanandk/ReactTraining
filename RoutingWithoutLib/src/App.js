import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './Route';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Link from './Link';


class App extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <hr />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
      </div>
    );
  }
}

export default App;
