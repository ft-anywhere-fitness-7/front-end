import Header from "./components/Header";

import Footer from "./components/Footer";

import Home from "./components/Home";




function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <div className="header-section">
          <Header />
        </div>
        <Home />
        <div className="footer-page">
          <Footer/>
        </div>
      </div>
    </div>
    
  );
}

export default App;