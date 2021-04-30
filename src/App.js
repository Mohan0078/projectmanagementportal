import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Menu from './Menu';
import Logout from './Logout';
import About from './About';
import AddProject from './AddProject';


const App = () => {

  return (
    <>
      <Menu />

      <div className="container main">
        <div className="row">
          <Switch>

            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/logout' exact component={Logout} />
            <Route path='/about' exact component={About} />
            <Route path='/addProject' exact component={AddProject} />

          </Switch>

        </div>
      </div>


    </>
  );
}

export default App;