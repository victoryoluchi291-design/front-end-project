import { NavLink } from "react-router-dom";
import "./Navbar.css";
import image from "../../assets/images100.png";
import { Link } from "react-router-dom"

const pages = [
  { name: 'Surveys', path: '/SurveyPage' },
  // { name: 'About Us', path: '/Aboutus' },
  // { name: 'Services', path: '/Services' },
  // { name: 'Contact us', path: '/ContactUs' },
  //  { name: 'Login', path: '/Login' },
  //   { name: 'Register', path: '/Register' },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
      <img src={image} alt="123" />
        {/* <span>EarnDaily</span> */}
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/surveys">Surveys</NavLink>
        <NavLink to="/Tasks">Tasks</NavLink>
        <NavLink to="/wallet">Wallet</NavLink>
        <NavLink to="/Dashboard">Dashboard</NavLink>
       
      </div>

      <div className="nav-buttons">
       <Link to="/login" className="login-up-btn">
        Log in
        </Link>
        
        <Link to="/Register" className="sign-up-btn">
        Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar