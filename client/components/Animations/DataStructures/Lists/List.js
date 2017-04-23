import React from 'react';

import Node from './Node'; 

import '../../../../scss/components/DataStructures/Lists/Node.scss';

export default class List extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <Node value={5} color="purple"/> 
  }
}
