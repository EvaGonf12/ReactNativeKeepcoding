import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Image} from 'react-native';
import styles from './styles';

// MOLECULES
import {CustomInput, SelectDropdown, CustomButton} from '../../atoms';

// ASSETS
import colors from '../../../assets/colors';
import images from "../../../assets/images";

class AddMyCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birth: '',
      breed: '',
      weight: '',
      error: false
    };
  }

  componentDidMount() {
    console.log("ADD CAT")
    this.props.getBreedsNames();
  }

  _onSubmit = () => {
    const {name, birth, breed, weight} = this.state;
    const data = {
      name: name,
      birth: birth,
      breed: breed,
      weight: weight + ' Kg',
    };
    this.props.postMyCat(data);
  };

  render() {
    const loading = this.props.loading;
    const names = this.props.names;

    return (
      <SafeAreaView style={styles.container}>
        <Image
          resizeMode="center"
          source={images.cat}
          style={styles.img}
        />
        <CustomInput
          label={'Name'}
          placeholder={"Insert your friend's name"}
          onChangeText={text => {
            this.setState({
              name: text
            });
          }}
          customStyle={styles.input}
        />
        <CustomInput
          label={'Birthday'}
          placeholder={'dd-mm-yyyy'}
          onChangeText={text => {
            this.setState({
              birth: text
            });
          }}
          customStyle={styles.input}
        />
        <CustomInput
          label={'Weight (Kg)'}
          placeholder={"Insert your friend's weight"}
          onChangeText={text => {
            this.setState({
              weight: text
            });
          }}
          customStyle={styles.input}
        />
        <SelectDropdown
          label={"Breed"}
          names={names}
          onValueChange={text => {
            this.setState({
              breed: text
            });
          }}
          customStyle={styles.input}
        />
        {this.state.error ? 
          <View style={styles.errorContainer}>
            <Image source={images.error} style={styles.errorIcon}/>
            <Text style={styles.error}>{error}</Text>
          </View> 
          : null}
        <CustomButton
          label={"Create"}
          colorBg={colors.primary}
          colorTxt={colors.black}
          onPress={this._onSubmit}
          customStyle={styles.button}
        />
      </SafeAreaView>
    );
  }
}

AddMyCat.propTypes = {
  names: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getBreedsNames: PropTypes.func,
  postMyCat: PropTypes.func
};

export default AddMyCat;
