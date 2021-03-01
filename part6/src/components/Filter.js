import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, filterChange }) => {
  console.log(filter);
  return (
    <div>
      Etsi:
      <input value={filter} onChange={filterChange} />
    </div>
  );
};
Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
