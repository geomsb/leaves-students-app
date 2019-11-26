import React from 'react';
import PropTypes from 'prop-types';

import Student from './Student';

//const StudentCollection = (props) => {
class StudentCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: props.people,
    };
  }

  makeCollection () {
    const studentCollection = this.state.people.map((student, i) => {
      return <Student name={student.name} email={student.email} present={student.present} class={student.class} key={i} />;
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
    email: PropTypes.string,
    class: PropTypes.string,
    present: PropTypes.bool.isRequired,
  })).isRequired,
};


export default StudentCollection;