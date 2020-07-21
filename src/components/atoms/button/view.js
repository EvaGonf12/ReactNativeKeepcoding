import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {ThemeProvider, Button} from 'react-native-elements';

import styles from './styles';
import colors from '../../../assets/colors';

class CustomButton extends React.Component {
  render() {
    const {label, colorBg, colorTxt, onPress, customStyle, loading} = this.props;
    
    // Tema del element button
    const theme = {
      colors: {
        primary: colorBg,
      },
      Button: {
        titleStyle: {
          color: colorTxt,
          fontSize: 22,
          fontFamily: "System"
        },
        containerStyle: {
          borderRadius: 28
        }
      },
    };

    return (
      <View style={customStyle}>
        <ThemeProvider theme={theme}>
          <Button
            title={label}
            type="solid"
            style={styles.button}
            loading={loading}
            onPress={loading ? null : onPress} 
          />
        </ThemeProvider>
      </View>
    );
  }
}

CustomButton.defaultProps = {
  label: "",
  colorBg: colors.black,
  colorTxt: colors.black,
  onPress: () => {},
  customStyle: {},
  loading: false
};

CustomButton.propTypes = {
  label: PropTypes.string,
  colorBg: PropTypes.string,
  colorTxt: PropTypes.string,
  onPress: PropTypes.func,
  customStyle: PropTypes.any,
  loading: PropTypes.bool
};

export default CustomButton;
