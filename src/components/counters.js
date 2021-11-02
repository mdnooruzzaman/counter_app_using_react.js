import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
    state = {
        counters : [
            {id : 1 , value : 4},
            {id : 2 , value : 0},
            {id : 3 , value : 0},
            {id : 4 , value : 0},
            {id : 5 , value : 9},
            {id : 6 , value : 0},
        ]
    }
    handleDelete = (counterId) => {
        console.log('item is being deleted' , counterId)
        const counter = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counter});
    }
   handleIncreament = (counter) => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = {...counter}
       counters[index].value++;
      this.setState({counters});
   }

   handleReset = () =>{
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({counters});
   }
    render(){
     
        return(
            <div>
                <button onClick={this.handleReset} className = "btn btn-dark m-2 sm-2">Reset</button>
                {
                this.state.counters.map(count =>
                     (
                     <Counter 
                     key={count.id} 
                     id={count.id} 
                     value={count.value} 
                     counter = {count}
                     onDelete={this.handleDelete}
                     onIncreament={this.handleIncreament}/>
                     )
                )
                }
            </div>
        );
    }
}
export default counters;