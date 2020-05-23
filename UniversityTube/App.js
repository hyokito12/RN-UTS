import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screen/Home/HomeScreen';
import SubscriptionScreen from './src/screen/Subscription/SubscriptionScreen';
import FeedsScreen from './src/screen/Feeds/FeedsScreen';
import ChatScreen from './src/screen/Chat/ChatScreen';
import DetailedChatScreen from './src/screen/Chat/DetailedChatScreen';
import ProfileScreen from './src/screen/Profile/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './src/screen/Auth/Login';
import RegisterScreen from './src/screen/Auth/Register';
import ForgotPasswordScreen from './src/screen/Auth/ForgotPassword';
import SplashScreen from './src/screen/SplashScreen';

Icon.loadFont();
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});
const SubscriptionStack = createStackNavigator({
  Subscription: SubscriptionScreen,
});
const FeedsStack = createStackNavigator({Feeds: FeedsScreen});
const ChatStack = createStackNavigator({Chat: ChatScreen});
const ProfileStack = createStackNavigator({Profile: ProfileScreen});
const DetailedChatStack = createStackNavigator({DetailedChat: DetailedChatScreen});
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Forget: ForgotPasswordScreen,
  Register: RegisterScreen,
});
const MainStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Subscription: SubscriptionStack,
    Feeds: FeedsStack,
    Chat: ChatStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = null;
        if (routeName === 'Home') {
          iconName = 'home-outline';
        } else if (routeName === 'Subscription') {
          iconName = 'youtube-subscription';
        } else if (routeName === 'Feeds') {
          iconName = 'newspaper';
        } else if (routeName === 'Chat') {
          iconName = 'chat-processing';
        }
        return <Icon name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#5E61AC',
      inactiveTintColor: '#aaa',
      showLabel: true,
      style: {
        elevation: 4,
      },
    },
  },
);
const AppStack = createAppContainer(
  createSwitchNavigator(
    {
      Main: MainStack,
      Auth: AuthStack,
      Splash: SplashScreen,
      Profile: ProfileStack,
      DetailedChat: DetailedChatStack,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
export default AppStack;
