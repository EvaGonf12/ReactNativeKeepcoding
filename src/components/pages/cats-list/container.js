import {connect} from 'react-redux';
import View from './view';
import {breedsActions} from '../../../redux/breeds';

const mapStateToProps = (state) => {
  return {
    loading: state.breeds.loading,
    breedsList: state.breeds.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCatsList: () => dispatch(breedsActions.fetchBreeds()),
    setSelectedBreed: (breed) => dispatch(breedsActions.setItem(breed))
  };
};

// Conectamos con la vista
export default connect(mapStateToProps, mapDispatchToProps)(View);
