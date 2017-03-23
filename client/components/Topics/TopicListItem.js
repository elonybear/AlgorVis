import React from 'react';

//SCSS
import '../../scss/components/TopicListItem.scss';

//CSS
import "../../css/effects/ripple.css";
import {ripple} from '../../js/effects/ripple';

export default class TopicListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      clicked: false
    }

  }

  handleTopicClick (event) {
    event.stopPropagation();
    if(this.state.clicked) return;
    this.props.setSelectedTopic(this.props.topic);
    ripple(event.target, event);
    this.setState({clicked: true});
    setTimeout(() => {
      this.setState({clicked: false}); 
    }, 1000);
  }

  render () {

    let liClasses = "no-list-style m-none p-xlg topic-list-item";

    if (this.props.empty) {
      return (
        <li className={liClasses + " italicized grayed"}>
          There are not any topics for this category yet. 
          <br />
          Coming soon though!
        </li>
      );
    }

    liClasses += (this.props.last ? " topic-list-item-last" : "")
      + (this.props.topic.name == this.props.selectedTopic.name ? " active-topic-list-item" : " inactive-topic-list-item");


    return (
      <li className={liClasses} onClick={this.handleTopicClick.bind(this)}>
        {this.props.topic.name}
      </li>
    );
  }
}
