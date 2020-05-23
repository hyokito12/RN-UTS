import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
const myIcon = <Icon name="search1" size={25} color="white" />;
export default class FeedsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <ScrollView>
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
        <View style={{marginBottom: 30}}>
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
              <Text>Permata Nur</Text>
              <Text>Universitas Prasetiya Mulya</Text>
            </View>
          </View>
          <Text style={{margin: 10}}>
            [PENTING] silahkan cek video terbaru saya untuk kuliah minggu ini,
            kuis bisa dikerjakan di attachment profile saya.
          </Text>
          <Image source={require('../../assets/subs3.png')} />
        </View>
        <View style={{marginBottom: 30}}>
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
              <Text>Wisnu Wijaya</Text>
              <Text>Tangerang Selatan</Text>
            </View>
          </View>
          <Text style={{margin: 10}}>
              [PENGUMUMAN] Bagi Mahasiswa Software Engineering angkatan 2017, 2018, 2019 dapat
              Mengumpulkan datanya langsung ke saya melalui email pmsbe saya. Terima Kasih
          </Text>
        </View>
        <View style={{marginBottom: 30}}>
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
              <Text>Stanley Makalew</Text>
              <Text>Jakarta Selatan</Text>
            </View>
          </View>
          <Text style={{margin: 10}}>
              [PENTING] silahkan cek video terbaru saya untuk kuliah minggu ini, kuis bisa dikerjakan
              di attachment profile saya.
          </Text>
          <Image source={require('../../assets/vid3.png')} />
        </View>
      </ScrollView>
    );
  }
}
