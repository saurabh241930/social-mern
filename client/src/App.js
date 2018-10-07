import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import styles from "./App.css";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'



import {BrowserRouter as Router,Route} from 'react-router-dom'




class App extends Component {
  render() {
    return (
   <Provider store = {store}>
      <Router>
      <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
          
      </div>
      </Router>

      </Provider>
    
    );
  }
}

export default App;
