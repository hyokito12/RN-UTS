import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
const myIcon = <Icon name="search1" size={25} color="white" />;
const myIcon2 = <Icon name="plus" size={25} color="white" />;
export default class ChatScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  _onHandlerProfile = () => {
    this.props.navigation.navigate('Profile');
  };
  _onHandlerDetailedChat = () => {
    this.props.navigation.navigate('DetailedChat');
  };
  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#132F64',
            width: 412,
            height: 70,
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../assets/LogoPrasmul.png')} />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {myIcon}
            <TouchableOpacity onPress={() => this._onHandlerProfile()}>
              <Image
                style={{marginLeft: 30, marginRight: 70}}
                source={require('../../assets/fotoProfile.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this._onHandlerDetailedChat()}
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '10%',
            margin: 10,
          }}>
          <Image source={require('../../assets/profilePhoto.png')} />
          <View
            style={{
              width: '80%',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              marginLeft: 10,
            }}>
            <Text style={{color: 'black', fontSize: 15, marginBottom: 5}}>
              Permata Nur
            </Text>
            <Text style={{color: 'black', fontSize: 10, marginBottom: 5}}>
              You: Pak untuk tugas besok yang dikumpul apa saja ya pak?
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor: 'white', width: '100%', height: 380}} />
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 200,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#132F64',
              width: 60,
              height: 60,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}>
            {myIcon2}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
