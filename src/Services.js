import Navbar from "./Navbar";
import services from "./services.css"
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";

function Services(){
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    emailId: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormData({ userName: '', emailId: '', query: '' });
    setIsFormOpen(false);
  };
    return(
        <>
        <div className="leptop_Nab_services">
        <Navbar />
      </div>
      <div className="mobile_Nab_services">
        <NavbarMobile />
      </div>

      <div className="contact-container">
      <div className="contact-details">
        <h2>CONTACT US</h2>
        <p>To purchase the product, please contact us using the details below:</p>
        
      </div>
<div className="contact-info">
          <p>Email Id - vaibhav.chopra@plaksha.edu.in</p>
          <p>Mobile Number - +91 81308 28270</p>
          <p>Address - Plaksha University, Alpha, Sector 101, IT City Rd, Sahibzada Ajit Singh Nagar, Punjab 140306</p>
        </div>
      <div className="contact-form">
        <h3>ASK US</h3>
        <form>
          <input type="text" placeholder="User Name" required />
          <input type="email" placeholder="Email Id" required />
          <textarea placeholder="Query" required></textarea>
          <button type="submit">DONE</button>
        </form>
      </div>
    </div>
        </>
    )
}
export default Services;