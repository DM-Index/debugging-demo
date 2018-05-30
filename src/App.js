import React, { Component } from 'react';

import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import part4 from './components/part4';

class App extends Component {
  constructor(){
    super()

    // To activate a part, change the coorelating state from a 0 to a 1. 
    // Next open the component file and uncomment the code.
    // Debug Go!

    this.state = {
      part1: 0,
      part2: 0,
      part3: 0,
      part4: 0
    }
  }
  
  render() {
    const quote = "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
    return (
      <div>
        <h1>Debugging Demo</h1>
        { this.state.part1 ? <Part1 /> : '' }
        { this.state.part2 ? <Part2 quote={quote} /> : '' }
        { this.state.part3 ? <Part3 /> : '' }
        { this.state.part4 ? <part4 num="7" /> : '' }
      </div>
    );
  }
}

export default App;
