import {StyleSheet, Platform} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  title: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle: {
    marginHorizontal: 20,
    marginTop: 17,
    fontStyle: "italic"
  },
  p: {
    fontWeight: "500"
  },
  img: {
    height: 13,
    width: 85
  },
  viewFirts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 20
  },
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20
  },
  pSection: {
    fontWeight: "700",
    marginTop: 30,
    marginHorizontal: 20
  },
  description: {
    marginHorizontal: 20,
    marginTop: 17
  }
});

export default styles;