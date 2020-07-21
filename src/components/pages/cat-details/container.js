import {connect} from 'react-redux';
import View from './view';
import {breedsActions} from '../../../redux/breeds';

const mapStateToProps = (state) => {
  return {
    loading: state.breeds.loading,
    breed: state.breeds.item
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBreed: () => dispatch(breedsActions.getBreed())
  };
};

// Conectamos con la vista
export default connect(mapStateToProps, mapDispatchToProps)(View);
