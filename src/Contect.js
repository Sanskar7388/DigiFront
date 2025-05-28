import Navbar from "./Navbar";
import contect from "./contect.css"
import NavbarMobile from "./NavbarMobile";
import img2 from "./Product_mg.png";
import { useNavigate } from "react-router-dom";
function Contact(){
  const navigate = useNavigate(); // Initialize navigate

  const handleOrderNow = () => {
    navigate("/service"); // Redirects to the Services page
  };
    return(
        <>
        <div className="leptop_Nab_contect">
        <Navbar />
      </div>
      <div className="mobile_Nab_contect">
        <NavbarMobile />
      </div>
      <div className="landing-container">
      <div className="product-card">
        <div className="specifications-grid">
          <div className="technical-specs">
            <h3>TECHNICAL SPECIFICATIONS:</h3>
            <ul>
              <li><strong>Accuracy:</strong> 98% in the sucrose concentration</li>
              <li><strong>Measurement Range:</strong> 5-26% w/w</li>
              <li><strong>Parameters:</strong>
                <ul>
                  <li>Optical Rotation</li>
                  <li>Concentration</li>
                  <li>ISS Value</li>
                </ul>
              </li>
              <li><strong>Precision:</strong> ±0.02 Degrees (Standard Deviation)</li>
              <li><strong>Weight:</strong> 3 kg</li>
              <li><strong>Power Supplied: </strong> 36 watts
                {/* <ul>
                  <li>Voltage: 12V</li>
                  <li>Current: 3A</li>
                </ul> */}
              </li>
              <li><strong>Display:</strong> Touch Screen</li>
              <li><strong>Temperature Cover:</strong> For secure sample handling</li>
            </ul>
          </div>

          <div className="features-section">
            <div className="key-features">
              <h3>KEY FEATURES:</h3>
              <div className="feature-box">
                <h4>PORTABILITY</h4>
                <p>ULTRA-LIGHT TAG DESIGN, IDEAL FOR LAB AND FIELD</p>
              </div>
              <div className="feature-box">
                <h4>DIGITAL INTEGRATION</h4>
                <p>CUSTOM SOFTWARE PURITY AND POL VALUE CALCULATIONS, BOOSTING PRODUCTIVITY.</p>
              </div>
              <div className="feature-box">
                <h4>USER-FRIENDLY DESIGN</h4>
                <p>COMPACT, INTUITIVE INTERFACE FOR EFFORTLESS OPERATION ANYWHERE.</p>
              </div>
            </div>

            <div className="applications">
              <h3>VERSATILE APPLICATIONS ACROSS INDUSTRIES:</h3>
              <ul>
                <li>SUGAR INDUSTRY</li>
                <li>PETROCHEMICALS</li>
                <li>FOOD & BEVERAGE</li>
                <li>RESEARCH</li>
                <li>EDUCATION & TRAINING</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product-image-section">
          <img src={img2} alt="DIGISUGAR Polarimeter" className="product-image" />
          <button className="book-now-btn" onClick={handleOrderNow}>Order Now</button>
        </div>

        <div className="brand-section">
          <h1 className="brand-name">DIGISUGAR</h1>
          <p className="brand-tagline">India's Indigenous Polarimeter</p>
        </div>
      </div>
    </div>
        </>
    )
}
export default Contact;