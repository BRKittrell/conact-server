import React from "react";
import Contacts from "../../contact/Contacts";
import ContactForm from "../../contact/ContactForm";

import Filter from "../../contact/Filter";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="contactForm">
        <ContactForm />
      </div>
      <div className="homeContacts">
        <Filter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
