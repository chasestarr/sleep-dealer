import React, { Component } from 'react';
import 'fortune-css';

export default class extends Component {
  render() {
    return (
      <div className="alert alert-success w-33">
        <h4>sleep-dealer</h4>
        <button onClick={() => console.log('click button')}>Button</button>
      </div>
    );
  }
}
