import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="Navbar">
     
        <ul >
          <Link to="/"> Home</Link>
          <Link to="/About"> About</Link>
          <Link to="/Skills"> Skills</Link>
          <Link to="/Hobbies"> Hobbies</Link>
          <Link to="/Contact"> Contact</Link>
        </ul>
      
    </div>
  );
};

export default Navbar;
