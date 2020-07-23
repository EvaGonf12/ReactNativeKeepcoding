import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, Image} from "react-native";
import styles from "./styles";

import images from "../../../assets/images"

class FloatingButton extends React.Component {
    render() {
      const {customStyle, onPress} = this.props;

      return (
        <TouchableOpacity
          style={[styles.button, customStyle]}
          onPress={onPress}>
          <Image resizeMode="cover" source={images.floatingButton}/>
        </TouchableOpacity>
      );
    }
  }

  FloatingButton.defaultProps = {
    onPress: () => {},
    customStyle: {},
  };
  
  FloatingButton.propTypes = {
    onPress: PropTypes.func,
    customStyle: PropTypes.object
  };
  
  export default FloatingButton;