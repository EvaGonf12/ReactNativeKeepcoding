import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

import styles from './styles';

class MenuImageBg extends React.Component {
  render() {
    const image = {uri: this.props.image} 
    return (
      <Image resizeMode={"cover"} source={image} style={styles.image}/>
    );
  }
}

MenuImageBg.defaultProps = {
  image: ""
};

MenuImageBg.propTypes = {
  image: PropTypes.string
};

export default MenuImageBg;
