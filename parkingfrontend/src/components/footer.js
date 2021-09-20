
import React from "react";
import './sayuru.css'



function Footer(){
  return(
    <div><footer id="footer">
      <div className="footer-top">
      <div className="container">
      <div className="row">
      <div className="col-lg-3 col-md-6 footer-contact">
      <h3>ParkExpress</h3>
      <p>
      22/A HOMIES ROAD <br />
      KALUTARA, 12000
      <br />
      Sri Lanka <br />
      <br />
      <strong>Phone:</strong> +94 34 2264535
      <br />
      <strong>Email:</strong> admin@parkxpress.com
      <br />
      </p>
      </div>
      <div className="col-lg-2 col-md-6 footer-links">
      <h4>Useful Links</h4>
      <ul>
      <li>
      <i className="bx bx-chevron-right" /> <a href="#">Home</a>
      </li>
      <li>
      <i className="bx bx-chevron-right" /> <a href="#">About us</a>
      </li>
      <li>
      <i className="bx bx-chevron-right" /> <a href="#">Contact us</a>
      </li>
      <li>
      <i className="bx bx-chevron-right" /> <a href="#">Gallery</a>
      </li>
      <li>
      <i className="bx bx-chevron-right" /> <a href="#">Our Projects</a>
      </li>
      <li>
      <i className="bx bx-chevron-right" />{" "}
      <a href="#">Terms of service</a>
      </li>
      <li>
      <i className="bx bx-chevron-right" />{" "}
      <a href="#">Privacy policy</a>
      </li>
      </ul>
    </div>

    
    <div className="col-lg-3 col-md-6 footer-links">
    <h4>Our Services</h4>
    <ul>
    <li>
    <i className="bx bx-chevron-right" /> <a href="#">Booking</a>
    </li>
    <li>
    <i className="bx bx-chevron-right" />{" "}
    <a href="#">Allot Parking</a>
    </li>
    <li>
    <i className="bx bx-chevron-right" />{" "}
    <a href="#">Shuttle Routes</a>
    </li>
    <li>
    <i className="bx bx-chevron-right" /> <a href="#">GPS Tracker</a>
    </li>
    <li>
    <i className="bx bx-chevron-right" />{" "}
    <a href="#">Ticketing</a>
    </li>
    </ul>
    </div>
    <div className="col-lg-4 col-md-6 footer-newsletter">
    <h4>Join Our Newsletter</h4>
    <p>
    “Trust your own instinct. Your mistakes might as well be your own, instead of someone else’s.”
    – Billy Wilder
    </p>
    <form action="/test" method="post">
    <input type="email" name="email" />
    <input type="submit" defaultValue="Subscribe" />
    </form> <div className="social-links">
    <a href="#" className="fa fa-twitter">
    <i className="bx bxl-twitter" />
    </a>
    <a target="_blank" href="#" className="facebook">
    <i className="fa fa-facebook" />
    </a>
    <a href="#" className="instagram">
    <i className="fa fa-instagram" />
    </a>
    <a href="#" className="google-plus">
    <i className="fa fa-google-plus" />
    </a>
    <a href="#" className="linkedin">
    <i className="fa fa-linkedin" />
    </a>
    </div> </div>
    </div>
    </div>
    </div>
    <div className="container">
    <div className="copyright-wrap d-md-flex py-4">
    <div className="me-md-auto text-center text-md-start">
    <div className="copyright">
    © Copyright{" "}
    <strong>
    <span>Techie</span>
    </strong>
    . All Rights Reserved
    </div>
    <div className="credits">
    Designed by <a target="_blank" href="https://teamtrees.org/">Clovers</a>
    </div>
    </div>
    </div>
    </div>
    </footer> </div>
  )
}export default Footer;

