import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

function updateList(newList) {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: newList},
  };
  return action;
}

const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading},
  };
  return action;
};

export const setItem = (item) => {
    console.log("SET ITEM")
  const action = {
    type: types.SET_ITEM,
    payload: {item: item},
  };
  return action;
};

export const getBreed = () => {
    console.log("GET BREED")
  return (dispatch, getState) => {
    const breed = getState().breeds.item;
    console.log(getState().breeds)
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
      const getBreedsRes = await api.getBreeds();
      const list = getBreedsRes.data;
      await Promise.all(
        list.map(async element => {
          const imageData = await api.getImageBreed(element.id);
          element['imageURL'] = imageData.data[0].url;
        }),
      );
      console.log(list);
      dispatch(updateList(list));
    } catch (error) {
      Alert.alert(
        'Error',
        e.message || 'Ha ocurrido un error al obtener el listado',
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};
