//library functions
import {combineReducers} from 'redux';

//reducers
import selectedTopic from './selectedTopic';
import expandedGroups from './expandedGroups';
import availableGroups from './availableGroups';

export default combineReducers({
  selectedTopic,
  expandedGroups,
  availableGroups
});
