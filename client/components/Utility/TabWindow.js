import React from 'react';

export default class TabWindow extends React.Component {
  constructor (props) {
    super(props); 
  }

  render () {
    <div id=`tab_window_${this.props._rootNodeID}` className="tab_window">
      <div className="tab_list">

      </div>
    </div>
  }
}
