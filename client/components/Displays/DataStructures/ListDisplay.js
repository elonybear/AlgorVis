import React from 'react';

import List from './Lists/List';

export default class ListDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="ListDisplayWrapper">
        <div id="ListDisplay">
          <List />
        </div>
        <div> id="ListInteractiveWindow">
          <div id="List_pushfront">    

          </div>
          <div id="List_pushback">

          </div>
          <div id="List_popfront">    

          </div>
          <div id="List_popback">

          </div>
          <div id="List_iteration">

          </div>
          <div id="List_copy">

          </div>
        </div>
      </div>
    );
  }
}
