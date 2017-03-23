import React from 'react';

import SmartTopicListItem from '../../containers/Topics/SmartTopicListItem';

import '../../scss/components//TopicGroup.scss';

export default class TopicGroup extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      list_id: props.group.name.replace(/\s+/g, '') + "-list"
    }
  }

  getTopics () {

    if (this.props.group.topics.length == 0) {
      return [
        <SmartTopicListItem key={-1} empty={true} />
      ]
    }

    return this.props.group.topics.map(
      (topic, index) => 
        <SmartTopicListItem 
          key={index} 
          topic={topic} 
          last={this.props.last && index == this.props.group.topics.length - 1}
        />
    );
  }

  determineOpenMenuAction (e) {

    console.log("determineOpenMenuAction ");
    console.log(e.target);

    const group = this.props.group;
    if (group.name in this.props.expandedGroups) {
      //close required   
      this.props.contractGroup(group.name);
      $('#' + this.state.list_id).slideUp();
    } else {
      //open required
      this.props.expandGroup(group.name);
      $('#' + this.state.list_id).slideDown();
    }
  }

  render () {

    const group = this.props.group;

    const pClasses = "m-none p-xlg topic-group-p" 
                        + (this.props.first ? " topic-group-p-first" : "")
                        + (this.props.last && !(group.name in this.props.expandedGroups) ? " topic-group-p-last" : "")

    return (
      <li className="no-style-list topic-group" onClick={this.determineOpenMenuAction.bind(this)}>
        <p className={pClasses}>{group.name}</p>
        <ul id={this.state.list_id} className="p-none no-display">
          {this.getTopics()}
        </ul>
      </li>
    );
  }
}
