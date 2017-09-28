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
          <h2 className="Cover-page-blurb">
            {"Sumeet is an engineering manager in San Francisco \
            with too many interests and not enough time"}
          </h2>
        </div>
      </div>
    );
  }
}

export default CoverPage;
