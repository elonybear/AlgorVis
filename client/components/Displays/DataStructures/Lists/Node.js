import React from 'react';

import '../../../../js/vendors/jquery.path';

export default class Node extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    
  }

  render() {
    return <div className={"list-node pulse " + this.props.color}>{this.props.value}</div> 
  }
}
