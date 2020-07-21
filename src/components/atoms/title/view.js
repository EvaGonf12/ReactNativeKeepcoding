import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import styles from './styles';

class Title extends React.Component {
  render() {
    const customStyle = this.props.customStyle
    const label = this.props.label

    return (
      <Text style={[styles.title, customStyle]}>{label}</Text>
    );
  }
}

Title.defaultProps = {
  label: "",
  customStyle: {}
};

Title.propTypes = {
  label: PropTypes.string,
  customStyle: PropTypes.any
};

export default Title;
