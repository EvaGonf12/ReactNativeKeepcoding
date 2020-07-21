import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

// MOLECULES
import {CatsListCell} from "../../molecules";

// ASSETS
import colors from '../../../assets/colors';

class CatsList extends React.Component {
  componentDidMount() {
    this.props.getCatsList();
  }

  _onBreedPress = (breed) => {
    this.props.setSelectedBreed(breed)
    Actions.push('BreedDetails', {})
  }

  _renderItem = ({item}) => (
    <CatsListCell catInfo={item} onPress={this._onBreedPress}/>
  );

  render() {
    const loading = this.props.loading;
    const breedsList = this.props.breedsList;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={breedsList}
          keyExtractor={(item, index) => `cat-${item.id}`}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              colors={[colors.primary]}
              tintColor={colors.primary}
              refreshing={loading}
              onRefresh={this.props.getCatsList}
              title={'Loading...'}
              titleColor={colors.black}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

CatsList.propTypes = {
  breedsList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getCatsList: PropTypes.func,
  setSelectedBreed: PropTypes.func
};

export default CatsList;
