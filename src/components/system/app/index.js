import React from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {Provider} from 'react-redux';

// STORE
import store from '../../../config/redux';

// ASSETS
import colors from '../../../assets/colors';

// PAGES
import {Splash, CatsList, CatDetails, Contents, MyCatsList, AddMyCat} from '../../pages';

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
              title={"Cats App"}
              key={'Contents'}
              backTitle={null}
              component={Contents}
              navigationBarStyle={{backgroundColor: colors.primary}}
              titleStyle={{color: colors.black}}
              backButtonTextStyle={{color: colors.black}}
              backButtonTintColor={colors.black}
            />        
            <Scene
              title={"My Cats"}
              key={"MyCatsList"}
              component={MyCatsList}
              backTitle={"Contents"}
              navigationBarStyle={{backgroundColor: colors.primary}}
              titleStyle={{color: colors.black}}
              backButtonTextStyle={{color: colors.black}}
              backButtonTintColor={colors.black}
              rightTitle={'New'}
              onRight={() => Actions.push('AddMyCat')}
              rightButtonTextStyle={{color: colors.black}}
            />
            <Scene
              title={"AddMyCat"}
              key={"AddMyCat"}
              component={AddMyCat}
              backTitle={"My Cats"}
              navigationBarStyle={{backgroundColor: colors.primary}}
              titleStyle={{color: colors.black}}
              backButtonTextStyle={{color: colors.black}}
              backButtonTintColor={colors.black}
            />
            <Scene
              title={"Breeds"}
              key={'CatsList'}
              component={CatsList}
              navigationBarStyle={{backgroundColor: colors.primary}}
              titleStyle={{color: colors.black}}
              backButtonTextStyle={{color: colors.black}}
              backButtonTintColor={colors.black}
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
