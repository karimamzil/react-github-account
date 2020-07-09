import React from 'react';
import Users from './components/users/Users'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserItem from './components/users/UserItem'
import {Link} from 'react-router-dom'
function App() {
  return (
     <Router>
        <div className="App">
            <nav className="navbar navbar-expand navbar-dark btn btn-primary " >
               <Link  className="btn btn-dark" to="#">GitHub accounts</Link>
            </nav>
            <div className="container mt-2">
              <Switch>
                 <Route exact path="/users"component={Users}/>
                 <Route exact path="/users/:login"component={UserItem}/>
                 <Route exact component={Users}/>
              </Switch>
            </div>
        </div>
    </Router>
      
  );
}

export default App;
