import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 104,
    backgroundColor: colors.whiteDark,
    marginHorizontal: 20,
    borderRadius: 12,
    marginTop: 20
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.white,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 12
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 12,
    marginRight: 10
  },
  title: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '500'
  },
  catInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginTop: 5
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  itemInfoTitle: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '400'
  },
  itemInfoTxt: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'italic',
    marginRight: 20,
    textAlign: "left"
  }
});

export default styles;
