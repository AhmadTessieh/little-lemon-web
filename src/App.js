import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Menu from './Menu/Menu';
import Reservations from './Reservations/Reservations';
import Order from './Order/Order';
import Login from './Login/Login';
function App() {
  return (
    
    <div className="App">
     <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
