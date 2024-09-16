import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/getInTouch.css";
import { useForm, ValidationError } from '@formspree/react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("mrbzvovj"); 

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  if (state.succeeded) {
    return (
      <div>
        <Navbar />
        <div className="thank-you-container">
          <img 
            src="https://whitesellgroup.com/wp-content/uploads/2016/01/thank-you-for-reaching-out-to-us-.jpg"
            alt="Thanks for reaching out" 
            className="thank-you-image" // Apply custom styles to control the size and look of the image
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="touch_container">
        <h2 className="bigHead">Get in touch </h2>
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter full Name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <ValidationError 
                prefix="Fullname" 
                field="fullname"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
