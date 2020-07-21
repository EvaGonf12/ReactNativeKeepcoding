import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import styles from './styles';
import {BASE_URL} from '../../../config/api';


class CatsListCell extends React.Component {
  
  _onPressButton = () => {
    this.props.onPress(this.props.catInfo);
  };

  render() {
    const {catInfo} = this.props;
    const image = catInfo.imageURL
      ? {uri: catInfo.imageURL}
      : require('../../../assets/images/grumpy-cat-foto.jpg');

    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={this._onPressButton}>
        <Image source={image} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{catInfo.name}</Text>
          <Text style={styles.info}>{catInfo.temperament}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CatsListCell.defaultProps = {
  onPress: () => {}
};

CatsListCell.propTypes = {
  catInfo: PropTypes.object.isRequired,
  image: PropTypes.string,
  onPress: PropTypes.func
};

export default CatsListCell;
