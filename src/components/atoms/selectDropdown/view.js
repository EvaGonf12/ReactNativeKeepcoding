import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-community/picker';

class SelectDropdown extends React.Component {
  state = {
    breed: "Aegean",
  };

  render() {
    const {onValueChange, names, label, customStyle} = this.props;
    
    let items = names.map( (s, i) => {
      return <Picker.Item key={i} value={s.value} label={s.label} />
    });
    return (
      <View style={[styles.container, customStyle]}>
        <Text style={styles.title}>{label}</Text>
        <Picker
          selectedValue={this.state.breed}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({breed: itemValue})
            onValueChange(itemValue)
          }}
        >
          {items}
        </Picker>
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
