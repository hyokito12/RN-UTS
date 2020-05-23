import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
const backIcon = <Icon name="md-arrow-round-back" size={35} color="white" />;
const plusIcon = <FAIcon name="plus" size={30} color="#343AFF" />;
const imageIcon = <FAIcon name="image" size={30} color="#343AFF" />;

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  _onHandlerHome = () => {
    this.props.navigation.navigate('Main');
  };
  constructor(props) {
    super(props);
    this.state = {chat: ''};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: 30,
            paddingTop: 20,
            backgroundColor: '#132F64',
          }}>
          <TouchableOpacity onPress={() => this._onHandlerHome()}>
            {backIcon}
          </TouchableOpacity>
          <Image
            style={{width: 60, height: 60, margin: 10}}
            source={require('../../assets/profilePhoto.png')}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Permata Nur
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  alignItems: 'center',
                  marginLeft: 10,
                  marginTop: 5,
                  backgroundColor: 'green',
                  borderRadius: 10,
                  width: 10,
                  height: 10,
                }}
              />
              <Text style={{marginLeft: 10, fontSize: 13, color: 'white'}}>
                Online
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 510,
          }}
        />
        <View
          style={{
            backgroundColor: '#FEF5F5',
            flexDirection: 'row',
            width: '100%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {plusIcon}
          <TextInput
            style={{
              height: 40,
              width: 280,
              borderWidth: 1,
              borderColor: '#267ABF',
              borderRadius: 5,
              marginLeft: 20,
              marginRight: 20,
            }}
            onChangeText={(chat) => this.setState({chat})}
          />
          {imageIcon}
        </View>
      </View>
    );
  }
}
