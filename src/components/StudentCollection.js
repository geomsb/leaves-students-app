import React from 'react';
import PropType from 'prop-types';
import Student from './Student';

//const StudentCollection = (props) => {
class StudentCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: props.people,
    }
  }

  togglePresent = (studentEmail) => {
    console.log('Toggling', studentEmail);
    const { students } = this.state;
    //    const students = this.state.students;

    const studentToUpdate = students.find((student) => student.email === studentEmail);

    studentToUpdate.present = !studentToUpdate.present;

    this.setState({
      //students: students,
      students,
    });

  }

  makeCollection () {
    const studentCollection = this.state.students.map((student, i) => {
      return <Student
        name={student.name}
        email={student.email}
        present={student.present}
        class={student.class}
        togglePresent={this.togglePresent}
        key={i}
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
  people: PropType.arrayOf(PropType.shape({
    name: PropType.string.isRequired,
    email: PropType.string.isRequired,
    class: PropType.string,
    present: PropType.bool,
  })),
};


export default StudentCollection;