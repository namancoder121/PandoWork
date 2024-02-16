import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // if arrow function is not in use then we bind the value of this
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  // if we use arrow function then there is no need for bind the value of this
  //   incrementCount=()=> {
  //     this.setState({ count: this.state.count + 1 });
  //   }

  //   decrementCount=()=> {
  //     this.setState({ count: this.state.count-1 });
  //   }
  //
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <div>Count:{this.state.count}</div>
 {/* <button onClick={()=>this.setState({ count: this.state.count + 1})}>Incerment</button>
<button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button> */}
        <button onClick={this.incrementCount}>Incerment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </>
    );
  }
}

export default ClassCounter;
