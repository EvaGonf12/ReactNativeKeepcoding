import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, Text, ActivityIndicator} from "react-native";
import styles from "./styles";

class FloatingButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        width: 65,
        height: 65
      };
    }

    render() {
      const {character} = this.props;
      const image = require("../../../assets/images/floatingButton.svg");

      return (
        <TouchableOpacity
          style={{...styles.button, ...style}}
          onPress={loading ? null : onPress}>
          <Image source={image}  style={styles.image}/>
        </TouchableOpacity>
      );
    }
  }

  FloatingButton.defaultProps = {
    onPress: () => {},
    style: {},
  };
  
  FloatingButton.propTypes = {
    onPress: PropTypes.func
  };
  
  export default FloatingButton;