import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './styles';
import Picker from 'react-native-picker-select';
import colors from '../../../assets/colors';

class SelectDropdown extends React.Component {
  render() {
    const {onValueChange, names, label, customStyle} = this.props;
    const pickerStyle = {
      inputIOS: styles.select,
      placeholder: styles.placeholder,
      inputAndroid: styles.select,
  };
    return (
      <View style={[styles.container, customStyle]}>
        <Text style={styles.title}>{label}</Text>
        <Picker
          style={pickerStyle}
          onValueChange={onValueChange}
          items={names}
          placeholderTextColor="red"
          placeholder={{label: 'Select a breed', value: null}}
          doneText="Select"
        />
      </View>
    );
  }
}

SelectDropdown.defaultProps = {
  label: "",
  onValueChange: () => {},
  customStyle: {}
};

SelectDropdown.propTypes = {
  onValueChange: PropTypes.func,
  names: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  customStyle: PropTypes.any
};

export default SelectDropdown;
