import {connect} from 'react-redux';
import View from './view';
import {myCatsActions} from '../../../redux/my-cats';

const mapStateToProps = (state) => {
  return {
    loading: state.myCats.loading,
    myCatsList: state.myCats.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyCatsList: () => dispatch(myCatsActions.fetchMyCats())
  };
};

// Conectamos con la vista
export default connect(mapStateToProps, mapDispatchToProps)(View);
