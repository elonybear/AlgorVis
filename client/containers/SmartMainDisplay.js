import {connect} from 'react-redux';

import MainDisplay from '../components/MainDisplay';

function mapStateToProps (state) {
  return {
    ActiveDisplay: state.selectedTopic.display
  } 
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDisplay);
