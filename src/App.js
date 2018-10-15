import React, { Component } from 'react';
import './App.css';
import Auth from './Component/Auth/Auth'
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'
import Nav from './Component/Nav/Nav'
import Post from './Component/Post/Post'
import routes from './route'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        {/* <Nav/> */}
      <div className="Main">
        {routes}
      </div>
      
      </div>
    );
  }
}

export default App;
