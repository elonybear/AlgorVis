import React from 'react';

//SCSS
import '../../scss/components/Topics/TopicListItem.scss';

//CSS
import "../../css/effects/ripple.css";
import {ripple} from '../../js/effects/ripple';

export default class TopicListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      payload: {
        topic: this.props.topic,
        display: this.props.display
      }
    }
  }

  handleTopicClick (event) {
    event.stopPropagation();
    this.props.setSelectedTopic(this.state.payload);
  }

  render () {

    let liClasses = "no-list-style m-none p-lg topic-list-item";

    if (this.props.empty) {
      return (
        <li className={liClasses + " italicized grayed"}>
          There are not any topics for this category yet. 
          <br />
          Coming soon though!
        </li>
      );
    }

    liClasses += (this.props.topic.name == this.props.selectedTopic.name ? 
                    " active-topic-list-item" : " inactive-topic-list-item");


    return (
      <li className={liClasses} onClick={this.handleTopicClick.bind(this)}>
        {this.props.topic.name}
      </li>
    );
  }
}
