import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Users from './Users';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              Users
              <ul>
                <li><Link to="/users/1">User-1</Link></li>
                <li><Link to="/users/2">User-2</Link></li>
                <li><Link to="/users/3">User-3</Link></li>
              </ul>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/users/:id" component={Users} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
