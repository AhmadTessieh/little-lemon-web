import "./Footer.css";
import restaurant from './images/restaurant.jpg';
function Footer() {
  return (
    <footer className="Footer">
      <div id="footimg">
        <img id="footerimg" src={restaurant}></img>
      </div>
      <div className="footp1">
        <h4>Doormat Navigation</h4>
        <ul id="footlist">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
        
        
      </ul>
      </div>
      <div className="footp1" >
      <h4>Contact</h4>
        <ul id="footlist">
        <li><a href="">Adress</a></li>
        <li><a href="">phone number</a></li>
        <li><a href="">email</a></li>
        
        
        
      </ul>
      </div>
      <div className="footp1">
      <h4>Doormat Navigation</h4>
        <ul id="footlist">
        <li><a href="">Adress</a></li>
        <li><a href="">phone number</a></li>
        <li><a href="">email</a></li>
        
        
      </ul>
      </div>
    </footer>
  );
}

export default Footer;