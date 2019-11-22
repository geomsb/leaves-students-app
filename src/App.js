import React from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection'

function App() {
  const students = [ { name: 'Devin', email: 'dmoney@gmail', class: 'Leaves', present: true } ,
                     { name:'Becca', email: 'bmoney@gmail', class: 'Leaves', present: true  },
                     { name: 'Dee', email: 'dee@dee.dee', class: 'Branches', present: false  }, 
                     { name:'Jared', email: 'jared@not-jarred.biz', class: 'Branches', present: true  },
                     { name: 'Tonks', present: false}]

  return (
    <div className="App">
      <header className="App-header">
        <StudentCollection people={students}/>
      </header>
    </div>
  );
}

export default App;
