import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    count : 0,
    tags : ['noor' , 'samsi' , 'sonu']
  };

  handleEvent = () => {
    this.setState({count : this.state.count +1})
    console.log("Increment clicked");
  }
    render(){
      let cal = "btn m-2 btn-";
      cal += this.state.count === 0 ? "warning" : "primary";
    return (
        <div className="App">
            <span className = {cal}>{this.formateCount()}</span>
            <button onClick = {this.handleEvent} className = "btn btn-primary">Increment++</button>
          
        </div>
    );
  }
  formateCount(){
    return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default App;
