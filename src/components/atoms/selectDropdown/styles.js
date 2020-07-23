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
  select: {
    color: colors.black,
    paddingHorizontal: 10,
    backgroundColor: colors.whiteDark,
    borderRadius: 22,
    height: 44,
    fontSize: 16,
    marginTop: 10,
  },
  placeholder: {
    fontSize: 16,
    color: colors.grey
  }
});
