import React from 'react';

class NameDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Ada',
      displayName: false
    };
  }

  render() {
    let display = 'Sorry, I don\'t know your name.';
    if (this.state.displayName) {
      display = `Hello, ${this.state.name}.`;
    }
    return (
      <section>
        { display }
      </section>
    );
  }
}

export default NameDisplay;