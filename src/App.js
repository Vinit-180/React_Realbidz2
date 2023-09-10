import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import House from './Pages/House/House';
import SignupForm from './Pages/Signup/SignupForm';
import Login from './Pages/Login/Login';
import SellWithUs from './Pages/SellWithUs/SellWithUs';
import Dashboard from './Pages/UserDashboard/Dashboard';

function App() {
  var f=0;
  const isUser=()=>{
    var token=localStorage.getItem('user');
    if(token!=null)
    {
      f=1
    }
  }
  const location=window.location.href.split('/');
  console.log(location.at(-1))
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route index element={<Home/>}></Route>
    <Route path='/house' element={<House/>} ></Route>
    <Route path='/signup' element={<SignupForm/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/sellwithus' element={<SellWithUs/>}></Route>
    <Route path='/userdashboard' element={<Dashboard/>} ></Route>
    {/* <Route path='/footer' element={<Footer/>}></Route> */}

    </Routes>
  {location.at(-1)!='login' && (<Footer/>)}
    
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
