import {connect} from 'react-redux';
import View from './view';
import {myCatsActions} from '../../../redux/my-cats';
import {breedsActions} from '../../../redux/breeds';

const mapStateToProps = (state) => {
  return {
    loading: state.breeds.loading,
    names: state.breeds.names
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBreedsNames: () => dispatch(breedsActions.getBreedsNames()),
    postMyCat: (data) => dispatch(myCatsActions.postCat(data))
  };
};

// Conectamos con la vista
export default connect(mapStateToProps, mapDispatchToProps)(View);
