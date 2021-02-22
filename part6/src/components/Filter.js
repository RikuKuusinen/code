import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, filterChange }) => {
  console.log(filter);
  return (
    <div>
      Etsi: <input value={filter} onChange={filterChange} />
    </div>
  );
};

export default Filter;
