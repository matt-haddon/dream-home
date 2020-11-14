import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Form from '../screens/Form';
import MapScreen from '../screens/MapScreen';
import Welcome from '../screens/Welcome';

const screens = {
  Welcome: {
    screen: Welcome,
  },
  Form: {
    screen: Form,
  },
  MapScreen: {
    screen: MapScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
