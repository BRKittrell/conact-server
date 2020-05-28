import React, { Fragment } from "react";
import "./ContactItem.css";

const ContactItem = ({ contact }) => {
  const { id, name, email, type, phone } = contact;

  return (
    <div className="contactCard">
      <span className={`badge ${type}`}>{type}</span>
      <ul>
        <li className="contactName">{name}</li>
        <li className="contactPhone">{phone}</li>
        <li className="contactEmail">{email}</li>
      </ul>
      <div>
        <div className="contactBtn">Edit</div>
        <div className="contactBtn">Delete</div>
      </div>
    </div>
  );
};

export default ContactItem;
