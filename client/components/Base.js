import React from 'react';

import SmartTopicMenu from '../containers/Topics/SmartTopicMenu';

import "../scss/utilities/main.scss";
import "../scss/base/main.scss";
import "../css/vendors/ripple.min.css";

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <SmartTopicMenu />
  }
}
