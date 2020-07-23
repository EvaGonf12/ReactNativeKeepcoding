import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%"
  },
  image: {
    height: "40%",
    width: "60%",
    borderRadius: 12,
    marginTop: 20
  },
  title: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '500',
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10
  },
  button: {
    width: "80%",
    height: 44,
    marginHorizontal: 20,
    marginTop: 20
  }
});

export default styles;
