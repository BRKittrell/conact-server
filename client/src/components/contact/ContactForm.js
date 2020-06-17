import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import "./ContactForm.css";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { addContact, current, updateContact, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (current !== null) {
      updateContact(contact);
      clearCurrent();
    } else {
      addContact(contact);
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  };

  const clearField = () => {
    clearCurrent();
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const { email, name, phone, type } = contact;
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <h1>{current ? "Edit Contact" : "Enter contact"}</h1>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        className="formField"
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        className="formField"
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        value={phone}
        placeholder="Phone"
        className="formField"
        onChange={onChange}
      />
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        className="radio"
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        className="radio"
        onChange={onChange}
      />{" "}
      Professional
      <input
        type="submit"
        value={current ? "Edit Contact" : "Submit Contact"}
        className="formSubmitBtn"
      />
      {current && (
        <div className="clearBtn" onClick={clearField}>
          Clear Contact Fields
        </div>
      )}
    </form>
  );
};

export default ContactForm;
