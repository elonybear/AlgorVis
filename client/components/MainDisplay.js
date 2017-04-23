import React from 'react';

import '../scss/components/MainDisplay.scss';

export default class Display extends React.Component {
  constructor (props) {
    super(props);
  }

  renderDisplay () {
    if (this.props.ActiveDisplay) {
      return <this.props.ActiveDisplay />;
    }
  }

  render () {
    return (
      <div id="main-display-wrapper" className="h-full">{this.renderDisplay()}</div>
    )
  }
}
