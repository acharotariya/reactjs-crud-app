import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
// import Dashboard from './components/dashboard';
import AddItem from './components/AddItem';
import ViewRecord from './components/ViewRecord';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={ Home } />
         {/* <Route exact path='/dashboard' component={ Dashboard } /> */}
         <Route path='/addItem' component={AddItem} /> 
        <Route path='/viewrecord' component={ViewRecord} /> 
      </div>
  </Router>,
  document.getElementById('root')
);