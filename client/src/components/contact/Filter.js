import React, { useRef, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import "./Filter.css";

const Filter = () => {
  const text = useRef("");

  const contactContext = useContext(ContactContext);

  const { filtered, clearFilter, filterContacts } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        onChange={onChange}
        className="filterInput"
        placeholder="Filter contacts..."
      />
    </form>
  );
};

export default Filter;
