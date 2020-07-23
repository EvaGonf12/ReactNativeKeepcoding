import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

// MOLECULES
import {CatsListCell} from "../../molecules";

// ASSETS
import colors from '../../../assets/colors';
import images from "../../../assets/images";

class CatsList extends React.Component {

  componentDidMount() {
    this.props.initBreedsList();
  }

  _onBreedPress = (breed) => {
    this.props.setSelectedBreed(breed)
    Actions.push('BreedDetails', {})
  }

  _renderItem = ({item}) => (
    <CatsListCell catInfo={item} onPress={this._onBreedPress}/>
  );

  _onEndReached = ({distanceFromEnd}) => {
    const {breedsList, total, loading} = this.props;
    const numElements = _.size(breedsList);
    if (!loading && numElements > 0 && numElements < total) {
      this.props.fetchNextCatsPage();
    }
  } 

  render() {
    const loading = this.props.loading;
    const breedsList = this.props.breedsList;
    const total = this.props.total;

    return (
      <SafeAreaView style={styles.container}>
        {
          loading ? 
          <LottieView style={styles.lottie} source={images.loading} autoPlay loop />
          : null
        }

        <FlatList
          style={styles.flatlist}
          data={breedsList}
          keyExtractor={(item, index) => `cat-${index}`}
          renderItem={this._renderItem}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={this.props.getCatsList}
            />
          } 
        />
      </SafeAreaView>
    );
  }
}

/* CatsList.defaultProps = {
  loading: true
} */

CatsList.propTypes = {
  breedsList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getCatsList: PropTypes.func,
  setSelectedBreed: PropTypes.func,
  total: PropTypes.number,
};

export default CatsList;
