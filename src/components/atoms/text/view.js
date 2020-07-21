import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import styles from './styles';

class Paragraph extends React.Component {
  render() {
    const customStyle = this.props.customStyle
    const label = this.props.label

    return (
      <Text style={[styles.text, customStyle]}>{label}</Text>
    );
  }
}

Paragraph.defaultProps = {
  label: "",
  customStyle: {}
};

Paragraph.propTypes = {
  label: PropTypes.string,
  customStyle: PropTypes.any
};

export default Paragraph;
