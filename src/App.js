import React from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection'
import NameDisplay from './components/NameDisplay'

//function App() {
class App extends React.Component {
  //class App extends Component{
  constructor() {
    super()
    this.students = [{ id: 1, name: 'Devin', email: 'dmoney@gmail', class: 'Leaves', present: true },
    { id: 2, name: 'Becca', email: 'bmoney@gmail', class: 'Leaves', present: true },
    { id: 3, name: 'Dee', email: 'dee@dee.dee', class: 'Branches', present: false },
    { id: 4, name: 'Jared', email: 'jared@not-jarred.biz', class: 'Branches', present: true },
    { id: 5, name: 'Tonks', present: false }]
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <NameDisplay />
          <StudentCollection people={this.students} />
        </header>
      </div>
    );
  }
}

export default App;
