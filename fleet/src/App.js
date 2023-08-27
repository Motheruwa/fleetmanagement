import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import About from "./page/About";
import Admin from "./page/Admin";
import Adminlogin from "./page/Adminlog";
import Driver from "./page/Driver";
import Driverlogin from "./page/Driverlogin";
import Fuel from "./page/Fuel";
import Fuellogin from "./page/Fuellogin";
import Home from "./page/Home";
import Maintainlogin from "./page/Maintainlogin";
import Maintenance from "./page/Maintenance";
import Welcome from './page/Welcome'
import {Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/adminlogin' element={<Adminlogin/>}></Route>
        <Route path='/driverlogin' element={<Driverlogin/>}></Route>
        <Route path='/driver' element={<Driver/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/fuellogin' element={<Fuellogin/>}></Route>
        <Route path='/fuel' element={<Fuel/>}></Route>
        <Route path='/Maintainlogin' element={<Maintainlogin/>}></Route>
        <Route path='/maintenance' element={<Maintenance/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
