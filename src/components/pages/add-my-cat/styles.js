import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginHorizontal: 20
  },
  img: {
    marginTop: 0,
    width: "100%",
    height: 164
  },
  input: {
    marginBottom: 20
  },
  button: {
    marginTop: 50
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
  }
});

export default styles;