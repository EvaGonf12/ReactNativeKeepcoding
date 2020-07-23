import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginTop: 20
  },
  lottie: {
    height: 120,
    width: "100%",
  },
  flatlist: {
    width: "100%"
  }
});

export default styles;