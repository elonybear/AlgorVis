import React from 'react';

import SmartTopicListItem from '../../containers/Topics/SmartTopicListItem';

import '../../scss/components//TopicGroup.scss';

export default class TopicGroup extends React.Component {
  constructor (props) {
    super(props);
  }

  getTopics () {
    return this.props.group.topics.map(
      (topic, index) => 
        <SmartTopicListItem key={index} topic={topic} last={this.props.last && index == this.props.group.topics.length - 1}/>
    );
  }

  determineOpenMenuAction () {
    const group = this.props.group;
    if (group.name in this.props.expandedGroups) {
      //close required   
      this.props.contractGroup(group.name);
    } else {
      //open required
      this.props.expandGroup(group.name);
    }
  }

  render () {

    const group = this.props.group;

    console.log("Group " + group.name + " first? " + this.props.first)
    console.log("Group " + group.name + " last? " + this.props.last)

    const pClasses = "m-none p-xlg topic-group-p" 
                        + (this.props.first ? " topic-group-p-first" : "")
                        + (this.props.last && !(group.name in this.props.expandedGroups) ? " topic-group-p-last" : "")

    return (
      <li className="no-style-list topic-group" onClick={this.determineOpenMenuAction.bind(this)}>
        <p className={pClasses}>{group.name}</p>
        <ul className="p-none">
          {group.name in this.props.expandedGroups 
            && this.getTopics()}
        </ul>
      </li>
    );
  }
}
