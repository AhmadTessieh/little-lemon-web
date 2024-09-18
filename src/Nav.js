import "./Nav.css";
import logo from './images/Logo.png';
function Nav() {
  return (
    <nav className="Nav">
      <img id="logo" src={logo}></img>
      <ul id="navlist">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
        
        
      </ul>
    </nav>
  );
}

export default Nav;