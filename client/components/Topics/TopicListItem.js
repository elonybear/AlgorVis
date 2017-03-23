import React from 'react';

import '../../scss/components/TopicListItem.scss';

export default class TopicListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {}
  }

  handleSubtopicClick (event) {
    event.stopPropagation();
    this.props.setSelectedTopic(this.props.topic);
  }

  render () {

    const pClasses = "m-none p-xlg topic-list-item-p" + (this.props.last ? " topic-list-item-p-last" : "");

    return (
      <p className={pClasses}>{this.props.topic.name}</p>
    );
  }
}
