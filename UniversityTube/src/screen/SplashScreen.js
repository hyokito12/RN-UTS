import React, {Component} from 'react';
import {View, Image} from 'react-native';
const THREE_SECONDS = 2000;
export default class SplashScreen extends Component {
  async componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, THREE_SECONDS);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}>
        <Image source={require('../assets/Splash.png')} />
      </View>
    );
  }
}
