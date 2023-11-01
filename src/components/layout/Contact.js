import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ClearPlantLogo from '../../Images/ClearPlantLogo.png';


const Contact = () => {
  //   constructor() {
  //     super();
  //     this.state = {
  //       firstName: '',
  //       lastName: '',
  //       country: '',
  //       companyName: '',
  //     };
  //   }

  //   handleInputChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //   };
  //   render() {
  return (
    <div id="contact" className="contact-section">
      <div className="left-partition">
        <img
          className="logo"
          src={ClearPlantLogo}
          alt=""
        />
        <div className="phone-numbers">
          <p>
            <FontAwesomeIcon className="icon" icon={faPhone} /> +1234567890
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faEnvelope} /> +9876543210
          </p>
        </div>
        <div className="address">
          <h2>Address</h2>
          <p>
            123 Main Street<br></br> City <br></br> Country
          </p>
        </div>
      </div>
      <div className="middle-partition">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S259012302300600X?ref=pdf_download&fr=RR-2&rr=8125d0673f551bd4">
              Lorem, ipsum dolor.
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="right-partition">
        <h2>Enquire Now</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              // value={this.state.firstName}
              // onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              // value={this.state.lastName}
              // onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="country"
              placeholder="Country"
              // value={this.state.country}
              // onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              // value={this.state.companyName}
              // onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
  // };
};

export default Contact;
