import React, { Component } from 'react';

class WorkHistoryItem extends Component {
  render() {
    return (
      <div className="Work-history-item">
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default WorkHistoryItem;
