import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading: loading},
  };
  return action;
};

const updateList = (list, total) => {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: list, total: total},
  };
  return action;
};

// export const fetchDetails = () => {
//   return async (dispatch, getState) => {
//     const breed = getState().breeds.item;
//     if (!breed) {
//       Alert.alert('Atención', 'No hay una raza seleccionada');
//       return;
//     }

//     try {
//       dispatch(setLoading(true));
//       const getDetailsRes = await api.getCharacters(house.id);
//       const list = getDetailsRes.data.records;
//       const total = parseInt(getDetailsRes.data.total);
//       dispatch(updateList(list, total));
//     } catch (e) {
//       Alert.alert('Error', e.message || 'Ha ocurrido un error');
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
// };

// export const postDetail = (data) => {
//   return async (dispatch, getState) => {
//     const breed = getState().breeds.item;
//     if (!breed || !data) {
//       Alert.alert('Atención', 'Faltan datos por completar');
//       return;
//     }

//     try {
//       dispatch(setLoading(true));
//       await api.postDetails(data);
//       dispatch(fetchDetails());
//       Alert.alert('Genial', `${data.nombre} creado!`, [
//         {text: 'Aceptar', onPress: Actions.pop},
//       ]);
//     } catch (e) {
//       Alert.alert('Error', e.message || 'Ha ocurrido un error');
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
// };
