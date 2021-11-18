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
import UserList from './components/UserList'
import User from './components/User'



function App() {


  // To carry the whole classes 
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

  const [isHomePage, setIsHomePage] = useState(true); 
  const [isRegPage, setIsRegPage] = useState(false); 
  const [isLoginPage, setIsLoginPage] = useState(false);  

  // const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const message = localStorage.getItem('message');

  const deleteUser = (id)=> {
    
  }

  return (
    <div className="App">
      <div className="content-wrap">
        <div className="header-section">
          <Header 
              isHomePage = { isHomePage } 
              isRegPage = { isRegPage } 
              isLoginPage = { isLoginPage }  
              isLoggedIn = { isLoggedIn } 
              role = { role }  
              message = { message } 
              />
        </div>
        <div className='display'>
            <Switch>
              <Route exact path="/"> 
                <Home setIsHomePage = { setIsHomePage } />           
              </Route>        
              <Route path="/login">
                <Login setIsLoggedIn = { setIsLoggedIn } />
              </Route> 
              <Route path="/logout">
                <Logout setIsLoggedIn = { setIsLoggedIn } setIsHomePage = { setIsHomePage }  setIsRegPage = { setIsRegPage } setIsLoginPage = { setIsLoginPage }  />
              </Route> 
              <Route path="/register">
                <Register />
              </Route> 

              <Route
              path="/user"
              render={props => <User {...props} deleteMovie={deleteUser} />}              
              />

              <Route path="/users">
              <UserList users = { users } setUsers = { setUsers } />
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