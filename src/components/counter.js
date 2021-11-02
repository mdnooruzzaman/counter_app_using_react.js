import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    handleEvent = () => {
        this.setState({count : this.props.counter.value +1})
        console.log("Increment clicked");
    }
    
        render(){
            let cal = "btn m-2 btn-sm btn-";
            cal += this.props.counter.value === 0 ? "warning" : "success";
            return (
                <div className="App">
                    
                    <span className = {cal}>{this.formateCount()}</span>
                    <button onClick = {() => this.props.onIncreament(this.props.counter)} className = "btn btn-primary btn-sm sm-2 m-2">Increment++</button>
                    <button onClick ={() => this.props.onDelete(this.props.id)} className = "btn btn-danger btn-sm sm-2 m-2">Delete</button>
                </div>
        );
    }
  formateCount(){
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
  }
}

export default App;
