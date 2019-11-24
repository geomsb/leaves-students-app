import React from 'react';
import PropTypes from 'prop-types';

class NameDisplay extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "Ada",
            displayName: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => {
        this.setState({displayName: !this.state.displayName})
    }

    handleChange = (event) => {
        this.setState({name: event.target.value})
    }

    render() {
        
        let display = 'Sorry, I don\'t know your name.';
        if (this.state.displayName) {
          display = `Hello, ${this.state.name}.`;
        }
        return (
          <section>
            { display }
            <button onClick={this.handleClick}>Toggle Display</button>
            Change your name: <input onChange={this.handleChange}></input>
          </section>
          
        );
      }
    }
    
export default NameDisplay;