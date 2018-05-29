// import React, { Component } from 'react';
// import "./parts.css"

// export default class Part4 extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       input: '',
//       toggle: false
//     }
//   }

//   handleInput(e) {
//     this.setState({input: e.target.value})
//   }

//   render() {
//     console.log(this.state.toggle);
    
//     function handleToggle() {
//       this.setState({toggle: !this.state.toggle})
//     }

//     return (
//       <div className="partFour">
//         <h1> Part 4 <h1/>
//         <input type="text" placeholder="enter text here..." value={this.state.input} onChange={this.handleInput} />
//         <br/>
//         <br/>
//         <div>{this.state.input}</div>
//         <br/>
//         <br/>
//         <input type="button" onClick={()=>this.handleToggle()} value="Click Me" />
//         <br/>
//         <br/>
//         <div>{this.props.num + 3}</div>
//       </div>
//     );
//   }
// }