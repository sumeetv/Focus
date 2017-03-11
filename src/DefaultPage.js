import React, { Component } from 'react';

import './App.css';

class DefaultPage extends Component {
  render() {
    console.log("rendering the default page");
    return (
      <div>
        <h1>
          {"This isn't my first rodeo"}
        </h1>
      </div>
    );
  }
}

export default DefaultPage;
