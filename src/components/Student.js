import React from 'react';
import './Student.css';
import PropTypes from 'prop-types';

class Student extends React.Component{
  // Component functions always return JSX
  constructor(props){
    super(props);
  }

  buildStyles() {
    let selectStyles = this.props.class.toLowerCase();
    selectStyles = selectStyles +  ' ' + (this.props.present ? 'present' : 'absent');              
    return selectStyles;
  }
  
  render() {
    return (
      <li className={this.buildStyles()}>
      {this.props.name} <p>{this.props.email}</p>
      </li>
    );
  }
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