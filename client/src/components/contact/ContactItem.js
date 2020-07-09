import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import "./ContactItem.css";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { id, name, email, type, phone } = contact;
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className="contactCard">
      <span className={`badge ${type}`}>{type}</span>
      <ul>
        <li className="contactName">{name}</li>
        <li className="contactPhone">
          <i className="fas fa-phone"></i> {phone}
        </li>
        <li className="contactEmail">
          <i className="fas fa-envelope"></i> {email}
        </li>
      </ul>
      <div>
        <div className="contactBtn" onClick={() => setCurrent(contact)}>
          Edit
        </div>
        <div className="contactBtn" onClick={onDelete}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
