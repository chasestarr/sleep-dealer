import React, { Component } from 'react';
import { render } from 'react-dom';

import Example from '../../src';

const user = {
  _id: 'user-id-example',
  name: 'Elmer Fudd',
  slack: 'wabbit-season',
};

class Demo extends Component {
  render() {
    return (
      <div>
        <Example user={user} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
