import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {Picker} from '@react-native-community/picker';
export default class Login extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  _onHandlerRegistration = () => {
    this.props.navigation.navigate('Register');
  };
  _onHandlerLogin = () => {
    this.props.navigation.navigate('Main');
  };
  _onHandlerForgetPassword = () => {
    this.props.navigation.navigate('Forget');
  };
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', university: ''};
  }
  state = {
    university: '-Choose University-',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{alignItems: 'center', marginBottom: 50}}
          source={require('../../assets/LogoUniversityTube.png')}
        />
        <Text>Username</Text>
        <TextInput
          style={{
            height: 50,
            width: 300,
            borderWidth: 1,
            borderColor: '#267ABF',
            borderRadius: 5,
          }}
          onChangeText={(username) => this.setState({username})}
        />
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={{
            height: 50,
            width: 300,
            borderWidth: 1,
            borderColor: '#267ABF',
            borderRadius: 5,
          }}
          onChangeText={(password) => this.setState({password})}
        />
        <Text>University</Text>
        <View
          style={{
            height: 50,
            width: 300,
            backgroundColor: '#267ABF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Picker
            mode="dropdown"
            selectedValue={this.state.university}
            style={{
              height: 45,
              width: 295,
              backgroundColor: 'white',
              borderRadius: 5,
            }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({university: itemValue})
            }>
            <Picker.Item label="-Choose University-" value="" />
            <Picker.Item label="Univ. Prasetiya Mulya" value="upm" />
            <Picker.Item label="Univ. Indonesia" value="ui" />
            <Picker.Item label="Univ. Gajah Mada" value="ugm" />
            <Picker.Item label="Univ. Brawijaya" value="ub" />
            <Picker.Item label="ITB" value="itb" />
            <Picker.Item label="IPB" value="ipb" />
          </Picker>
        </View>
        <TouchableOpacity onPress={() => this._onHandlerForgetPassword()}>
          <Text style={{color: '#267ABF', marginTop: 20}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._onHandlerLogin()}
          style={{
            width: 125,
            height: 53,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#267ABF',
            marginTop: 20,
            borderRadius: 7,
          }}>
          <Text style={{color: 'white', fontSize: 19}}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
