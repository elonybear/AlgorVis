import React from 'react';

export default class Node extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    var elem = document.querySelector('.pulse');
    var animation = elem.animate({
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],

    }, {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    });
  }

  render() {
    return <div className={"list-node pulse " + this.props.color}>{this.props.value}</div> 
  }
}
