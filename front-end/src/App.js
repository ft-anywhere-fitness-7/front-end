import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Classes from "./components/Classes";
import Register from "./components/Register/Register";
import Login from "./components/Login";
import { Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';



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
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/register' element={<Register/>}/>
              <Route exact path='/classes' element={<Classes/>}/>
            </Routes>
        </div>
        <div className="footer-page">
          <Footer/>
        </div>
      </div>
    </div>
    
  );
}

export default App;