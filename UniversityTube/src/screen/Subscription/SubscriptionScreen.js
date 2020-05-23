import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
const myIcon = <Icon name="search1" size={25} color="white" />;
export default class SubscriptionScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
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
            <Image source={require('../../assets/subs1.png')} />
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
                <Text>Pengantar Java untuk Pemula</Text>
                <Text>Permata Nur - 1M views - 1 hour ago</Text>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 30}}>
            <Image source={require('../../assets/subs2.png')} />
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
                <Text>Membuat Aplikasi Berbasi IOS</Text>
                <Text>Permata Nur - 1M views - 1 hour ago</Text>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 30}}>
            <Image source={require('../../assets/subs3.png')} />
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
                <Text>PEMBAHASAN LENGKAP INTI BUMI</Text>
                <Text>Permata Nur - 1M views - 1 hour ago</Text>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 30}}>
            <Image source={require('../../assets/subs4.png')} />
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
                <Text>PEMBAHASAN LENGKAP INTI BUMI</Text>
                <Text>Permata Nur - 1M views - 1 hour ago</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
