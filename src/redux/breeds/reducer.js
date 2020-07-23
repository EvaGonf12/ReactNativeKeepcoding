import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  total: 0,
  page: 0,
  names: [],
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case types.UPDATE_LIST:
      return {
        ...state,
        list: action.payload.list,
        total: action.payload.total,
      };

    case types.UPDATE_PAGE:
      const newState = {
        ...state,
        page: action.payload.page,
      };
      return newState;

    case types.SET_ITEM:
      return {
        ...state,
        item: action.payload.item,
      };
      
    case types.UPDATE_NAMES:
      return {
        ...state,
        names: action.payload.names,
      };

    default:
      return state;
  }
};

export default reducer;
