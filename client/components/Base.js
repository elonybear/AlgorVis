import React from 'react';

import SmartTopicMenu from '../containers/Topics/SmartTopicMenu';
import SmartMainDisplay from '../containers/SmartMainDisplay';

import "../scss/utilities/main.scss";
import "../scss/base/main.scss";
import "../css/vendors/ripple.min.css";

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="base-wrapper h-full">
        <div className="w-30 pull-left h-full p-lg border-box">
          <SmartTopicMenu />
        </div>
        <div className="w-70 pull-right h-full p-lg border-box">
          <SmartMainDisplay />
        </div>
      </div>
    )
  }
}
