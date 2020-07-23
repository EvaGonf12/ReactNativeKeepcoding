import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  names: [],
  item: null,
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

    case types.UPDATE_NAMES:
      return {
        ...state,
        names: action.payload.names
      };

    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case types.SET_ITEM:
      return {...state, item: action.payload.item};

    default:
      return state;
  }
};

export default reducer;