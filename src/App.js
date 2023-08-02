import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import House from './Pages/House/House';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route index element={<Home/>}></Route>
    <Route path='/house' element={<House/>} ></Route>
    {/* <Route path='/footer' element={<Footer/>}></Route> */}

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
