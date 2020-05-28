import React from "react";
import Contacts from "../../contact/Contacts";
import ContactForm from "../../contact/ContactForm";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="contactForm">
        <ContactForm />
      </div>
      <div className="homeContacts">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
