import {ACTION_ENUMS} from '../utilities';

export default function selectedTopic(state = {}, action) {
  switch(action.type) {
    case ACTION_ENUMS.SET_SELECTED_TOPIC:
      return action.topic;
    default:
      return state;
  }
}
