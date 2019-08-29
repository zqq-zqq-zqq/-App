import React,{Component} from 'react';

import './App.css';

import Router from "./router"
import routes from "./router/app"
class Event extends Component{
  
  render(){
    return (
      <div className="App">
        {/* 可变区域一级 */}
        <Router routes={routes}></Router>
      </div>
    );
  }
   
 
  
}

export default Event;
