import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
       {/* <!-- footer --> */}
  <footer className="footer">
    <div className="footer-container">
        {/* <!-- About --> */}
         <div className="footer-box">
            <h2> Explore</h2>
             </div>
             {/* <!-- quick links --> */}
          <div className="footer-box">
           <Link to="/Survey-Page">Survey</Link>
            {/* <a href="">About</a> */}
             <Link to="/Wallet-Page">Wallet</Link>
            <Link to="/Task-Page">Task</Link>
            
              
          </div>

         {/* <!-- quick links --> */}
          <div className="footer-box">
            <h3>Quick Links</h3>
            <Link to="/About-Page">About Us</Link>
            <Link to="/Help">Help</Link>
           
             <Link to="/Contact">Contact</Link>
           
             {/* <Link to="/About-Page">About Us</Link> */}
              
           
          </div>
          {/* <!-- contact --> */}
           <div className="footer-box">
            <h3>Contact Us</h3>
            <p>Email: ysense.com</p>
            <p>P.O Box 70</p>
            <p>Manhattan Beach, CA 90267 USA</p>
            <p>Attn: Customer Service</p>
           
           </div>
    </div>
    {/* <!-- copyright --> */}
     <div className="copyright">
      <p>Copyright &copy; 2026 Prodege, LLC</p>
     <h4>The ySense trademark and the ySense logo are the property <br /> of YSense.com, LLC; all rights reserved. Other trademarks <br /> appearing on this site are property of their respective <br /> owners, which do not endorse and are not affiliated with <br /> ySense or its promotions.</h4>
     </div>
  </footer>
    </div>
  )
}

export default Footer
