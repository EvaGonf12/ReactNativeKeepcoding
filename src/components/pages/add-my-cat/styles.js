import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 18,
    height: 200,
    backgroundColor: colors.whiteDark,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageLabel: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'System',
    marginTop: 10
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
    marginTop: 20
  },
  errorContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  errorIcon: {},
  errorTxt: {
    color: colors.error,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'System',
    marginLeft: 10,
    paddingTop: 2
  }
});

export default styles;