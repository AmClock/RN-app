import {createStackNavigator, createAppContainer} from 'react-navigation';
import TitleScreen from '../src/screen/TitleScreen'
import MainScreen from '../src/screen/MainScreen';
import LoginScreen from "./screen/LoginScreen";
import SignScreen from "./screen/SignScreen";

const AppStackNavigator = createStackNavigator(
    {
        Title: {screen: TitleScreen},
        Sign: {screen: SignScreen},
        Login: {screen: LoginScreen},
        Main: {screen: MainScreen},
    },
    {
        headerMode: 'none',
    }
);

export default createAppContainer(AppStackNavigator);