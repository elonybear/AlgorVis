//Libraries
import React from 'react';

//Containers
import SmartTopicGroup from '../../containers/Topics/SmartTopicGroup'; 

export default class TopicMenu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {}
  }

  getGroups () {
    return this.props.availableGroups.map(
      (group, index) =>
        <SmartTopicGroup key={index} group={group} first={index == 0} last={index == this.props.availableGroups.length - 1}/>
    );
  }

  render() {
    return <ul className="p-none">{this.getGroups()}</ul>;
  }
}
