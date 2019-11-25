import React from 'react';

class NameDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Ada',
      displayName: false
    };
  }

  onButtonClick = () => {
      this.setState({displayName: !this.state.displayName})
  }

  onNameChange = () => {

  }

  render() {
    let display = 'Sorry, I don\'t know your name.';
    if (this.state.displayName) {
      display = `Hello, ${this.state.name}.`;
    }

    return (
      <section>
        Change your name: <input onChange={this.onNameChange}></input>
        <button onClick={ this.onButtonClick }>Toggle Display</button>
        { display }
      </section>
    );
  }
}

export default NameDisplay;