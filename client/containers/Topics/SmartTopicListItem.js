//Library functions
import {connect} from 'react-redux';

//Dumb component
import TopicListItem from '../../components/Topics/TopicListItem';

//action functions
import {setSelectedTopic} from '../../actions/selectedTopic';

//Utilities
import {ACTION_ENUMS} from '../../utilities';

function mapStateToProps (state) {
  return {
    selectedTopic: state.selectedTopic
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setSelectedTopic: (data) => {
      dispatch(setSelectedTopic(data))
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TopicListItem);
