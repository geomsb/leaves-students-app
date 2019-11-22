import React from 'react';

const ComponentB = (props) => {
  return (
    <div>
      This Tweet has { props.numericValue } like
      When I click it, it will run the { props.callbackFunc } method
    </div>
  );
};

export default ComponentB;