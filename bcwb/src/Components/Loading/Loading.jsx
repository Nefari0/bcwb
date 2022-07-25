import React, { Component } from 'react';
import './Loading.scss'

class Loading extends Component {
  render() {
    return (
      <div className="load-wrapp">
        <div className="load-3">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    )
  }
}

export default Loading;