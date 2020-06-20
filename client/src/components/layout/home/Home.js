import React, { useContext, useEffect } from "react";
import Contacts from "../../contact/Contacts";
import ContactForm from "../../contact/ContactForm";
import AuthContext from "../../../context/auth/authContext";
import Filter from "../../contact/Filter";
import "./Home.css";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
