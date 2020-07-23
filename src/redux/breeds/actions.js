import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import _ from 'lodash';

const ITEMS_PER_PAGE=10;
const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading}
  };
  return action;
};

const updatePage = (page) => {
  const action = {
    type: types.UPDATE_PAGE,
    payload: {page},
  };
  return action;
};


function updateList(newList, total) {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: newList, total: total}
  };
  return action;
}

function updateNames(newList) {
  console.log("UPDATE NAMES")
  const action = {
    type: types.UPDATE_NAMES,
    payload: {names: newList}
  };
  return action;
}

export const initList = () => {
  return (dispatch) => {
    dispatch(updateList([]));
    dispatch(updatePage(0));
    dispatch(fetchBreeds());
  };
};

export const fetchNextPage = () => {
  return (dispatch, getState) => {
    const {page, list, total} = getState().breeds;
    const listSize = _.size(list);
    if (listSize < total) {
      const newPage = page + 1;
      dispatch(updatePage(newPage));
      dispatch(fetchBreeds());
    }
  };
};

export const setItem = (item) => {
  const action = {
    type: types.SET_ITEM,
    payload: {item: item},
  };
  return action;
};

export const getBreed = () => {
  return (dispatch, getState) => {
    const breed = getState().breeds.item;
    if (!breed) {
      Alert.alert('Attention!', 'There is no breed selected');
      return;
    }
    dispatch(setItem(breed));
  };
};

export const fetchBreeds = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const {list, page} = getState().breeds;
      const params = {
        limit: ITEMS_PER_PAGE,
        offset: ITEMS_PER_PAGE * page
      }
      const getBreedsRes = await api.getBreeds();
      const total =  _.toNumber(_.get(getBreedsRes, 'data.total', 0));
      const resList = _.get(getBreedsRes, 'data', []);

      const newList = [...list, ...resList]

      await Promise.all(
        newList.map(async element => {
          const imageData = await api.getImageBreed(element.id);
          element['imageURL'] = imageData.data[0].url;
        }),
      );
      dispatch(updateList(newList, total));
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'Has been an error on get breeds',
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getBreedsNames = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const getBreedsRes = await api.getBreeds();
      const list = getBreedsRes.data;
      const names = []
      await Promise.all(
        list.map(element => {
          names.push({label: element.name, value: element.name})
        })
      );
      console.log(names);
      dispatch(updateNames(names));
    } catch (error) {
      Alert.alert(
        'Error',
        e.message || 'Has been an error on get breeds',
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
}
