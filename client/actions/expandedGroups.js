import {ACTION_ENUMS} from '../utilities';

export function expandGroup (topicName) {
  return {
    type: ACTION_ENUMS.EXPAND_GROUP,
    topicName
  }
}

export function contractGroup (topicName) {
  return {
    type: ACTION_ENUMS.CONTRACT_GROUP,
    topicName
  }
}
