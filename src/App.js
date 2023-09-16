import './App.css';
import AccountDetail from './Pages/AccountDetail';
import Address from './Pages/Address';
import Checkout from './Pages/Checkout';
import Dashboard from './Pages/Dashboard';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Order from './Pages/Order';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Address" element={<Address/>} />
      <Route path="/AccountDetail" element={<AccountDetail/>} />
      <Route path="/Checkout" element={<Checkout/>} />
      <Route path="/Detail" element={<Detail/>}/>
      <Route path="/Order" element={<Order />} />  
    </Routes>
  </Router>
  );
}

export default App;
