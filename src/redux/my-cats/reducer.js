import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  total: 0
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {
        ...state,
        list: action.payload.list,
        total: action.payload.total,
      };
    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    default:
      return state;
  }
};

export default reducer;
