import React from 'react';
import './Student.css';
import PropTypes from 'prop-types';


const Student = (props) => {
  const buildStyles = () => {
    let selectStyles = props.class.toLowerCase();
    selectStyles = selectStyles + ' ' + (props.present ? 'present' : 'absent');
    return selectStyles;
  }

  const onTogglePresentClick = () => {
    console.log('Toggle Present Click', props);
    props.onTogglePresent(props.id);
  }

  const onDeleteClick = () => {
    props.onDeleteStudent(props.id);
  }

  return (
    <li className={buildStyles()}>
      {props.name} <p>{props.email}</p>
      <button onClick={onTogglePresentClick}>
        Mark {props.present ? "Absent" : "Present"}
      </button>
      <button onClick={onDeleteClick}>Delete</button>
    </li>
  );
};


Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  class: PropTypes.string,
  present: PropTypes.bool.isRequired,
  onDeleteStudent: PropTypes.func.isRequired,
  onTogglePresent: PropTypes.func.isRequired,
};

Student.defaultProps = {
  class: 'no-class',
  email: 'No Email On File',
};

export default Student;