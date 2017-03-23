//Library functions
import {connect} from 'react-redux';

//Dumb component
import TopicMenu from '../../components/Topics/TopicMenu';

function mapStateToProps (state) {
  return {
    availableGroups: state.availableGroups
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicMenu);
