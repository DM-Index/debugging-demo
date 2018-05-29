import React, { Component } from 'react';
import './Parts.css';

export default function Part2(props) {
  // render() {
  return (
    <div className="partTwo">
      <div>Part 2</div>
      <div>{props.quote}</div>
    </div>
  );
  // }
}
