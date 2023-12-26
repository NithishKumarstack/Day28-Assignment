import './App.css';
import Footer from './Footer/Footer.js'
import Home from './Home/home.js';
import Main from './Main/Main.js';
import Header from './Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
