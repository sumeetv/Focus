import React, { Component } from 'react';

// Assets
import cover from '../assets/cover.jpg';

class CoverPage extends Component {

  render() {
    return (
      <div className="App-cover-image">
        <img src={cover} alt="cover" />
      </div>
    );
  }
}

export default CoverPage;
