import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 104,
    width: '100%',
    backgroundColor: colors.whiteDark,
    borderRadius: 12,
    marginBottom: 20
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 12
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginVertical: 12,
    marginRight: 10
  },
  title: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '500'
  },
  info: {
    color: colors.grey,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'italic'
  }
});

export default styles;
