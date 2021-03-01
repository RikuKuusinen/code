import React from "react";
import PropTypes from "prop-types";

const Person = ({ person }) => {
  console.log(person);
  return (
    <li>
      {person.name}
      {person.number}
    </li>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default Person;
