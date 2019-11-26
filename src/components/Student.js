import React from 'react';
import './Student.css';
import PropTypes from 'prop-types';


// class Student extends React.Component{
const Student = (props) => {
  // Component functions always return JSX

  const buildStyles = () => {
    let selectStyles = props.class.toLowerCase();
    selectStyles = selectStyles + ' ' + (props.present ? 'present' : 'absent');
    return selectStyles;
  }
  const onTogglePresentClick = () => {
    console.log('Toggling Present');
    props.togglePresent(props.email);
  }
  return (
    <li className={buildStyles()}>
      {props.name} <p>{props.email}</p>
      <button onClick={onTogglePresentClick}>Mark
        {props.present ? ' Absent' : ' Present'}
      </button>
    </li>
  );
};


Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  class: PropTypes.string,
  present: PropTypes.bool.isRequired,
  togglePresent: PropTypes.func.isRequired,
};

Student.defaultProps = {
  class: 'no-class',
  email: 'No Email On File'
};

export default Student;