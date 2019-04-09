import React, { Component } from 'react';
import  { Route } from 'react-router';
import { BrowserRouter,Switch } from 'react-router-dom';
import { createBrowserHistory} from 'history';

import './App.css';
import {First,Contacts,AddContact,EditContact} from "./pages"


class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter history={createBrowserHistory()} >
        <Switch>
          <Route path="/" exact component={First} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/addcontact" component={AddContact} />
          <Route path="/editcontact" component={EditContact} />
        </Switch>
       </BrowserRouter>
      </div>
    );
  }
} 


      
export default App;
