import React, { Component } from 'react';
import styles from './styles.css';

export default class extends Component {
  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div className={styles.root}>
        <div className={styles.h4}>Hello, {this.props.user.name}</div>
        <div className={styles.p}>{this.props.user._id}</div>
        <button
          className={styles.button}
          onClick={() => console.log(`i can grab user data '${this.props.user.slack}'`)}
        >
          Click to log user slack
        </button>
      </div>
    );
  }
}
