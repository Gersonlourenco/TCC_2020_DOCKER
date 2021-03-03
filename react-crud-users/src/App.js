import React, { Component } from 'react'
import ListUserComponent from './Components/User/List/ListUserComponent'
import CreateComponent from './Components/User/Create/CreateComponent'
import DetailsComponent from './Components/User/Details/DetailsComponent'
import UpdateComponent from './Components/User/Update/UpdateUserComponent'
import { Redirect } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'react-crud-users',
      user: null
    }
  }

  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/users" class="nav-link">Usuários</Link>

            </li>
            <li class="nav-item">
              <Link to="/add" class="nav-link">Novo usuário</Link>
            </li>
          </ul>
        </nav>
        <div class="container">
          <br />
          <h2 style={{ textAlign: 'center' }}>{this.state.title}</h2>
          <hr />
          <div class="card">
            <div class="card-body">
              <Switch>                
                <Route path="/users">
                  <ListUserComponent />
                </Route>
                <Route path="/add">
                  <CreateComponent />
                </Route>
                <Route path="/details/:id" component={DetailsComponent} />
                <Route path="/update/:id" component={UpdateComponent} />                
                <Route path="/">
                  <Redirect to="/users" /> 
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
