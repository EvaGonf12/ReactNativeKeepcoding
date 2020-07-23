import React from 'react';
import {SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';

// import {Actions} from 'react-native-router-flux';
import styles from './styles';

// ASSETS
import images from '../../../assets/images';

// MOLECULES
import {ContentCard} from '../../molecules';

class Contents extends React.Component {
  componentDidMount() {
    //setTimeout(() => Actions.replace('Home'), 1000);
  }

  _showBreedsList = () => {
    console.log('GOTO BREEDS');
    Actions.push('CatsList', {title: 'Breeds'});
  };

  _showMyCats = () => {
    console.log('GOTO MY CATS');
    Actions.push('MyCatsList', {title: 'My Cats'});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ContentCard
          title={'Cat Breeds'}
          buttonText={'Show List'}
          image={images.card1}
          onPress={this._showBreedsList}
          customStyle={styles.card}
        />
        <ContentCard
          title={'My cats'}
          buttonText={'Show List'}
          image={images.card2}
          onPress={this._showMyCats}
          customStyle={styles.card}
        />
      </SafeAreaView>
    );
  }
}

export default Contents;
