import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import styles from './styles';

import images from '../../../assets/images';

class MyCatsListCell extends React.Component {
  render() {
    const {catInfo} = this.props;

    return (
      <View style={[styles.container]}>
        <Image resizeMode="center" source={images.cat} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{catInfo.name}</Text>
          <View style={styles.catInfo}>
            <View style={styles.info}>
              <Text style={styles.itemInfoTitle}>Weigth</Text>
              <Text style={styles.itemInfoTxt}>{catInfo.weight}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.itemInfoTitle}>Years</Text>
              <Text style={styles.itemInfoTxt}>{catInfo.birth}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.itemInfoTitle}>Breed</Text>
              <Text style={styles.itemInfoTxt}>{catInfo.breed}</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

MyCatsListCell.defaultProps = {
  catInfo: {},
};

MyCatsListCell.propTypes = {
  catInfo: PropTypes.object,
};

export default MyCatsListCell;
