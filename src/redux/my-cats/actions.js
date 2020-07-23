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

export const fetchMyCats = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const myCatsList = getState().myCats.list;
      console.log(myCatsList);
      dispatch(updateList(myCatsList));
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

export const postCat = (data) => {
  return async (dispatch, getState) => {
    const myCatsList = getState().myCats.list;
    if (!myCatsList || !data) {
      Alert.alert('Error', 'Data is not completed');
      return;
    }
    myCatsList.push(data)
    dispatch(setLoading(true));
    dispatch(fetchMyCats());
    Alert.alert('Cat Added', `${data.nombre} has been added correctly!`, [
      {text: 'OK', onPress: Actions.pop},
    ]);
    dispatch(setLoading(false));
  };
};