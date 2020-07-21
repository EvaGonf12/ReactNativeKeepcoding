import React from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import colors from '../../../assets/colors';

import {Splash, CatsList, CatDetails} from '../../pages';

import store from '../../../config/redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key={'Splash'} component={Splash} hideNavBar={true} />         
            <Scene
              title={"Breeds"}
              key={'CatsList'}
              component={CatsList}
              navigationBarStyle={{backgroundColor: colors.primary}}
              titleStyle={{color: colors.black}}
              backButtonTextStyle={{color: colors.black}}
              backButtonTintColor={colors.black}
              rightTitle={'New'}
              onRight={() => Actions.push('CatsListAdd')}
              rightButtonTextStyle={{color: colors.black}}
            />
            <Scene
              key={'BreedDetails'}
              component={CatDetails}
              navTransparent={1}
              backTitle={"Breeds"}
              backButtonTextStyle={{color: colors.black}}
              backButtonTintColor={colors.black}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
