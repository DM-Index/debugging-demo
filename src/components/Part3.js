// import React, { Component } from 'react';
// import axios from "axios";
// import "./parts.css"

// export default class Part3 extends Component {
//   constructor(){
//     super()

//     this.state = {
//       list: []
//   }

//   componentDidMount() {
//     axios.get('https://swapi.co/api/people').then((respsonse)=>
//       this.setState({list: response.data.results})
//     )
//   }

//   render() {
//     const author = "Brian W. Kernighan"
//     return (
//       <div className="partThree">
//         <h2>Part 3</h2>
//         <div>{this.state.list}</div>
//         <div>"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." </div>
//         <div>{'Author - ${author}'}</div>
//       </div>
//     )
//   }
// }
