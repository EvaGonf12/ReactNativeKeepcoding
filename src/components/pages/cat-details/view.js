import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, Image} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

// ATOMS
import {MenuImageBg, Title, Paragraph} from '../../atoms';

// RATING
import Images from "../../../assets/images"

class CatBreedDetails extends React.Component {
  componentDidMount() {
    this.props.getBreed();
  }

  render() {
    const loading = this.props.loading;
    const breed = this.props.breed;
    console.log("BREED!!!!!")
    console.log(breed)
    return (
      <ScrollView style={styles.container}>
        <MenuImageBg image={breed.imageURL} />
        <Title label={breed.name} customStyle={styles.title} />
        <Paragraph label={breed.temperament} customStyle={styles.subtitle} />
        <View style={styles.viewFirts}>
          <Paragraph label="Adaptability" customStyle={styles.p}/>
          <Image
            resizeMode={'cover'}
            source={Images[`rating${breed.adaptability}`]}
            style={styles.img}
          />
        </View>
        <View style={styles.view}>
          <Paragraph label="Affection Level" customStyle={styles.p} />
          <Image
            resizeMode={'cover'}
            source={Images[`rating${breed.adaptability}`]}
            //source={Rating[breed.affection_level]}
            style={styles.img}
          />
        </View>
        <View style={styles.view}>
          <Paragraph label="Child Friendly" customStyle={styles.p} />
          <Image
            resizeMode={'cover'}
            source={Images.rating0}
            //source={Rating[breed.child_friendly]}
            style={styles.img}
          />
        </View>
        <View style={styles.view}>
          <Paragraph label="Energy  Level" customStyle={styles.p} />
          <Image
            resizeMode={'cover'}
            source={Images[`rating${breed.adaptability}`]}
            //source={Rating[breed.energy_level]}
            style={styles.img}
          />
        </View>
        <View style={styles.view}>
          <Paragraph label="Intelligence" customStyle={styles.p} />
          <Image
            resizeMode={'cover'}
            source={Images[`rating${breed.adaptability}`]}
            //source={Rating[breed.intelligence]}
            style={styles.img}
          />
        </View>
        <View style={styles.view}> 
          <Paragraph label="Energy Level" customStyle={styles.p} />
          <Image
            resizeMode={'cover'}
            source={Images[`rating${breed.adaptability}`]}
            //source={Rating[breed.energy_level]}
            style={styles.img}
          />
        </View>
        <Paragraph label="Description" customStyle={styles.pSection} />
        <Paragraph label={breed.description} customStyle={styles.description} />
      </ScrollView>
    );
  }
}

CatBreedDetails.propTypes = {
  getBreed: PropTypes.func,
  breed: PropTypes.any,
  loading: PropTypes.bool
};

export default CatBreedDetails;
