import React from 'react';
import './Student.css';
import PropTypes from 'prop-types';

const Student = (props) => {
  // Component functions always return JSX

  const buildStyles = () => {
    let selectStyles = props.class.toLowerCase();
    selectStyles = selectStyles +  ' ' + (props.present ? 'present' : 'absent');              
    return selectStyles;
  }

  return (
    <li className={buildStyles()}>
    {props.name} <p>{props.email}</p>
    </li>
  );
};


Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  class: PropTypes.string,
  present: PropTypes.bool.isRequired
};

Student.defaultProps = {
  class: 'no-class',
  email: 'No Email On File'
};

export default Student;