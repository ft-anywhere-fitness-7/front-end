import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Classes from "./components/Classes";
import { Route, Routes } from 'react-router-dom';


import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
       <div className="header-section">
          <Header />
        </div>
        <div className='display'>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<div></div>}/>
              <Route exact path='/register' element={<div></div>}/>
              <Route exact path='/classes' element={<Classes/>}/>
            </Routes>
        </div>
        <div className="login">
          <Login />
        </div>
        <div className="footer-page">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;