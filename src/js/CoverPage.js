import React, { Component } from 'react';

import '../css/CoverPage.css';

// Assets
import cover from '../assets/cover.jpg';

class CoverPage extends Component {

  render() {
    return (
      <div className="Cover-page">
        <div className="Cover-page-header">
          <div className="Cover-page-image">
            <img src={cover} alt="cover" />
          </div>
        </div>
        <div className="Cover-page-footer">
        </div>
      </div>
    );
  }
}

export default CoverPage;
