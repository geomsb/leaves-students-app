import React from 'react';
import PropTypes from 'prop-types';

import Student from './Student';

//const StudentCollection = (props) => {
class StudentCollection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      students: this.props.people,
    }
  }

  toggleAttendance = (studentEmail) => {
    const { students } = this.state;
    const student = students.find((student) => student.email === studentEmail);

    student.present = !student.present;

    this.setState({ students });
  }

  deleteStudent = (studentEmail) => {
    console.log('deleting', studentEmail)
    let students = this.state.students.filter((student) => student.email !== studentEmail);
    console.log(students);

    this.setState({ students });
  }

  makeCollection () {
    const studentCollection = this.state.students.map((student, i) => {
      return <Student
        name={student.name}
        email={student.email}
        present={student.present}
        class={student.class}
        key={i}
        changeAttendance={this.toggleAttendance}
        deleteStudent={this.deleteStudent}
      />;
    }
    );
    return studentCollection
  }
  render () {
    return (
      <ul>
        {this.makeCollection()}
      </ul>
    );
  }
};

StudentCollection.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    class: PropTypes.string,
    present: PropTypes.bool,

  })),
};

StudentCollection.defaultProps = {
  present: true,
};



export default StudentCollection;