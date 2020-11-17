import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Form from '../screens/Form';
import MapScreen from '../screens/MapScreen';
import Welcome from '../screens/Welcome';

const screens = {
  Welcome: {
    screen: Welcome,
    navigationOptions: { headerShown: false },
  },
  Form: {
    screen: Form,
    navigationOptions: { headerShown: false },
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: { headerShown: false },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
