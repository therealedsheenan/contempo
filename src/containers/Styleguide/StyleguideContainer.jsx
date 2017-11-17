// @flow

import React from 'react';

export default class StyleguideContainer extends React.Component {
  state = {
    status: 'close'
  };

  openModal = () => {
    this.setState({
      status: 'open'
    });
  };

  closeModal = () => {
    this.setState({
      status: 'close'
    });
  };

  render() {
    return (
      <div className="Styleguide" style={{ backgroundColor: 'red', width: '100%', height: '100vh' }}>
        <p style={{ textAlign: 'center' }}>this is the style guide!</p>
        <button onClick={this.openModal}>Open</button>
        <div className={`overlay overlay-door ${this.state.status}`}>
          <div className="content">
            <button onClick={this.closeModal}>X</button>
          </div>
        </div>
      </div>
    );
  }
}
