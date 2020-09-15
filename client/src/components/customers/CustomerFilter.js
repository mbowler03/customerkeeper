import React, { useRef, useEffect } from "react";
import "../../styles/customerFilter.css";

const CustomerFilter = ({ filterCustomers, clearFilter, filtered }) => {
  const text = useRef("");
  // useRef is like a “box” that can hold a mutable value in its .current property.
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterCustomers(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        id="customer-filter"
        onChange={onChange}
        className="form-control"
        placeholder="Search Customers..."
      />
    </form>
  );
};

export default CustomerFilter;
