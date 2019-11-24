import React from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection'
import NameDisplay from './components/NameDisplay'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      students: [ { name: 'Devin', email: 'dmoney@gmail', class: 'Leaves', present: true } ,
        { name:'Becca', email: 'bmoney@gmail', class: 'Leaves', present: true  },
        { name: 'Dee', email: 'dee@dee.dee', class: 'Branches', present: false  }, 
        { name:'Jared', email: 'jared@not-jarred.biz', class: 'Branches', present: true  },
        { name: 'Tonks', present: false}]
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <NameDisplay />
        </header>
        
        <p className="App-header">
          <StudentCollection people={this.state.students}/>
        </p>
        
      </div>
    );
  }
}

export default App;
