import React from 'react';
import Student from './Student';

const StudentCollection = (props) => {

  const studentCollection = props.people.map((student, i) => {
      return <Student name={student.name} email={student.email} present={student.present} class={student.class} key={i} />;
    }
  );

  return(
    <ul>
      {studentCollection}
    </ul>
  );
};

export default StudentCollection;