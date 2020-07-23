import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
  },
  title: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: 'System',
  },
  input: {
    color: colors.black,
    fontSize: 16,
    borderRadius: 22,
    minHeight: 44,
    backgroundColor: colors.whiteDark,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  errorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '10',
  },
  errorIcon: {},
  errorTxt: {
    color: colors.error,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'System',
  },
});
