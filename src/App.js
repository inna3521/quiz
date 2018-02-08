import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputChecked: ''
    }
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <Question tag='foo'/>
      <Question tag='bar'/>

      {/* <div className="">
        <input id="i4" type="radio" name="n2" value="d" onChange={(e) => this.handleChange(e)} checked={this.state.inputChecked === 'd'} />
        <label htmlFor="i4">Two-One</label><br/>
        <input id="i5" type="radio" name="n2" value="e" onChange={(e) => this.handleChange(e)} checked={this.state.inputChecked === 'e'} />
        <label htmlFor="i5">Two-Two</label><br/>
        <input id="i6" type="radio" name="n2" value="f" onChange={(e) => this.handleChange(e)} checked={this.state.inputChecked === 'f'} />
        <label htmlFor="i1">Two-Three</label><br/>
      </div> */}
    </div>);
  }
}

export default App;
