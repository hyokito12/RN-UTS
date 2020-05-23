import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();
const backIcon = <Icon name="md-arrow-round-back" size={35} color="white" />;
const starIcon = <MCIcons name="star-box" size={40} color="white" />;
const keyIcon = <MCIcons name="key" size={40} color="white" />;
const chatIcon = <MCIcons name="chat-processing" size={40} color="white" />;
const bellIcon = <MCIcons name="bell" size={40} color="white" />;
const arrowIcon = <MCIcons name="arrow-expand" size={40} color="white" />;
const helpIcon = <MCIcons name="help" size={40} color="white" />;

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  _onHandlerHome = () => {
    this.props.navigation.navigate('Main');
  };
  _onHandlerChat = () => {
    this.props.navigation.navigate('Chat');
  };
  _onHandlerAttachment = () => {
    this.props.navigation.navigate('Attachment');
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#132F64',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 50,
            marginTop: 30,
          }}>
          <TouchableOpacity onPress={() => this._onHandlerHome()}>
            {backIcon}
          </TouchableOpacity>
          <Text style={{marginLeft: 20, fontSize: 36, color: 'white'}}>
            Profile
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 30,
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: '#122039',
          }}>
          <Image
            style={{width: 60, height: 60, margin: 10}}
            source={require('../../assets/profilePhoto.png')}
          />
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
              Permata Nur
            </Text>
            <Text style={{fontSize: 18, color: '#C4C4C4'}}>
              Jangan pesimis apalagi optimis
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            marginTop: 30,
            backgroundColor: '#122039',
            borderWidth: 2,
            borderColor: 'white',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', margin: 1}}>
            {starIcon}
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                Starred Messages
              </Text>
              <View
                style={{height: 2, width: '100%', backgroundColor: 'white'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', margin: 1}}>
            {keyIcon}
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                Account
              </Text>
              <View
                style={{height: 2, width: '100%', backgroundColor: 'white'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onHandlerChat()}
            style={{flexDirection: 'row', margin: 1}}>
            {chatIcon}
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                Chat
              </Text>
              <View
                style={{height: 2, width: '100%', backgroundColor: 'white'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', margin: 1}}>
            {bellIcon}
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                Notifications
              </Text>
              <View
                style={{height: 2, width: '100%', backgroundColor: 'white'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onHandlerAttachment()}
            style={{flexDirection: 'row', margin: 1}}>
            {arrowIcon}
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                Attachment
              </Text>
              <View
                style={{height: 2, width: '100%', backgroundColor: 'white'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', margin: 1}}>
            {helpIcon}
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                Help
              </Text>
              <View
                style={{height: 2, width: '100%', backgroundColor: 'white'}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Image style={{marginTop: 30, width: 323, height: 90}} source={require('../../assets/LogoPrasmul.png')} />
        <Text style={{color: 'white', fontSize: 18, marginTop: 20}}>Powered by UniversityTube</Text>
      </View>
    );
  }
}
