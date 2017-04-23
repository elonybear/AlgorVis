//Libraries
import React from 'react';

//Containers
import SmartTopicGroup from '../../containers/Topics/SmartTopicGroup'; 
import Displays from '../Displays/Displays.export';

//SCSS
import '../../scss/components/Topics/TopicMenu.scss';

export default class TopicMenu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {}
  }

  getGroups () {
    return this.props.availableGroups.map(
      (group, index) =>
        <SmartTopicGroup 
          key={index} 
          group={group} 
          first={index == 0} 
          last={index == this.props.availableGroups.length - 1}
          displays={Displays[group.name]}
        />
    );
  }

  render() {
    return (
      <div id="topic-menu-wrapper" className="h-full pull-left of-hidden w-full">
        <ul className="p-none scroll">{this.getGroups()}</ul>
      </div>
    );
  }
}
