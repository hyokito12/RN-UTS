import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
const myIcon = <Icon name="search1" size={25} color="white" />;
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  _onHandlerProfile = () => {
    this.props.navigation.navigate('Profile');
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
        <ScrollView>
          <View style={{marginBottom: 30}}>
            <Image source={require('../../assets/vid1.png')} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
              }}>
              <Image
                style={{marginLeft: 10, marginTop: 10, borderRadius: 50}}
                source={require('../../assets/PakMata.png')}
              />
              <View
                style={{
                  marginLeft: 10,
                  height: 50,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <Text>Error Handling(Exception) - C++</Text>
                <Text>Permata Nur - 752K views - 34 minutes ago</Text>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 30}}>
            <Image source={require('../../assets/vid2.png')} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
              }}>
              <Image
                style={{marginLeft: 10, marginTop: 10, borderRadius: 50}}
                source={require('../../assets/PakWisnu.png')}
              />
              <View
                style={{
                  marginLeft: 10,
                  height: 50,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <Text>Proses UI/UX Design</Text>
                <Text>Stevanus Wisnu - 821K views - 39 minutes ago</Text>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 30}}>
            <Image source={require('../../assets/vid3.png')} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
              }}>
              <Image
                style={{marginLeft: 10, marginTop: 10, borderRadius: 50}}
                source={require('../../assets/PakStanley.png')}
              />
              <View
                style={{
                  marginLeft: 10,
                  height: 50,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <Text>Sistem Basis Data</Text>
                <Text>Stanley Makalew - 1.2 M views - 2 hours ago</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
