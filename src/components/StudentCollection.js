import React from 'react';
import PropTypes from 'prop-types';

import Student from './Student';

//const StudentCollection = (props) => {
class StudentCollection extends React.Component {
  constructor(props) {
    super(props);

  makeCollection(){
    const studentCollection = this.props.people.map((student, i) => {
        return <Student name={student.name} email={student.email} present={student.present} class={student.class} key={i} />;
      }
    );
    return studentCollection
  }
  render(){
    return(
      <ul>
        {this.makeCollection()}
      </ul>
  );
  }
};


export default StudentCollection;