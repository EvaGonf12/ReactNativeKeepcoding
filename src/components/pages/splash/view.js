import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

// import {Actions} from 'react-native-router-flux';
import styles from './styles';
import colors from '../../../assets/colors';

// ATOMS
import {CustomButton} from '../../atoms';

class Splash extends React.Component {
  componentDidMount() {
    //setTimeout(() => Actions.replace('Home'), 1000);
  }

  _start = () => {
    console.log('GOTO HOME');
    Actions.push('Contents', {title: "Cats App"});
  };

  render() {
    const image = require('../../../assets/images/bg_launch.png');
    return (
      <ImageBackground resizeMode={'cover'} source={image} style={styles.image}>
        <Text style={styles.title}>Don't buy, adopt!</Text>
        <CustomButton
          label="Access"
          colorBg={colors.primary}
          colorTxt={colors.colorTxt}
          onPress={this._start}
          customStyle={styles.button}
        />
      </ImageBackground>
    );
  }
}

export default Splash;
