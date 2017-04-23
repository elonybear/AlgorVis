import {ACTION_ENUMS} from '../utilities';

/*
 * Data should contain the topic name and the topic display React Component
 */
export function setSelectedTopic (data) {
  return {
    type: ACTION_ENUMS.SET_SELECTED_TOPIC,
    data
  }
}
