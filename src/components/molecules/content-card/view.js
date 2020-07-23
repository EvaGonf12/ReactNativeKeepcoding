import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {BASE_URL} from '../../../config/api';

// Atoms
import {CustomButton} from "../../atoms"

// Assets
import colors from '../../../assets/colors';

class ContentCard extends React.Component {

  render() {
    const {title, buttonText, image, customStyle, onPress} = this.props;

    return (
      <View style={[styles.container, customStyle]}>
        <Image resizeMode={'cover'} source={image} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <CustomButton
          label={buttonText}
          colorBg={colors.primary}
          colorTxt={colors.black}
          onPress={onPress}
          customStyle={styles.button}
        />
      </View>
    );
  }
}

ContentCard.defaultProps = {
  title: "",
  buttonText: "",
  onPress: () => {}
};

ContentCard.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func
};

export default ContentCard;
