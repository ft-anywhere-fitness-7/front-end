import Header from "./components/Header";

import Footer from "./components/Footer";

import Home from "./components/Home";

import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
       {/* <div className="header-section">
          <Header />
        </div>
        <Home />
        <div className="footer-page">
          <Footer/>
  </div>*/}
        <div className="login">
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default App;