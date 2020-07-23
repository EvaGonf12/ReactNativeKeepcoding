import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, Text, View, Image} from 'react-native';
import styles from './styles';

// ASSETS
import colors from '../../../assets/colors';

class CustomInput extends React.Component {
  render() {
    const {onChangeText, placeholder, label, customStyle} = this.props;

    return (
      <View style={[styles.container, customStyle]}>
        <Text style={styles.title}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          onChangeText={onChangeText}
          underlineColorAndroid={'transparent'}
        />
      </View>
    );
  }
}

CustomInput.defaultProps = {
  value: "",
  onChangeText: () => {},
  customStyle: {},
};

CustomInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  customStyle: PropTypes.any
};

export default CustomInput;
