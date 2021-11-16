import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
              <Route exact path='/classes' element={<div></div>}/>
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