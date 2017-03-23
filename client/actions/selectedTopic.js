import {ACTION_ENUMS} from '../utilities';

export function setSelectedTopic (topic) {
  return {
    type: ACTION_ENUMS.SET_SELECTED_TOPIC,
    topic
  }
}
