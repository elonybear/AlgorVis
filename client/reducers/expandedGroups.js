import {ACTION_ENUMS} from '../utilities';

export default function expandedGroups(state = {}, action) {
  switch (action.type) {
    case ACTION_ENUMS.EXPAND_GROUP:
      return {
        ...state,
        [action.topicName]: 1
      };
    case ACTION_ENUMS.CONTRACT_GROUP:
      let next_state = {...state};
      delete next_state[action.topicName];
      return next_state;
    default:
      return state;
  }
}
