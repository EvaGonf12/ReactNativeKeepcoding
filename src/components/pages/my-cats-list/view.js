import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';

// MOLECULES
import {MyCatsListCell} from "../../molecules";

// ASSETS
import colors from '../../../assets/colors';

class MyCatsList extends React.Component {
  
  componentDidMount() {
    this.props.getMyCatsList()
  }

  _renderItem = ({item}) => (
    <MyCatsListCell catInfo={item}/>
  );

  render() {
    const loading = this.props.loading;
    const myCatsList = this.props.myCatsList;
    console.log(myCatsList)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={myCatsList}
          keyExtractor={(item, index) => `my-cat-${index}`}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              colors={[colors.primary]}
              tintColor={colors.primary}
              refreshing={loading}
              onRefresh={this.props.getMyCatsList}
              title={'Loading...'}
              titleColor={colors.black}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

MyCatsList.propTypes = {
  myCatsList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getMyCatsList: PropTypes.func
};

export default MyCatsList;
