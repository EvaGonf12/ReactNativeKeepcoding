import {connect} from 'react-redux';
import View from './view';
import {breedsActions} from '../../../redux/breeds';

const mapStateToProps = (state) => {
  return {
    loading: state.breeds.loading,
    breedsList: state.breeds.list,
    total: state.breeds.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initBreedsList: () => dispatch(breedsActions.initList()),
    getCatsList: () => dispatch(breedsActions.fetchBreeds()),
    setSelectedBreed: (breed) => dispatch(breedsActions.setItem(breed)),
    fetchNextCatsPage: () => dispatch(breedsActions.fetchNextPage()),
  };
};

// Conectamos con la vista
export default connect(mapStateToProps, mapDispatchToProps)(View);
