import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, TouchableOpacity, Text, Image, Alert, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import _ from 'lodash';

// OPTIONS
import {IMAGE_OPTIONS} from '../../../config/images';

// MOLECULES
import {CustomInput, SelectDropdown, CustomButton} from '../../atoms';

// ASSETS
import colors from '../../../assets/colors';
import images from '../../../assets/images';

class AddMyCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birth: '',
      breed: '',
      weight: '',
      image: null,
      error: false,
      errorTxt: '',
    };
  }

  componentDidMount() {
    this.props.getBreedsNames();
  }

  _onSubmit = () => {
    const {name, birth, breed, weight, image} = this.state;
    const {onSubmit} = this.props;

    if (!name) {
      this.setState({error: true, errorTxt: 'Name is required'});
      return;
    }
    if (!birth) {
      this.setState({error: true, errorTxt: 'Birth is required'});
      return;
    }
    if (!weight) {
      this.setState({error: true, errorTxt: 'Weight is required'});
      return;
    }
    if (!breed) {
      this.setState({error: true, errorTxt: 'Breed is required'});
      return;
    }

    const data = {
      name: name,
      birth: birth,
      breed: breed,
      weight: weight + ' Kg',
      image: image && image.data ? `data:image/jpeg;base64,${image.data}` : null,
    };
    onSubmit(data);
    
  };

  _onSelectImage = () => {
    ImagePicker.showImagePicker(IMAGE_OPTIONS, response => {
      if (response.uri) {
        this.setState({image: response});
      }
    });
  };

  render() {
    const {name, birth, breed, weight, image} = this.state;
    const loading = this.props.loading;
    const names = this.props.names;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.containerScroll}>
          <TouchableOpacity
            onPress={this._onSelectImage}
            style={styles.imageContainer}>
            <Image source={image} style={styles.imageBackground} />

            <Image source={images.addPhoto} />
            <Text style={styles.imageLabel}>
              {image ? 'Press to edit image' : 'Press to select image'}
            </Text>
          </TouchableOpacity>
          {this.state.error ? (
            <View style={styles.errorContainer}>
              <Image source={images.error} style={styles.errorIcon} />
              <Text style={styles.errorTxt}>{this.state.errorTxt}</Text>
            </View>
          ) : null}
          <CustomInput
            label={'Name'}
            placeholder={"Insert your friend's name"}
            onChangeText={text => {
              this.setState({
                error: false,
                errorTxt: '',
                name: text,
              });
            }}
            customStyle={styles.input}
          />
          <CustomInput
            label={'Birthday'}
            placeholder={'dd-mm-yyyy'}
            onChangeText={text => {
              this.setState({
                error: false,
                errorTxt: '',
                birth: text,
              });
            }}
            customStyle={styles.input}
          />
          <CustomInput
            label={'Weight (Kg)'}
            placeholder={"Insert your friend's weight"}
            onChangeText={text => {
              this.setState({
                error: false,
                errorTxt: '',
                weight: text,
              });
            }}
            customStyle={styles.input}
          />
          <SelectDropdown
            label={'Breed'}
            names={names}
            onValueChange={text => {
              console.log(text);
              this.setState({
                error: false,
                errorTxt: '',
                breed: text,
              });
            }}
            customStyle={styles.input}
          />

          <CustomButton
            label={'Create'}
            colorBg={colors.primary}
            colorTxt={colors.black}
            onPress={this._onSubmit}
            customStyle={styles.button}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

AddMyCat.propTypes = {
  names: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getBreedsNames: PropTypes.func,
  postMyCat: PropTypes.func,
};

export default AddMyCat;
