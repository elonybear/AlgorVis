//Library functions
import {connect} from 'react-redux';

//Dumb component
import TopicGroup from '../../components/Topics/TopicGroup';

//actions
import {
  expandGroup, 
  contractGroup
} from '../../actions/expandedGroups';

function mapStateToProps (state) {
  return {
    expandedGroups: state.expandedGroups 
  }
}

function mapDispatchToProps (dispatch) {
  return {
    expandGroup: (topicName) => {
      dispatch(expandGroup(topicName));
    },
    contractGroup: (topicName) => {
      dispatch(contractGroup(topicName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicGroup);
