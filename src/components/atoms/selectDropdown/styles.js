import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {},
  input: {
    marginBottom: 20,
  },
  title: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: 'System',
  },
  placeholder: {
    fontSize: 16,
    color: colors.grey
  }
});
