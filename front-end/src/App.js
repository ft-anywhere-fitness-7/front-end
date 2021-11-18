import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Classes from "./components/Classes";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import {Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import CreateClass from "./components/CreateClass";
function App() {


  // To carry the whole classes 
  const [classes, setClasses] = useState([]);

  // The state for header
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

  return (
    <div className="App">
      <div className="content-wrap">
        <div className="header-section">
          <Header />
        </div>
        <div className='display'>
            <Switch>
              <Route exact path="/"> 
              <Home />           
              </Route>        
              <Route path="/login">
                <Login />
              </Route> 
              <Route path="/logout" component={Logout} />
              <Route path="/register">
                <Register />
              </Route> 
              <Route path="/classes">
                <Classes />
              </Route> 
              <Route path='/create'>
                <CreateClass />
              </Route>
              {/* <Route exact path='/classes' element={Classes}/> */}

            </Switch>
        </div>
        <div className="footer-page">
          <Footer/>
        </div>
      </div>
    </div>
    
  );
}

export default App;